import React, { useState } from 'react';

function PlayersName({ setPlayer1, setPlayer2, setResetName, setStart }) {
  const [inputPlayer1, setInputPlayer1] = useState('');
  const [inputPlayer2, setInputPlayer2] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (inputPlayer1 && inputPlayer2) {
      setPlayer1(inputPlayer1);
      setPlayer2(inputPlayer2);
      setInputPlayer1('');
      setInputPlayer2('');
      setResetName(false);
      setStart(true);
    }
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-white shadow-2xl ">Enter Player Names</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-start justify-between  w-[50vw]    rounded-lg"
      >
        <div className='flex items-center  justify-center w-[100%]'>
          <div className="basis-[30%] flex flex-col">
            <label htmlFor="player1" className="text-lg text-purple-300 py-2">First Player:</label>
            <input
              id="player1"
              aria-label="First Player Name"
              className=" px-3 py-1 text-2xl  w-[100%] rounded outline-none border-2 border-purple-400 bg-purple-300 text-purple-300 bg-opacity-20"
              type="text"
              value={inputPlayer1}
              placeholder="X Player"
              onChange={(e) => setInputPlayer1(e.target.value)}
            />
          </div>
          <div className="basis-[30%] flex flex-col">
            <label htmlFor="player2" className="text-lg text-blue-300 py-2">Second Player:</label>
            <input
              id="player2"
              aria-label="Second Player Name"
              className=" px-3 py-1 text-2xl w-[100%]  rounded outline-none border-2 border-blue-400 bg-blue-300 text-blue-300 bg-opacity-20"
              type="text"
              value={inputPlayer2}
              placeholder="O Player"
              onChange={(e) => setInputPlayer2(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-center text-black bg-white px-4 py-2 mt-11 rounded-md "
          disabled={!inputPlayer1 || !inputPlayer2} // Disable if names are empty
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PlayersName;
