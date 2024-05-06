import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../../../API/';

const UserCountryDetail = () => {
  const { id } = useParams();
 
  useEffect(() => {
    getOne(id)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((error) => {
        console.error('Error fetching country details:', error);
      });
  }, [id]);

  return (
    <div>
     
        <div>
          <h2>Country Detail Page</h2>
          <p>Country ID: {country.id}</p>
          <p>Country Name: {country.name}</p>
          <p>Description: {country.description}</p>
        </div>
      
    </div>
  );
};

export default UserCountryDetail;
