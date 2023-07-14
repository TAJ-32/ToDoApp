//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TaskMaker from './Components/TaskMaker';
//import Head from "next/head";
//import { useRouter } from "next/router";

function App({ Component, pageProps }) {

  const [Tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <title>Productivity Awaits</title>
      <main>
        <h1 className='title'>Productivity Awaits</h1>
      </main>
      
      <TaskMaker
      Tasks={Tasks}
      setTasks={setTasks}
      />

    </div>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
}