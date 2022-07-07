import Head from "next/head";
import styles from "../styles/Page.module.scss";
import { Footer, Header } from "../components";

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Lilou project</h1>
      </main>
      <Footer />
    </div>
  );
}
