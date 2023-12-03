import React, { useState } from 'react';
import { addEmployee } from '../api'; // Create this function in api.js

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddEmployee = async () => {
    try {
      // Call your add employee API
      await addEmployee({ firstName, lastName, email });

      // Refresh the employee list or navigate to the list page
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <label>First Name:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <label>Last Name:</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleAddEmployee}>Add Employee</button>
      <button onClick={() => { /* Add your cancel logic here */ }}>Cancel</button>
    </div>
  );
};

export default AddEmployee;

