import React, { useState, useEffect } from 'react';
import { getEmployeeById } from '../api'; // Create this function in api.js

const ViewEmployee = ({ match }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(match.params.id);
        setEmployee(data);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, [match.params.id]);

  return (
    <div>
      <h2>Employee Details</h2>
      {employee && (
        <div>
          <p>Name: {employee.name}</p>
          {/* Add other employee details as needed */}
        </div>
      )}
    </div>
  );
};

export default ViewEmployee;
