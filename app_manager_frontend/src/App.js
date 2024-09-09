import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button } from '@mui/material'
import { useEffect, useState } from 'react';

function App() {

  const apiUrl = 'https://smalltimegaming.com/api/'

  const [zomboidStatus, setZomboidStatus] = useState('Waiting for command...')
  const [logs, setLogs] = useState('Fetching Logs...')

  useEffect(() => {
    const poll = setInterval(fetchLogs, 10000)
    return () => clearInterval(poll);
  }, [])

  const fetchLogs = () => {
    axios.get(apiUrl + 'log-zomboid/').then(response => {
      setLogs(response.data.msg)
    }).catch((error) => {
      setLogs('Error fetching logs')
      console.log(error)
    })
  }

  const saveZomboid = () => {
    axios.post(apiUrl + 'save-zomboid/').then(response => {
      setZomboidStatus(response.data.msg)
    }).catch((error) => {
      setZomboidStatus(error)
    })
  }

  const restartZomboid = () => {
    axios.post(apiUrl + 'restart-zomboid/').then(response => {
      setZomboidStatus(response.data.msg)
    }).catch((error) => {
      setZomboidStatus(error)
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
    return logs.split('\n').reverse().map((line, index) => (
      <p key={index}>{line.trim()}</p>
    ))
  }

  return (
    <div>
      <div className="main">
        <h2>Project Zomboid Server</h2>
        <h4>Status: {zomboidStatus}</h4>
        <div className='buttons'>
          <Button variant="contained" onClick={startZomboid} color="success">On</Button>
          <Button variant="outlined" onClick={stopZomboid}>Off</Button>
        </div>
        <br></br>
        <div>
          <Button variant="contained" onClick={saveZomboid} color="secondary">Save</Button>
        </div>
        <br></br>
        <div className='buttons'>
          <Button variant="contained" onClick={restartZomboid}>Restart</Button>
        </div>
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
