import Head from "next/head";
import type { NextPage } from "next";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Machine learning web application" />
        <title>ML WEB-APP</title>
      </Head>
      <div className={styles.nav}>
        <p>Machine Learning Web Application</p>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.app}>
            <a href="/face-mask">
              <p>LIVE WEBCAM FACE MASK DETECTION</p>
              <img src="1.jpg" />
            </a>
          </div>
          <div className={styles.app}>
            <a href="/gesture-recognition">
              <p>LIVE WEBCAM GESTURE RECOGNITION</p>
              <img src="2.png" style={{ height: 180 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
