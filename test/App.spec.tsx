import "jsdom-global/register";
import { expect } from "chai";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../src/App";
import { Header } from "../src/components/Header";
import { TaskList } from "../src/components/TaskList";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper: Enzyme.ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Headerコンポーネントが存在すること", () => {
    expect(wrapper.exists(Header)).to.equal(true);
  });

  it("TaskListコンポーネントが存在すること", () => {
    expect(wrapper.exists(TaskList)).to.equal(true);
  });
});
