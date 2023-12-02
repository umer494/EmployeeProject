using System.Data.Entity;

namespace EmployeeProject.Model
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(string str) : base(str)
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
