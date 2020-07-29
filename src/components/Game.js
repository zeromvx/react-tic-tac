import React, { Component } from 'react';
import './Game.css';
import Board from './Board';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="board">
                    <Board />
                </div>

            </div>
        )
    }
}

export default Game;