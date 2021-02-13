import Modal from ".";
import { shallow } from "enzyme";
import { Button } from "../CustomStyledElements";

describe("Test Modal", () => {
    test("Modal Has header of 'Add Todo'", () => {
        const wrapper = shallow(<Modal />);
        const header = wrapper.find(".header");
        expect(header.text()).toBe("Add Todo");
    });

    test("Modal has input field", () => {
        const wrapper = shallow(<Modal />);
        const inputField = wrapper.find("input");
        expect(inputField.exists()).toBeTruthy();
    });

    test("Modal has text area", () => {
        const wrapper = shallow(<Modal />);
        const textArea = wrapper.find(".textArea");
        expect(textArea.exists()).toBeTruthy();
    });

    test("Modal has two buttons", () => {
        const wrapper = shallow(<Modal />);
        const buttons = wrapper.find("button");
        expect(buttons.length).toBe(2);
    });

    // add button add element to list
    // close button closes the modal
});
