// Write your solution in this file!

//create an object
const employee = {
  name: "someName",
  streetAddress: "someAddress",
};
console.log(employee);

//returns an employee with the original key value pairs and the new key value pair
//it does not modify the original employee, but rather returns a clone with the new data
//use spread operator or Object.assign
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "jane"));
console.log(employee);

/* function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}
 */

//'updates `employee` with the given `key` and `value` (it is destructive)
// and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
console.log(
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane")
);
console.log(employee);

//deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//does not modify the original employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
console.log(deleteFromEmployeeByKey(employee, "name"));
console.log(employee);

/* function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
} */

//returns employee without the deleted key/value pair'
//modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  let newEmployee = employee;
  delete newEmployee[key];
  return newEmployee;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
console.log(employee);
