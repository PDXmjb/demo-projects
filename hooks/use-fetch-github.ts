import { useEffect, useState } from 'react';

function useFetchGithub() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://api.github.com/repos/pdxmjb/demo-projects')
      .then((response) => response.json())
      .then((jsonResponse) => setData(jsonResponse))
      .catch((reason) => console.error(reason));
  }, []);

  return data;
}

export default useFetchGithub;
