import "jsdom-global/register";
import { expect } from "chai";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../src/App";
import { Header } from "../src/components/Header";
import { TaskList } from "../src/components/TaskList";
import { NewTask } from "../src/components/NewTask";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
    const getWrapper = (path: string) =>
        mount(
            <MemoryRouter initialEntries={[path]}>
                <App />
            </MemoryRouter>
        );

    it("Headerコンポーネントが存在すること", () => {
        const wrapper = getWrapper("/");
        expect(wrapper.exists(Header)).to.equal(true);
    });

    it("TaskListコンポーネントが存在すること", () => {
        const wrapper = getWrapper("/");
        expect(wrapper.exists(TaskList)).to.equal(true);
    });

    it("/newtaskにアクセスした場合、Newtaskコンポーネントが存在すること", () => {
        const wrapper = getWrapper("/newtask");
        expect(wrapper.exists(NewTask)).to.equal(true);
    });
});
