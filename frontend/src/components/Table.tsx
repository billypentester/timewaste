import React, {useState, useEffect} from 'react'
import './../assets/playing-cards.css'
import './../assets/teenpatti.css'
import socket from '../socket';


const Table = () => {

    const [users, setUsers] = useState<{ name: string, id: string }[]>([]);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {

        socket.emit('getUsers', (users: any) => {
          console.log(users);
          setUsers(users);
        });

        if(users.length >= 4){
            setGameStarted(true);
        }
        
    },[users, gameStarted])


    return (
        <div className="game-table-container">
            <div className="game-table">
                
                <div className="card-area">
                    <ul className="hand remove-margin">
                    <li>
                        <div className="card rank-6 diams">
                            <span className="rank">6</span>
                            <span className="suit">&diams;</span>
                        </div>
                        </li>
                        <li>
                        <div className="card rank-6 diams">
                            <span className="rank">6</span>
                            <span className="suit">&diams;</span>
                        </div>
                        </li>
                    </ul>
                    {/* <div className="card-area-rows output-row-one">
                            <div className="card rank-7 spades">
                                <span className="rank">7</span>
                                <span className="suit">&spades;</span>
                            </div>
                        </div>
                        <div className="card-area-rows output-row-two">
                            <div className="card rank-7 spades">
                                <span className="rank">7</span>
                                <span className="suit">&spades;</span>
                            </div>
                        <div className="card rank-7 spades">
                            <span className="rank">7</span>
                            <span className="suit">&spades;</span>
                        </div>
                    </div>
                    <div className="card-area-rows output-row-three">
                        <div className="card rank-7 spades">
                            <span className="rank">7</span>
                            <span className="suit">&spades;</span>
                        </div>
                    </div> */}
                </div>

                <div className="game-players-container">
                    <div className="player-tag player-one">{users.length >= 1 && users[0].name !== undefined ? users[0].name : 'XXX'}</div>
                    <ul className="hand remove-margin player-one-cards">
                    <li>
                        <div className="card back">*</div>s
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    </ul>
                </div>

                <div className="game-players-container">
                    <div className="player-tag player-two">{users.length >= 2 && users[1].name !== undefined ? users[1].name : 'XXX'}</div>
                    <ul className="hand remove-margin player-two-cards">
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    </ul>
                </div>

                <div className="game-players-container">
                    <div className="player-tag player-three">{users.length >= 3 && users[2].name !== undefined ? users[2].name : 'XXX'}</div>
                    <ul className="hand remove-margin player-three-cards">
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    </ul>
                </div>

                <div className="game-players-container">
                    <div className="player-tag player-four">{users.length >= 4 && users[3].name !== undefined ? users[3].name : 'XXX'}</div>
                    <ul className="hand remove-margin player-four-cards">
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }   
                    </li>
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    <li>
                        <div className="card back">*</div>
                    </li>
                    <li>
                        {
                            gameStarted ?
                            <div className="card rank-6 diams">
                                <span className="rank">6</span>
                                <span className="suit">&diams;</span>
                            </div>
                            :
                            <div className="card back">*</div>
                        }
                    </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )

}

export default Table