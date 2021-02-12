import { render, screen } from "@testing-library/react";
import App from ".";

import { shallow } from "enzyme";

test("checkout enzyme", () => {
    const wrapper = shallow(<App />);
    // console.log("Wrapper", wrapper.debug());
    const link = wrapper.find("header");
    expect(link.text()).toBe("Todo");
});
