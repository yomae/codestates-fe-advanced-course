import Head from "next/head";
import "antd/dist/antd.css";

// pages들의 공통부분은 _app.js에서 관리

const Advanced = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>FE-ADVANCED</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Advanced;
