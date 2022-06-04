// Write your solution in this file!
const employee={
     
}
function updateEmployeeWithKeyAndValue(employee, streetAddress, key){
    return{
        ...employee,
        "name": "Sam",
        "streetAddress": "11 Broadway",
        
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return {
        name: 'Sam',
        streetAddress: '12 Broadway'
        }
        

    }
function deleteFromEmployeeByKey(employee, key){
    employee['name'].delete
    employee.key['streetAddress'].delete

}