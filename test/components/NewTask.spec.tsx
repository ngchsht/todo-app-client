import { expect } from "chai";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { NewTask } from "../../src/components/NewTask";
import sinon from "sinon";
import { TaskResponse } from "../../src/components/TaskList";
import { Snackbar } from "@material-ui/core";

Enzyme.configure({ adapter: new Adapter() });

const TASK_RESPONSE: TaskResponse = {
    id: "1",
    title: "1st task",
    completed: false,
};

describe("NewTask", () => {
    let wrapper: Enzyme.ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<NewTask />);
    });

    it("titleの文字列とインプットフォームとボタンが存在すること", () => {
        expect(wrapper.find("label").text()).to.equal("TITLE");
        expect(wrapper.exists("input")).to.equal(true);
        expect(wrapper.find("button").text()).to.equal("Send");
    });

    it("buttonをクリックすると[POST]:/tasksが呼び出され、スナックバーが表示されること", async () => {
        const expectedArgs = [
            "/tasks",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: "1st task" }),
            },
        ];
        const stubFetch: sinon.SinonStub = sinon.stub(global, "fetch");
        stubFetch.returns(
            // @ts-ignore
            Promise.resolve({
                ok: true,
                status: 201,
                json: async () => TASK_RESPONSE,
            })
        );
        const input = wrapper.find("input");
        const inputDOMNode: HTMLInputElement = input.getDOMNode();
        inputDOMNode.value = "1st task";

        input.simulate("change", { target: inputDOMNode });
        wrapper.find("button").simulate("click");

        expect(stubFetch.callCount).to.equal(1);
        expect(stubFetch.getCall(0).args).to.deep.equal(expectedArgs);
        expect(wrapper.exists(Snackbar)).to.equal(true);
        // expect(wrapper.update().find(Snackbar).at(0).text()).to.equal(
        //     "1st task is created"
        // );
    });
});
