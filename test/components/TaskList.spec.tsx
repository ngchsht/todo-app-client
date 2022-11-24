import React from "react";
import Enzyme, { mount } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import { TaskList, TaskResponse } from "../../src/components/TaskList";
import { Task, TaskType } from "../../src/components/Task";

const TASK_LIST_RESPONSE: TaskResponse[] = [
    { id: "1", title: "first task", completed: false },
    { id: "2", title: "second task", completed: false },
    { id: "3", title: "third task", completed: false },
];

describe("TaskList", () => {
    let wrapper: Enzyme.ReactWrapper;
    let stub: sinon.SinonStub;

    beforeEach(async () => {
        stub = sinon.stub(global, "fetch");
        stub.returns(
            // @ts-ignore
            Promise.resolve({
                ok: true,
                status: 200,
                json: async () => TASK_LIST_RESPONSE,
            })
        );
        wrapper = await mount(<TaskList />);
    });

    afterEach(() => {
        stub.restore();
    });

    it("Taskコンポーネントが存在すること", () => {
        wrapper.update();
        expect(wrapper.exists(Task)).to.equal(true);
    });

    it("APIでTaskを3つ含むTaskListを取得し、描画を行うためにPropsとしてTaskに渡す", () => {
        wrapper.update();
        const Tasks: Enzyme.ReactWrapper<TaskType> = wrapper.find(Task);

        expect(Tasks.length).to.equal(3);
        expect(Tasks.at(0).key()).to.equal("1");
        expect(Tasks.at(0).props().title).to.equal("first task");
        expect(Tasks.at(0).props().completed).to.equal(false);
    });
});
