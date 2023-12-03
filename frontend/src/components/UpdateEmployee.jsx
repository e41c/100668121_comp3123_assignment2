import React, { useState, useEffect } from 'react';
import { getEmployeeById, updateEmployee } from '../api'; // Create these functions in api.js

const UpdateEmployee = ({ match }) => {
  const [employee, setEmployee] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(match.params.id);
        setEmployee(data);
        setName(data.name);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, [match.params.id]);

  const handleUpdateEmployee = async () => {
    try {
      // Call your update employee API
      await updateEmployee(match.params.id, { name });

      // Refresh the employee list or navigate to the list page
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      {employee && (
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleUpdateEmployee}>Update Employee</button>
        </div>
      )}
    </div>
  );
};

export default UpdateEmployee;
