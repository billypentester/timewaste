import React from 'react'
import socket from '../socket';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  const [name, setName] = React.useState('');

  const joinGame = (event: any) => {
    event.preventDefault();
    socket.emit('joinRoom', name);
    socket.on('joinedRoom', ({ name, id }) => {
      localStorage.setItem('name', name);
      localStorage.setItem('id', id);
      navigate('/game');
    })
  }

  socket.on('roomFull', () => {
    alert('Room is full');
  })

  return (
    <section>
      <div className="container">
        <div className="row">
        <div className="d-flex justify-content-center align-items-center" style={{ height:'100vh' }}>
          <div className="col-6">
              <h1 className="display-5 text-center mb-5 text-primary">TeenPatti Game</h1>
              <div className="card bg-light">
                <div className="card-body p-5">
                  <h5 className="card-title text-center text-muted">fill the details to enter the game</h5>
                  <form onSubmit={joinGame}>
                    <div className="form-group">
                      <label htmlFor="exampleName" className="form-label mt-4">Display Name</label>
                      <input required type="text" className="form-control" id="exampleName" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="exampleCode" className="form-label mt-4">Code</label>
                      <input type="text" className="form-control" id="exampleCode" placeholder="Enter game code"/>
                    </div> */}
                    <div className="my-2 mt-5 text-center w-100">
                      <button type="submit" className="btn btn-primary mx-auto">Join the Game</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home