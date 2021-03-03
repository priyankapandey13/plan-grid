import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";


Enzyme.configure({ adapter: new Adapter() });

describe("App testing", () => {
  const wrapper = shallow(<App />);
  it("validates If the App exists", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("validates the h1 childrens of App exists", () => {
    expect(wrapper.find("div h1").children()).toBeTruthy();
  });

  it("validates the search Form childrens of App exists", () => {
    expect(wrapper.find("div form input").children()).toBeTruthy();
  });

  it("validates the pagination childrens of App exists", () => {
    expect(wrapper.find("div nav ul li").children()).toBeTruthy();
  });

});

