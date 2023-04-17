import React from 'react'
import './../assets/playing-cards.css'
import './../assets/teenpatti.css'

type Props = {}

const Messages = (props: Props) => {
  return (
    <div className="messages-and-cards-container">
        <div className="right-side-container messages-container">
          <h1>Messages</h1>
          <div className="message-box">
            <div className="message-content-container">
              latest message comes here
            </div>
            <div className="message-content-container">
              Goodluck for the assignment!
            </div>
          </div>
        </div>
        <div className="right-side-container my-cards-container">
          <h1>My Cards</h1>
          <div className="my-cards-inner-container">
            <ul className="hand remove-margin">
              <li>
                <a className="card rank-7 spades">
                  <span className="rank">7</span>
                  <span className="suit">&spades;</span>
                </a>
              </li>
              <li>
                <a className="card rank-q hearts">
                  <span className="rank">Q</span>
                  <span className="suit">&hearts;</span>
                </a>
              </li>
              <li>
                <a className="card rank-2 diams">
                  <span className="rank">2</span>
                  <span className="suit">&diam;</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="my-fixed-cards-container">
            <ul className="hand remove-margin">
              <li>
                <div className="card back">*</div>
              </li>
              <li>
                <a className="card rank-6 diams">
                  <span className="rank">6</span>
                  <span className="suit">&diams;</span>
                </a>
              </li>
              <li>
                <div className="card back">*</div>
              </li>
              <li>
                <a className="card rank-6 diams">
                  <span className="rank">6</span>
                  <span className="suit">&diams;</span>
                </a>
              </li>
              <li>
                <div className="card back">*</div>
              </li>
              <li>
                <a className="card rank-6 diams">
                  <span className="rank">6</span>
                  <span className="suit">&diams;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Messages