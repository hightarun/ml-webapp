import Head from "next/head";
import type { NextPage } from "next";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Index Page" />
        <title>Create Next App</title>
      </Head>
      <div className={styles.content}>
        <h1>Hello</h1>
        <a href="/face-mask">
          <p>LIVE WEBCAM FACE MASK DETECTION</p>
        </a>
        <a href="/gesture-recognition">
          <p>LIVE WEBCAM GESTURE RECOGNITION</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
