"use client";

import { useState, useEffect } from 'react';

const page = ({params}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const {name}= params;
        const response = await fetch(`https://worldnamedays.makemywebsite.au/api/country/${name}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-8">Loading countries...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!data) return <div className="text-center py-8">No data found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">{data.title}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.namedays.map((nameday) => (
          <div 
            key={nameday.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-4">
              <div className="flex items-center mb-3">
                <h2 className="text-xl font-semibold">{nameday.name}</h2>
              </div>
              
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Day:</span> {nameday.day}</p>
                <p><span className="font-medium">Month:</span> {nameday.month}</p>
                <p><span className="font-medium">Last Updated:</span> {new Date(nameday.updated_at).toLocaleDateString()}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;