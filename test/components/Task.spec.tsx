import "jsdom-global/register";
import { expect } from "chai";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Task } from "../../src/components/Task";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

describe("Task", () => {
    let wrapper: Enzyme.ReactWrapper;

    beforeEach(() => {
        wrapper = mount(
            <Task id="1" key="1" title="first task" completed={false} />
        );
    });

    it("タスクにtitleとdoneのpropsを渡すと、titleとチェックボックスが表示される", () => {
        const divElement = wrapper.find("div");
        expect(divElement.text()).to.equal("first task");
        expect(divElement.find("input").props().checked).to.equal(false);
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
        const stub: sinon.SinonStub = sinon.stub(global, "fetch");
        const divElement = wrapper.find("div");

        divElement
            .find("input")
            .simulate("change", { target: { checked: true } });

        expect(stub.callCount).to.equal(1);
        expect(stub.getCall(0).args).to.deep.equal(expectedArgs);
    });
});
