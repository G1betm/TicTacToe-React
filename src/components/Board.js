import React, { useState } from 'react';
import Cell from './Cell';

const Board = () => {
    const [gameCells, setGameCells] = useState(Array(9).fill(null));
    const [nextPlayer, setNextPlayer] = useState(true);

    const defaultSquaresState = Array(9).fill(null);
    const defaultxIsNextState = true;


    let handleClick = index => {
        const cells = gameCells;
        if(checkWinner(cells) || cells[index]) {
            return;
        }

        if(nextPlayer) {
            cells[index] = 'X'
        } else {
            cells[index] = '0'
        }

        setGameCells(cells);
        setNextPlayer(!nextPlayer);
    }

    let setCell = index => {
        return (
            <Cell
                value={gameCells[index]}
                onClick={() => handleClick(index)}
             />
        )
    }

    let checkWinner = cells => {
        let winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (cells[a] && cells[a] == cells[b] && cells[a] == cells[c]) {
            return cells[a];
            }
        }
        return;
    }

    let restartGame = () => {
        setGameCells(defaultSquaresState);
        setNextPlayer(defaultxIsNextState);
    }

    const winner = checkWinner(gameCells);
    
    let status;
    if (winner) {
        status = 'Player ' + winner + ' WIN!';
    } else {
        status = 'Player ' + (nextPlayer ? 'X' : 'O') + ' turn';
    }


    return (
        <div>
            <div className="game-status">{status}</div>

            <div>
                {setCell(0)}
                {setCell(1)}
                {setCell(2)}
            </div>
            <div>
                {setCell(3)}
                {setCell(4)}
                {setCell(5)}
            </div>
            <div>
                {setCell(6)}
                {setCell(7)}
                {setCell(8)}
            </div>

            <button onClick={restartGame} className="game-restart">Restart</button>
            
        </div>
    )

};


export default Board;