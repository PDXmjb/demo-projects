import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo App Page</title>
        <meta
          name="description"
          content="Page created for the express purpose of demonstrating and learning different react techniques"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Mike Hansbrook's Demo Codebase</h1>
        <ul>
          <li>
            <Link href="/demo/timer">Timer</Link>
          </li>
          <li>
            <Link href="/demo/basic-api">Basic API</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
