import React from 'react';

function Name({ player1, player2, xCount, oCount }) {
    return (
        <div className="flex text-white items-center justify-around bg-[#181717] shadow-lg mx-auto container rounded-full space-x-8 p-4 text-3xl">
            <div className="flex items-center text-purple-300">
                <div>{player1 || "X"}</div>
                <span className="mx-2">:</span>
                <span>{xCount}</span>
            </div>
            <div>
                <h1>Tic Tac Toe</h1>
            </div>
            <div className="flex items-center text-blue-300">
                <div>{player2 || "O"}</div>
                <span className="mx-2">:</span>
                <span>{oCount}</span>
            </div>
        </div>
    );
}

export default Name;
