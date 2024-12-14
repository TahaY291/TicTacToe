import React, { useState, useEffect } from 'react';
import watch from '../assets/watch.png'
function PlayerInfo({ player1, player2, xTurn, isWinner, setXTurn, array, isDraw, setIsDraw }) {
    function checkDraw() {
        let arr = !array.includes(null) && array.length === 9
        if (arr && !isWinner) {
            setIsDraw(true)
        }
    }
    checkDraw()
    // useEffect(() => {
    //     if (!isWinner) {
    //         checkDraw()
    //     }
    // }, [xTurn, isWinner]);
    return (
        <>
            <div className='flex items-center justify-center '>
                <div className=" flex items-center rounded-lg justify-center relative px-3 ">
                    {isDraw ? <h1 className='text-4xl text-white'>Draw 🙁</h1> : <div className={`text-4xl  ${isWinner ? xTurn ? "text-[#8091a7]" : "text-[#e28adb]" : xTurn ? "text-[#e28adb]" : "text-[#8091a7]"}`}>
                        {!isWinner ?
                            <div className='text-white flex items-center gap-3'> <span className='mb-4 '>👉</span> {` ${xTurn ? player1 || "Player" : player2 || "Player"} `}</div>
                            : 
                            <h1 className='flex items-center justify-center mb-2 gap-5'> <p> Winner is: {xTurn ? player2 || "O" : player1 || "X"}  <span className='text-4xl'>😎</span> </p></h1>
                        }
                    </div>}
                </div>
            </div>
        </>
    );
}

export default PlayerInfo;
