import {
  isArray,
  isBoolean,
  isFloat,
  isInteger,
  isNumber,
  isObject,
  isString,
  isAny
} from "./typeValidators";
var validateType_default = (type, value) => {
  switch (type) {
    case "any":
      return isAny(value);
    case "array":
      return isArray(value);
    case "boolean":
      return isBoolean(value);
    case "float":
      return isFloat(value);
    case "integer":
      return isInteger(value);
    case "number":
      return isNumber(value);
    case "object":
      return isObject(value);
    case "string":
      return isString(value);
    default:
      return false;
  }
};
export {
  validateType_default as default
};
