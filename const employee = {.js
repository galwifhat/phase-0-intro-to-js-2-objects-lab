const employee = {
  name: "someName",
  streetAddress: "someAddress",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value}}

    console.log(updateEmployeeWithKeyAndValue())