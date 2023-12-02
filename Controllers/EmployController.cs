using EmployeeProject.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployController : ControllerBase
    {
        static string str="server=DESKTOP-KCBO3Q4\\SQLEXPRESS;database=sample;integrated security=SSPI";
            [HttpGet]
            public IQueryable<Employee>Get()
        {
            EmployeeContext db = new EmployeeContext(EmployController.str);
            return db.Employees;
        }
        [HttpGet("{id}")]
public string Get(int id)
        {
            return "value";
        }
        [HttpPost]
        public void PostEmployee(Employee employee)
        {
            EmployeeContext db = new EmployeeContext(EmployController.str);
            db.Employees.Add(employee);
            db.SaveChanges();

        }
        //PUT: api/<EmployeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        { }

        //DELETE: api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            EmployeeContext db = new EmployeeContext("server=DESKTOP-KCBO3Q4\\SQLEXPRESS;database=sample;integrated security=SSPI");
            Employee employee = db.Employees.Find(id);
            db.Employees.Remove(employee);
            db.SaveChanges();
        }
    }
}
