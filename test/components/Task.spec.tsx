import "jsdom-global/register";
import { expect } from "chai";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Task } from "../../src/components/Task";
import sinon from "sinon";
import DeleteIcon from "@material-ui/icons/Delete";

Enzyme.configure({ adapter: new Adapter() });

describe("Task", () => {
    let wrapper: Enzyme.ReactWrapper;
    let stub: sinon.SinonStub;
    let stubDeleteTask: sinon.SinonStub;

    beforeEach(() => {
        stub = sinon.stub(global, "fetch");
        stubDeleteTask = sinon.stub();
        wrapper = mount(
            <Task
                key="1"
                id="1"
                title="first task"
                completed={false}
                deleteTask={stubDeleteTask}
            />
        );
    });

    afterEach(() => {
        stub.restore();
        stubDeleteTask.reset();
    });

    it("タスクにtitleとdoneのpropsを渡すと、titleとチェックボックスが表示される", () => {
        const taskElement = wrapper.find(Task);
        expect(taskElement.text()).to.equal("first task");
        expect(taskElement.find("input").props().checked).to.equal(false);
    });

    it("チェックボックスをクリックしたら、[PUT]/tasks/{id}が呼び出されること", () => {
        const expectedArgs = [
            "/tasks/1",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ completed: true }),
            },
        ];
        const taskElement = wrapper.find(Task);

        taskElement
            .find("input")
            .simulate("change", { target: { checked: true } });

        expect(stub.callCount).to.equal(1);
        expect(stub.getCall(0).args).to.deep.equal(expectedArgs);
    });

    it("削除ボタンをクリックしたら、[DELETE]/tasks/{id}が呼び出され、画面上からも削除されていること", async () => {
        const expectedArgs = [
            "/tasks/1",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            },
        ];
        const taskElement = wrapper.find(Task);

        taskElement.find(DeleteIcon).simulate("click");
        wrapper.update();
        await new Promise((resolve) => {
            setImmediate(resolve);
        });

        expect(stub.callCount).to.equal(1);
        expect(stub.getCall(0).args).to.deep.equal(expectedArgs);

        expect(stubDeleteTask.callCount).to.equal(1);
        expect(stubDeleteTask.getCall(0).args).to.deep.equal(["1"]);
    });
});
