/*var dbConn = require('../db.config');

var Employee = (employee) =>{
    this.EmpID = employee.EmpID;
    this.Name = employee.Name;
    this.EmpCode = employee.EmpCode;
    this.Salary = emplyee.Salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

Employee.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM employees', (err,res)=>{
        if(err){
            console.log('Error while fetching employees', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}
module.exports = Employee;*/