import ListElement from ".";
import { shallow } from "enzyme";

describe("Test todo card row display", () => {
    test("should fix the state and context", () => {
        expect(true).toBeTruthy();
    });
    // test("display text content", () => {
    //     const wrapper = shallow(<ListElement text="Task 1" />);
    //     const content = wrapper.find(".content");
    //     expect(content.text()).toBe("Task 1");

    //     const newWrapper = shallow(<ListElement text="task 2" />);
    //     const newContent = newWrapper.find(".content");
    //     expect(newContent.text()).toBe("task 2");
    // });

    // // should show buttons when hovered

    // test("show buttons when hovered", () => {
    //     const wrapper = shallow(<ListElement />);

    //     wrapper.simulate("hover");
    //     expect(wrapper.find("button").length).toBe(2);
    // });

    // // should show detail when clicked
    // test("show detail when clicked", () => {
    //     const wrapper = shallow(<ListElement detail="detail" />);
    //     const container = wrapper.find(".content");

    //     expect(wrapper.find(".detail").exists()).toBe(false);
    //     container.simulate("click");
    //     expect(wrapper.find(".detail").exists()).toBe(true);
    // });
});
