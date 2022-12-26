import Image from 'next/image';
import { useEffect, useState } from 'react';

const BasicAPI = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    fetch('www.themealdb.com/api/json/v1/1/search.php?s=pizza').then(
      (response) => console.log(response)
    );
    //.then((jsonResponse) => setData(jsonResponse))
    //.catch((reason) => console.error(reason));
  }, []);

  console.log(data);

  return (
    <>
      <h2>Basic API - coming soon</h2>
      <p>This page shows a basic example of fetching data from an API.</p>
      <p>{data}</p>
    </>
  );
};

export default BasicAPI;
