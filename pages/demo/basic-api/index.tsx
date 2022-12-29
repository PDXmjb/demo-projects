import Image from 'next/image';
import { useEffect, useState } from 'react';

const BasicAPI = () => {
  const [data, setData] = useState({
    full_name: 'Mike',
    description: 'A repository!',
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/pdxmjb/demo-projects')
      .then((response) => response.json())
      .then((jsonResponse) => setData(jsonResponse))
      .catch((reason) => console.error(reason));
  }, []);

  console.log(data);

  return (
    <>
      <h2>Basic API - coming soon</h2>
      <p>This page shows a basic example of fetching data from an API.</p>
      <div
        style={{
          border: '1px solid gray',
          borderRadius: '16px',
          padding: '16px',
        }}
      >
        <p>{data['full_name']}</p>
        <p>{data?.description}</p>
      </div>
    </>
  );
};

export default BasicAPI;
