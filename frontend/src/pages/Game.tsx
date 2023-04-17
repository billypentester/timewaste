import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './../assets/playing-cards.css'
import './../assets/teenpatti.css'
import socket from '../socket';

import Messages from '../components/Messages';
import Header from '../components/Header';
import Table from '../components/Table';

function Game() {

  const navigate = useNavigate();
  const [users, setUsers] = useState<{ name: string, id: string }[]>([]);

  const selfid = localStorage.getItem('id');

  useEffect(() => {

    if (!selfid) {
      navigate('/');
    }
    socket.emit('getUsers', (users: any) => {
      console.log(users);
      setUsers(users);
    });
    
  },[users])


  return (
    <div className="main-container playingCards">
      <div className="game-container">
        <Header />
        <Table />
      </div>
      <Messages />
    </div>
  )
}

export default Game