import React from 'react';
import { useParams } from 'react-router-dom';
const Person = () => {
  const parmas = useParams();
  console.log(parmas);

  return <div>Person</div>;
};

export default Person;
