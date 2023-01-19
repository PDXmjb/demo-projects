import { useRouter } from 'next/router';
import styles from './Layout.module.scss';

const Layout = ({ children }: any) => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <section>{children}</section>
      {router.pathname != '/' ? (
        <button className={styles.goBack} onClick={() => router.back()}>
          Go back
        </button>
      ) : null}
    </main>
  );
};

export default Layout;
