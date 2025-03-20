import supabase from './utils/supabase.ts';

export function EmployeeForm() {
  const onFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const employeeName = formData.get('employee_name');
    const employeeDepartmentId = formData.get('employee_department_id');
    const jobLevelId = formData.get('employee_job_level_id');
    const employeeData = {
      employee_name: employeeName,
      employee_department_id: employeeDepartmentId,
      employee_job_level_id: jobLevelId,
    };
    console.log(employeeData);

    const { data, error } = await supabase.rpc('upsert_employee', employeeData);

    if (error) {
      console.error('Error adding employee:', error);
      alert(error.message);
    } else {
      console.log('Employee added:', data);
      alert('Employee added');
    }
  };
}
