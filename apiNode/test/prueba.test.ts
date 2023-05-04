import { UserNotFount } from "../src/context/user/domain/errors/UserNotFount";

describe("Test", () => {
  const sum = () => {
    return 2 + 2;
  };

  test("adds 1 + 2 to equal 3", () => {
    expect(sum()).toBe(4);
  });
});

describe("Test 2", () => {
  class DisgustingFlavorError extends Error {
    constructor() {
      super("yuck, octopus flavor");
    }
  }

  function drinkFlavor(flavor: string) {
    if (flavor == "octopus") {
      throw new DisgustingFlavorError();
    }
    // Do some other stuff
  }

  test("throws on octopus", () => {
    function drinkOctopus() {
      drinkFlavor("octopus");
    }

    expect(drinkOctopus).toThrowError("yuck");
  });

  test("Test description", () => {
    const t = () => {
      throw new UserNotFount();
    };
    expect(t).toThrow(UserNotFount);
  });

  test("Test description", () => {
    const t = () => {
      throw new TypeError("UNKNOWN ERROR");
    };
    expect(t).toThrow(TypeError);
    expect(t).toThrow("UNKNOWN ERROR");
  });
});
