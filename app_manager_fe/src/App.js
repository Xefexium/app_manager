import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button } from '@mui/material'
import { useEffect, useState } from 'react';

function App() {

  const apiUrl = 'https://smalltimegaming.com/api/'

  const [zomboidStatus, setZomboidStatus] = useState('')
  const [logs, setLogs] = useState('')

  useEffect(() => {
    const poll = setInterval(fetchLogs, 1000)
    return () => clearInterval(poll);
  }, [])

  const fetchLogs = () => {
    axios.get(apiUrl + 'log-zomboid/').then(response => {
      setLogs(response.data.msg)
    }).catch((error) => {
      setLogs(error)
    })
  }

  const startZomboid = () => {
    axios.post(apiUrl + 'start-zomboid/').then(response => {
      setZomboidStatus(response.data.msg)
    }).catch((error) => {
      setZomboidStatus(error)
    })
  }

  const stopZomboid = () => {
    axios.post(apiUrl + 'stop-zomboid/').then(response => {
      setZomboidStatus(response.data.msg)
    }).catch((error) => {
      setZomboidStatus(error)
    })

  }

  const printLogs = () => {
    if (logs) {
      return logs.split('\n').reverse().map((line, index) => (
        <p key={index}>{line.trim()}</p>
      ))
    }
    return <p>No Logs found</p>
  }

  return (
    <div>
      <div className="main">
        <h3>Project Zomboid</h3>
        <div className='buttons'>
          <Button variant="contained" onClick={startZomboid}>On</Button>
          <Button variant="outlined" onClick={stopZomboid}>Off</Button>
        </div>
        <h2>{zomboidStatus}</h2>
      </div>
      <div>
        <h3 style={{textAlign: 'center'}}><u>Logs Below</u></h3>
        <div className="logs">
          {printLogs()}
        </div>
      </div>
    </div>
  );
}

export default App;
