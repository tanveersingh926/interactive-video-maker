import { required, isUrlValid, composeValidators, isEmpty } from "./validation";

describe("validations test", () => {
  it("required", () => {
    const isError = required("");
    const isNotError = required("This will pass");
    expect(isNotError).toBeUndefined();
    expect(isError).toEqual("This Field is required");
  });

  it("isUrlValid", () => {
    const isError = isUrlValid("http://google.com");
    const isNotError = isUrlValid(
      "https://www.youtube.com/watch?v=gL6zaCy2DOc"
    );
    expect(isNotError).toBeUndefined();
    expect(isError).toEqual("Please enter a valid youtube URL");
  });

  it("isEmpty", () => {
    let isItEmpty;
    // string
    isItEmpty = isEmpty("http://google.com");
    expect(isItEmpty).toBeFalsy();

    isItEmpty = isEmpty(["hi"]);
    expect(isItEmpty).toBeFalsy();

    isItEmpty = isEmpty({ url: "http://google.com" });
    expect(isItEmpty).toBeFalsy();

    isItEmpty = isEmpty({});
    expect(isItEmpty).toBeTruthy();

    isItEmpty = isEmpty([{}]);
    expect(isItEmpty).toBeTruthy();

    isItEmpty = isEmpty([]);
    expect(isItEmpty).toBeTruthy();
  });

  it("composeValidators", () => {
    const validators = composeValidators(required, isUrlValid);
    const isErrorUrl = validators("http://google.com");
    const isNotErrorUrl = validators(
      "https://www.youtube.com/watch?v=gL6zaCy2DOc"
    );
    expect(isErrorUrl).toEqual("Please enter a valid youtube URL");
    expect(isNotErrorUrl).toBeUndefined();

    const isError = validators("");
    const isNotError = validators(
      "https://www.youtube.com/watch?v=gL6zaCy2DOc"
    );
    expect(isError).toEqual("This Field is required");
    expect(isNotError).toBeUndefined();
  });
});
