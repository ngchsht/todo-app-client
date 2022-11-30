import { Selector } from "testcafe";
import { ReactSelector } from "testcafe-react-selectors";

fixture("All scenarios").page("http://127.0.0.1:3000/");

test("タスクがある状態でタスクを含むTOP画面が表示されること", async (t) => {
    const title = Selector("h1").withText("Todo App");
    const taskList = ReactSelector("TaskList");
    const task = ReactSelector("Task").nth(0);
    const input = task.find("input").nth(0);
    const inputCheckedBeforeClick = await input.checked;

    await t.click(task.find("input").nth(0));

    await t.expect(title.innerText).eql("Todo App");
    await t.expect(taskList.exists).eql(true);
    await t.expect(task.exists).eql(true);
    await t.expect(input.checked).notEql(inputCheckedBeforeClick);
});

test("新規タスクの作成とリストに追加されていることの確認", async (t) => {
    const title = `test task generated at ${getFormattedDate(
        new Date(),
        "yyyy/MM/dd hh:mm:ss"
    )}`;
    const homeLinkSelector = ReactSelector("Link").withText("Home");
    const newTaskLinkSelector = ReactSelector("Link").withText("New Task");
    const lastTaskSelector = ReactSelector("Task").nth(-1);
    const titleSelector = Selector("label").withText("TITLE");
    const inputSelector = Selector("input");
    const sendButtonSelector = Selector("button").withText("Send");
    const snackBarSelector = ReactSelector("Snackbar").withText(
        `${title} is created`
    );

    await t.click(newTaskLinkSelector.nth(0));

    await t.expect(titleSelector.exists).eql(true);

    await t.typeText(inputSelector, title);
    await t.click(sendButtonSelector);

    await t.expect(snackBarSelector.exists).eql(true);

    await t.click(homeLinkSelector);

    await t.expect(lastTaskSelector.innerText).eql(title);
});

const getFormattedDate = (date: Date, format: string) => {
    const symbol = {
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
    };

    const formatted = format.replace(/(M+|d+|h+|m+|s+)/g, (v) =>
        (
            (v.length > 1 ? "0" : "") +
            symbol[v.slice(-1) as keyof typeof symbol]
        ).slice(-2)
    );

    return formatted.replace(/(y+)/g, (v) =>
        date.getFullYear().toString().slice(-v.length)
    );
};
