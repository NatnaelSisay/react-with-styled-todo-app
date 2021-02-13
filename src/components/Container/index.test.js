import Container from ".";
import { shallow } from "enzyme";

describe("Test Container", () => {
    test("should have appropriate header", () => {
        const wrapper = shallow(<Container header="Todos" />);
        const header = wrapper.find(".header");
        expect(header.text()).toBe("Todos");

        const progressWrapper = shallow(<Container header="On Progress" />);
        const progressHeader = progressWrapper.find(".header");
        expect(progressHeader.text()).toBe("On Progress");
    });

    test("should have button when hasButton is true", () => {
        const wrapper = shallow(<Container hasButton={true} />);
        expect(wrapper.find(".button").text()).toBe("+ Add Todo");
    });

    test("Should render child element", () => {
        const wrapper = shallow(
            <Container>
                <h1 className="child">java</h1>
            </Container>
        );
        expect(wrapper.find("h1").exists()).toBe(true);
    });
});
