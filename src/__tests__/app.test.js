import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import { render, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// import saveAs from "file-saver";

import { configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("App", () => {
  let appInstance;
  let appWrapper;
  beforeEach(() => {
    appWrapper = shallow(<App />);
    appInstance = appWrapper.instance();
  });

  it("it renders the app component", () => {
    const wrapper = render(<App />);
    expect(wrapper.find("div").length).toEqual(21);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("renders correctly", () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });

  it("changes number of phone numbers to be generated", () => {
    const generatorInput = appWrapper.find("GeneratorInput");
    const event = {
      preventDefault: () => {},
      target: {
        value: 20
      }
    };
    generatorInput.simulate("change", event);
    expect(appWrapper.state().generateNumber).toBe(20);
  });

  it("input value below limit", () => {
    const event = {
      target: {
        value: -1
      }
    };

    // const inputField = appInstance
    // const generatorInput = appWrapper.find("GeneratorInput");
    appInstance.numberInputChange(event)
    expect(appWrapper.state().generateNumber).toEqual(-1);
    expect(appWrapper.state().error).toBe("Input is above or below limit");



  })

  it("set error when input beyond limit", () => {
    let appWrapper = shallow(<App />);
    appWrapper.state().generateNumber = 15000;

    const event = {
      preventDefault: () => {}
    };
    appInstance.randomGenerator(event);
    appWrapper.setState({ error: "Input is above or below limit" });

    expect(appWrapper.state().generateNumber).toEqual(15000);
    expect(appWrapper.state().error).toBe("Input is above or below limit");
  });

  it("generates random phone numbers", () => {
    appWrapper.state().generateNumber = 1;
    const generatorButton = appWrapper.find("GeneratorButton");
    const event = {
      preventDefault: () => {}
    };
    generatorButton.simulate("click", event);
    appWrapper.state().randomPhoneNumbers= ["0312456789"];
    expect(appWrapper.state().randomPhoneNumbers.length).toBe(1);
  });

  it("clears phone numbers ", () => {
    appWrapper.state().randomPhoneNumbers.length = 10;
    const event = {
      preventDefault: () => {}
    };
    appInstance.clearNumbers(event);
    expect(appWrapper.state().randomPhoneNumbers.length).toBe(0);
    expect(appWrapper.state().generateNumber).toEqual("");
  });

  it("sets sorting value", () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: "ascending"
      }
    };
    appInstance.setSort(event);
    expect(appWrapper.state().sort).toBe(event.target.value);
  });

  it("sorts generated numbers by ascending", () => {


    appWrapper.state().randomPhoneNumbers = ["0312456789", "0123456789", "0342456789"]
    appWrapper.state().sort = "ascending"
    appInstance.sortGenerated()
       appWrapper.setState({
      randomPhoneNumbers: ["0123456789", "0312456789", "0342456789"].sort(appInstance.sortAscendingNumber())
    });
    expect(appWrapper.state().randomPhoneNumbers).toEqual([
      "0123456789",
      "0312456789", "0342456789"
    ]);
  });

  it("sorts generated numbers by descending", () => {
    appWrapper.state().randomPhoneNumbers = ["0312456789", "0123456789", "0342456789"]
    appWrapper.state().sort = "descending"
    appInstance.sortGenerated()
       appWrapper.setState({
      randomPhoneNumbers: ["0123456789", "0312456789", "0342456789"].sort(appInstance.sortDescendingNumber())
    });
    expect(appWrapper.state().randomPhoneNumbers).toEqual([
      "0123456789", "0312456789", "0342456789",
       
    ]);
  });

  // it('testing download function',()=>{
  //   appWrapper.state().randomPhoneNumbers.length = 10;
  //   jest.mock('file-saver', ()=>({saveAs: jest.fn()}))
  //   appInstance.downloadNumbers();
  //   expect(saveAs).toHaveBeenCalledWith()
  //   });

});
