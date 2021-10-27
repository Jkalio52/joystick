import validate from "./index";
describe("validate/schema/index.js", () => {
  test("throws error if schema argument is not passed", () => {
    expect(() => {
      validate.schema();
    }).toThrow("[joystick.validation] Must pass schema object.");
  });
  test("throws error if schema argument is invalid type", () => {
    expect(() => {
      validate.schema(1);
    }).toThrow("[joystick.validation] Must pass schema as an object.");
  });
  test("throws error if schema object contains properties with values that are not objects", () => {
    expect(() => {
      validate.schema({
        _id: {
          type: "string"
        },
        userId: false,
        title: {
          type: "string"
        }
      });
    }).toThrow(`Must pass an object containing rules to validate by for userId field.`);
  });
  test("throws error if schema field rule names are unsupported", () => {
    expect(() => {
      validate.schema({
        _id: {
          type: "string",
          allowedValues: "",
          element: "",
          fields: "",
          max: "",
          min: "",
          optional: "",
          required: "",
          hotDog: ""
        },
        userId: {},
        title: {
          type: "string"
        }
      });
    }).toThrow(`Invalid rule name hotDog in rule for _id field.`);
  });
  test("throws error if schema field rule.type value is unsupported", () => {
    expect(() => {
      validate.schema({
        _id: {
          type: "apples"
        }
      });
    }).toThrow(`Invalid value for schema field "_id" type rule. apples is not supported. Use one of the following: any, array, boolean, float, integer, number, object, or string.`);
  });
});
describe("validate/inputWithSchema/index.js", () => {
  test("throws error if input argument is not passed", () => {
    expect(async () => {
      const result = validate.inputWithSchema();
    }).rejects.toThrow("[joystick.validation] Must pass input.");
  });
  test("returns expected errors when rules.allowedValues validator fails", async () => {
    const errors = await validate.inputWithSchema({
      name: "apples"
    }, {
      name: {
        type: "string",
        allowedValues: ["buy", "more", "bitcoin"]
      }
    });
    expect(errors).toEqual([
      "Field name only allows the following values: buy, more, bitcoin."
    ]);
  });
  test("returns expected errors when nested rules.allowedValues validator fails", () => {
    const errors = validate.inputWithSchema({
      name: "apples",
      dog: [
        {
          breed: "Corgi"
        },
        {
          breed: "German Shepherd",
          coats: [{ type: "rough" }]
        },
        {
          breed: "English Bulldog"
        }
      ]
    }, {
      name: {
        type: "string",
        allowedValues: ["buy", "more", "bitcoin"]
      },
      dog: {
        type: "array",
        element: {
          breed: {
            type: "string",
            allowedValues: ["Corgi", "German Shepherd", "Golden Retriever"]
          },
          coats: {
            type: "array",
            element: {
              style: {
                type: "string",
                allowedValues: ["silky", "dry", "smooth"]
              }
            }
          }
        }
      }
    });
    expect(errors).toEqual([
      "Field name only allows the following values: buy, more, bitcoin.",
      "Field dog.1.coats.0.style only allows the following values: silky, dry, smooth.",
      "Field dog.2.breed only allows the following values: Corgi, German Shepherd, Golden Retriever."
    ]);
  });
  test("returns expected errors when rules.element (string) validator fails", () => {
    const errors = validate.inputWithSchema({
      birds: [1, 2, 3]
    }, {
      birds: {
        type: "array",
        element: "string"
      }
    });
    expect(errors).toEqual([
      "Field birds.0 must be of type string.",
      "Field birds.1 must be of type string.",
      "Field birds.2 must be of type string."
    ]);
  });
  test("returns expected errors when nested rules.element (string) validator fails", () => {
    const errors = validate.inputWithSchema({
      birds: [
        {
          name: "Parrot",
          attributes: {
            colors: ["blue", "green", "red"]
          }
        },
        {
          name: "Snake",
          attributes: {
            colors: ["purple", "orange", "teal"]
          }
        }
      ]
    }, {
      birds: {
        type: "array",
        element: {
          name: {
            type: "string"
          },
          attributes: {
            type: "object",
            fields: {
              colors: {
                type: "array",
                element: "integer"
              }
            }
          }
        }
      }
    });
    expect(errors).toEqual([
      "Field birds.0.attributes.colors.0 must be of type integer.",
      "Field birds.0.attributes.colors.1 must be of type integer.",
      "Field birds.0.attributes.colors.2 must be of type integer.",
      "Field birds.1.attributes.colors.0 must be of type integer.",
      "Field birds.1.attributes.colors.1 must be of type integer.",
      "Field birds.1.attributes.colors.2 must be of type integer."
    ]);
  });
  test("returns expected errors when rules.fields validator fails", () => {
    const errors = validate.inputWithSchema({
      user: {
        name: 789.456
      }
    }, {
      user: {
        type: "object",
        fields: {
          name: {
            type: "string"
          }
        }
      }
    });
    expect(errors).toEqual(["Field user.name must be of type string."]);
  });
  test("returns expected errors when rules.max validator fails", () => {
    const errors = validate.inputWithSchema({
      price: 39.99
    }, {
      price: {
        type: "float",
        max: 29.99
      }
    });
    expect(errors).toEqual([
      "Field price must be less than or equal to 29.99."
    ]);
  });
  test("returns expected errors when rules.min validator fails", () => {
    const errors = validate.inputWithSchema({
      price: 19.99
    }, {
      price: {
        type: "float",
        min: 29.99
      }
    });
    expect(errors).toEqual([
      "Field price must be greater than or equal to 29.99."
    ]);
  });
  test("returns expected errors when rules.optional (false) fails", () => {
    const errors = validate.inputWithSchema({
      price: 29.99
    }, {
      price: {
        type: "float",
        min: 29.99
      },
      description: {
        type: "string",
        optional: false
      }
    });
    expect(errors).toEqual(["Field description is required."]);
  });
  test("returns no errors when rules.optional (true)", () => {
    const errors = validate.inputWithSchema({
      price: 29.99
    }, {
      price: {
        type: "float",
        min: 29.99
      },
      description: {
        type: "string",
        optional: true
      }
    });
    expect(errors).toEqual([]);
  });
  test("returns expected errors when rules.regex fails", () => {
    const errors = validate.inputWithSchema({
      arrayPath: "thing.is.not.in.array"
    }, {
      arrayPath: {
        type: "string",
        regex: new RegExp(/\.[0-9]+\.?/g)
      }
    });
    expect(errors).toEqual([
      "Field arrayPath must conform to regex: /\\.[0-9]+\\.?/g."
    ]);
  });
  test("returns expected errors when rules.required (true) fails", () => {
    const errors = validate.inputWithSchema({
      price: 29.99
    }, {
      price: {
        type: "float",
        min: 29.99
      },
      description: {
        type: "string",
        required: true
      }
    });
    expect(errors).toEqual(["Field description is required."]);
  });
  test("returns no errors when rules.required (false)", () => {
    const errors = validate.inputWithSchema({
      price: 29.99
    }, {
      price: {
        type: "float",
        min: 29.99
      },
      description: {
        type: "string",
        required: false
      }
    });
    expect(errors).toEqual([]);
  });
  test("returns expected errors when rules.type (array) fails", () => {
    const errors = validate.inputWithSchema({
      name: "array"
    }, {
      name: {
        type: "array"
      }
    });
    expect(errors).toEqual(["Field name must be of type array."]);
  });
  test("returns expected errors when rules.type (boolean) fails", () => {
    const errors = validate.inputWithSchema({
      name: 123
    }, {
      name: {
        type: "boolean"
      }
    });
    expect(errors).toEqual(["Field name must be of type boolean."]);
  });
  test("returns expected errors when rules.type (float) fails", () => {
    const errors = validate.inputWithSchema({
      name: 123
    }, {
      name: {
        type: "float"
      }
    });
    expect(errors).toEqual(["Field name must be of type float."]);
  });
  test("returns expected errors when rules.type (integer) fails", () => {
    const errors = validate.inputWithSchema({
      name: 123.123
    }, {
      name: {
        type: "integer"
      }
    });
    expect(errors).toEqual(["Field name must be of type integer."]);
  });
  test("returns expected errors when rules.type (number) fails", () => {
    const errors = validate.inputWithSchema({
      name: "123.123"
    }, {
      name: {
        type: "number"
      }
    });
    expect(errors).toEqual(["Field name must be of type number."]);
  });
  test("returns expected errors when rules.type (object) fails", () => {
    const errors = validate.inputWithSchema({
      name: []
    }, {
      name: {
        type: "object"
      }
    });
    expect(errors).toEqual(["Field name must be of type object."]);
  });
  test("returns expected errors when rules.type (string) fails", () => {
    const errors = validate.inputWithSchema({
      name: 123
    }, {
      name: {
        type: "string"
      }
    });
    expect(errors).toEqual(["Field name must be of type string."]);
  });
  test("returns array of errors after validation", () => {
    const errors = validate.inputWithSchema({
      name: 12345
    }, {
      name: {
        type: "string"
      }
    });
    expect(errors).toEqual(["Field name must be of type string."]);
  });
});
