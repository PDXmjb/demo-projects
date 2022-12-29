import useFetchGithub from '../../../hooks/use-fetch-github';

const BasicAPICustomHook = () => {
  const data = useFetchGithub();

  return (
    <>
      <h2>Basic API using custom hook</h2>
      <p>
        This page shows a basic example of fetching data from an API using a
        custom hook.
      </p>
      <div>
        <p>{data?.['full_name']}</p>
        <p>{data?.description}</p>
      </div>
    </>
  );
};

export default BasicAPICustomHook;
