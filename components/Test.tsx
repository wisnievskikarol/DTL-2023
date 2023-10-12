import React, { useEffect, useState } from 'react';
import { getProjectDataFromAirtable } from '../api/airtable';

const Test = () => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectDataFromAirtable('your_project_id');
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error);
        // Handle error appropriately in your app
      }
    };

    fetchData();
  }, []);

  // Render logic based on fetched data can go here...

  if (error) {
    return <p>Error loading data</p>;
  }

  if (!projectData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{projectData.fields.Name}</h1>
      <p>{projectData.fields.Opis}</p>
      <a href={projectData.fields['Strona (URL)']} target="_blank" rel="noopener noreferrer">
        Visit Project Website
      </a>
    </div>
  );
};

export default Test;
