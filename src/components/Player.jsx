import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const inputName = useRef();

  function handleClick() {
    /* current is mandatory */
    setPlayerName(inputName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"} </h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
