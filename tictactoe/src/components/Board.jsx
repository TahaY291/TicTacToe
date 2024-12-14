import React, { useState, useEffect } from 'react';
import Square from './Square';
import PlayersName from './PlayersName';
import PlayerInfo from './PlayerInfo';
import Name from './Name';

function Board() {
    const [array, setArray] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState("");
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [start, setStart] = useState(false);
    const [resetName, setResetName] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [xCount, setXCount] = useState(0);
    const [oCount, setOCount] = useState(0);

    function handleClick(index) {
        if (!winner && !array[index]) {
            const copyState = [...array];
            copyState[index] = xTurn ? 'X' : 'O';
            setArray(copyState);
            setXTurn(!xTurn);
            setStart(true);
        }
    }

    const checkWinner = () => {
        const patterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < patterns.length; i++) {
            const [a, b, c] = patterns[i];
            if (array[a] && array[a] === array[b] && array[a] === array[c]) {
                return array[a]; // Return 'X' or 'O'
            }
        }
        return null;
    };

    useEffect(() => {
        const result = checkWinner();
        if (result) {
            setWinner(result);
        } else if (result && !array.includes(null)) {
            setWinner(result)
        }else if(!array.includes(null)){
            setIsDraw(false)
        }
    }, [array]);

    useEffect(() => {
        if (winner) {
            if (winner === 'X') {
                setXCount((prev) => prev + 1);
            } else if (winner === 'O') {
                setOCount((prev) => prev + 1);
            }
        }
    }, [winner]);

    function resetGame() {
        setArray(Array(9).fill(null));
        setXTurn(true);
        setWinner("");
        setResetName(true)
        setIsDraw(false);
    }

    function changeName() {
        setPlayer1('');
        setPlayer2('');
        setStart(false);
    }

    return (
        <div className="">
            <Name player1={player1} player2={player2} xCount={xCount} oCount={oCount} />
            <div className="flex items-center justify-around  h-[90vh] ">
                <div className="">
                    {!start ? (
                        <PlayersName
                            setPlayer1={setPlayer1}
                            setPlayer2={setPlayer2}
                            setResetName={setResetName}
                            setStart={setStart}
                        />
                    ) : (
                        <PlayerInfo
                            setXTurn={setXTurn}
                            xTurn={xTurn}
                            player1={player1}
                            player2={player2}
                            winner={winner}
                            isWinner={winner}
                            array={array}
                            isDraw={isDraw}
                            setIsDraw={setIsDraw}
                        />
                    )}
                </div>
                <div className="flex items-center justify-center flex-col p-4">
                    {winner ? (
                        " "
                    ) : (
                        <h1 className="text-2xl text-white">{start || "Start Game"}</h1>
                    )}
                    <div className="">
                        <div className="flex items-center my-2 ">
                            <Square value={array[0]} onclick={() => handleClick(0)} />
                            <Square value={array[1]} onclick={() => handleClick(1)} />
                            <Square value={array[2]} onclick={() => handleClick(2)} />
                        </div>
                        <div className="flex items-center my-2 ">
                            <Square value={array[3]} onclick={() => handleClick(3)} />
                            <Square value={array[4]} onclick={() => handleClick(4)} />
                            <Square value={array[5]} onclick={() => handleClick(5)} />
                        </div>
                        <div className="flex items-center ">
                            <Square value={array[6]} onclick={() => handleClick(6)} />
                            <Square value={array[7]} onclick={() => handleClick(7)} />
                            <Square value={array[8]} onclick={() => handleClick(8)} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-[380px] mx-auto'>
                        <button className="bg-white my-4 py-2 px-4 rounded text-black" onClick={resetGame}>
                            Reset
                        </button>
                        <button className="bg-white py-2 px-4 rounded text-black" onClick={changeName}>
                            Reset Name
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;
