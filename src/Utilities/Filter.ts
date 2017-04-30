import {
  RefError
} from "../Errors";

/**
 * Static class to help filter down Arrays
 */
class Filter {
  /**
   * Converts string values in array to 0
   * @param arr to convert
   * @returns {Array} array in which all string values have been converted to 0.
   */
  static stringValuesToZeros(arr: Array<any>) : Array<any> {
    var toReturn = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "string") {
        toReturn.push(arr[i]);
      } else {
        toReturn.push(0);
      }
    }
    return toReturn;
  }

  /**
   * Flatten an array of arrays of ...etc.
   * @param values array of values
   * @returns {Array} flattened array
   */
  static flatten(values: Array<any>) : Array<any> {
    return values.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? Filter.flatten(toFlatten) : toFlatten);
    }, []);
  }

  /**
   * Flatten an array of arrays of... etc, but throw an error if any are empty references.
   * @param values array of values
   * @returns {Array} flattened array
   */
  static flattenAndThrow(values: Array<any>) : Array<any> {
    return values.reduce(function (flat, toFlatten) {
      if (Array.isArray(toFlatten) && toFlatten.length === 0) {
        throw new RefError("Reference does not exist.");
      }
      return flat.concat(Array.isArray(toFlatten) ? Filter.flattenAndThrow(toFlatten) : toFlatten);
    }, []);
  }

  /**
   * Filter out all strings from an array.
   * @param arr to filter
   * @returns {Array} filtered array
   */
  static filterOutStringValues(arr: Array<any>) : Array<any> {
    var toReturn = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "string") {
        toReturn.push(arr[i]);
      }
    }
    return toReturn;
  }

  /**
   * Filters out non number values.
   * @param arr to filter
   * @returns {Array} filtered array
   */
  static filterOutNonNumberValues(arr: Array<any>) : Array<any> {
    var toReturn = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "string" && typeof arr[i] !== "boolean") {
        toReturn.push(arr[i]);
      }
    }
    return toReturn;
  }
}

export {
  Filter
}