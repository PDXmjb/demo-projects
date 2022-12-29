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
      <h2>Basic API</h2>
      <p>This page shows a basic example of fetching data from an API.</p>
      <div>
        <p>{data['full_name']}</p>
        <p>{data?.description}</p>
      </div>
    </>
  );
};

export default BasicAPI;
