import React from "react";
import { Provider } from 'react-redux';
import { useStore } from '../state';
import Head from "next/head";
import '../styles/globals.css'


function CodingApp({ Component, pageProps }) {
  const store = useStore();
  return (
      <div>
      <Head>
          <title>Coding Interview</title>
      </Head>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
      </div>
  );
}

export default CodingApp;
