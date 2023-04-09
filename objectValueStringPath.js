/**
 * This problem was asked in Amzon's AWS frontend interview.
 * Question: We are given a nested object or an array of objects and a string path, we have to return the value from the object at that given path
 * 
 * Example
 * --------------------------
 * get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"); // return => 0
 * 
 * 
 * Explanation
 * --------------------------
 * In the above example, we are returning the value of the 1st index and the count key’s 0th index. ([1].count[0])

    In JS arrays are also objects, thus we can access the values the same way as we do for objects.

    To solve this question, we will replace the square brackets with the period operator (.) 
    and then split the path on the period 
    finally, return the value at the path.

    To get the value, 
    traverse the object and store the value of the current key
    Repeat it for each key in the array
    finally, return the value.



    Test Cases
    --------------------------
    console.log(get({ developer: "Software Engineer" }, "developer")); // => 'Software Engineer'
    console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName")); // => 'Cruz'
    console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")); // => '0'
    console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]")); // null
    console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]")); // undefined
 */

const get = (obj, path) => {
  // replace the square brackets with the period operator
  path = path.replaceAll("[", ".");
  path = path.replaceAll("]", "");

  // split the keys and get it filtered on the truthy values
  const keys = path.split(".").filter(Boolean);

  // create a reference of the input object
  let current = obj;

  // traverse the key
  for (let key of keys) {
    current = current[key];

    // if an invalid key
    // return undefined
    if (current === undefined) {
      return undefined;
    }
  }

  // return the value
  return current;
};
