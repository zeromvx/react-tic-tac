import React, { Component } from 'react';
import './Board.css';
import Square from './Square';

class Board extends Component {
    state = {
        squares: Array(9).fill(null),
    }

    handleClick = (i) => {
        const squares = [...this.state.squares];
        squares[i] = 'X';
        this.setState({ squares: squares });
        
    }

    renderSquare = (i) => {
        return (
            <Square 
                value={ this.state.squares[i] }
                onClick={ () => this.handleClick(i) }
                />
        );
    }

    render() {

        let status;

        return (
            <div>
                <div className="status">{ status }</div>
                <div className="board__row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board__row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board__row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;