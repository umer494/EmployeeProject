using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace EmployeeProject.Model
{
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int? EmployeeId { get; set; }

        public string EmployeeName { get; set; }
        public string EmployeeLocation { get; set; }
        public int PositionCode { get; set; }
     }
}
 
