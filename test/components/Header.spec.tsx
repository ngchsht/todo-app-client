import "jsdom-global/register";
import { expect } from "chai";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Header } from "@/components/Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  let wrapper: Enzyme.ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  it("ページタイトルの確認", () => {
    const h1ElementText = wrapper.find("h1").text();
    expect(h1ElementText).to.equal("Todo App");
  });

  it("２つのリンク（HomeとNewTask）が存在すること", () => {
    const aElements = wrapper.find("a");
    expect(aElements.length).to.equal(2);
    expect(aElements.at(0).text()).to.equal("Home");
    expect(aElements.at(1).text()).to.equal("New Task");
    //TODO: リンク先が正しいことを確認するテストが必要
  });
});
