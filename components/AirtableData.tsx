import React, { useEffect, useState } from 'react';

const AirtableData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAirtableData = async () => {
      try {
        const response = await fetch(
          'https://api.airtable.com/v0/YOUR_AIRTABLE_BASE_ID/YOUR_TABLE_NAME',
          {
            headers: {
              Authorization: `Bearer YOUR_API_KEY`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data from Airtable');
        }

        const jsonData = await response.json();
        setData(jsonData.records);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAirtableData();
  }, []);

  return (
    <div>
      <h2>Airtable Data</h2>
      {data.map((record) => (
        <div key={record.id}>
          <h3>{record.fields.title}</h3>
          <p>{record.fields.description}</p>
          {/* Add additional fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default AirtableData;
