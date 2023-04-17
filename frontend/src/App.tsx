import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import socket from './socket';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    socket.on('customEvent', (data) => {
      console.log('Received custom event:', data);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
