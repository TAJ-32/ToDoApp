//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import Head from "next/head";
//import { useRouter } from "next/router";

function App({ Component, pageProps }) {

  const [ToDoItems, setToDoItems] = useState([]);
  return (
    <div className="App">
      <Head>
        <title>Productivity Awaits</title>
      </Head>
      <main>
        <h1 className='title'>Productivity Awaits</h1>
      </main>
      

    </div>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
}