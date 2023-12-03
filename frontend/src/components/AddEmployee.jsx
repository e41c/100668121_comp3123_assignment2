import React, { useState } from 'react';
import { addEmployee } from '../api'; // Create this function in api.js

const AddEmployee = () => {
  const [name, setName] = useState('');

  const handleAddEmployee = async () => {
    try {
      // Call your add employee API
      await addEmployee({ name });

      // Refresh the employee list or navigate to the list page
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
};

export default AddEmployee;
