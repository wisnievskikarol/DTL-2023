import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AIRTABLE_API_URL = 'https://api.airtable.com/v0/appIgT6O3YD4QhJif/tblstH483t5cX3XmB';
const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_KEY;

export const getProjectDataFromAirtable = async (id: string) => {
  try {
    const response = await axios.get(`${AIRTABLE_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Przykładowy komponent, który używa funkcji getProjectDataFromAirtable do pobrania danych 
// i wyświetlenia ich na stronie.
const ProjectDetails: React.FC<{ projectId: string }> = ({ projectId }) => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectDataFromAirtable(projectId);
        setProjectData(data);
      } catch (error) {
        setError('There was an error fetching the project data');
      }
    };
    fetchData();
  }, [projectId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!projectData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{projectData.fields.Name}</h1>
      <p>{projectData.fields.Description}</p>
      <a href={projectData.fields.URL}>Visit Project Website</a>
    </div>
  );
};

export default ProjectDetails;
