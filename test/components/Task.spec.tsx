import "jsdom-global/register";
import { expect } from "chai";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Task } from "../../src/components/Task";

Enzyme.configure({ adapter: new Adapter() });

describe("Task", () => {
    it("タスクにtitleとdoneのpropsを渡すと、titleとチェックボックスが表示される", () => {
        const wrapper = mount(
            <Task key="1" title="first task" completed={false} />
        );
        const liElement = wrapper.find("li");
        expect(liElement.text()).to.equal("first task");
        expect(liElement.find("input").props().checked).to.equal(false);
    });
});
