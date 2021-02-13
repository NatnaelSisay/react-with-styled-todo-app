import App from ".";

import { shallow } from "enzyme";

describe("test header", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test("should have lead header of 'Todo Application'", () => {
        const header = wrapper.find(".header");
        expect(header.text()).toBe("Todo Application");
    });

    test("should have a button called '+ Add Todo'", () => {
        const button = wrapper.find(".addTodo");
        expect(button.text()).toBe("+Add Todo");
    });
});
