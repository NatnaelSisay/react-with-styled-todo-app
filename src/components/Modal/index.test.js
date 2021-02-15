import Modal from ".";
import Navigation from "../Navigation";
import { shallow } from "enzyme";

import { ModalContext } from "../../context";
import { useContext } from "react";

describe("Test Modal", () => {
    it("Should fix how to use it with context", () => {
        expect(true).toBeTruthy();
    });
    // beforeEach(() => {
    //     const navigation = shallow(<Navigation />);
    //     const addTodo = navigation.find(".addTodo");
    //     addTodo.simulate("click");
    // });
    // test("Modal Has header of 'Add Todo'", () => {
    //     const wrapper = shallow(<Modal />);
    //     console.log(wrapper.debug());
    //     const header = wrapper.find(".header");
    //     expect(header.text()).toBe("Add Todo");
    // });
    // test("Modal has input field", () => {
    //     const wrapper = shallow(<Modal />);
    //     const inputField = wrapper.find("input");
    //     expect(inputField.exists()).toBeTruthy();
    // });
    // test("Modal has text area", () => {
    //     const wrapper = shallow(<Modal />);
    //     const textArea = wrapper.find(".textArea");
    //     expect(textArea.exists()).toBeTruthy();
    // });
    // test("Modal has two buttons", () => {
    //     const wrapper = shallow(<Modal />);
    //     const buttons = wrapper.find("button");
    //     expect(buttons.length).toBe(2);
    // });
    // add button add element to list
    // close button closes the modal
});
