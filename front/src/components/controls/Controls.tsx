import "./controls.scss";

interface ControlsProps {
  playerMoves: Move[];
  isPlayerTurn: boolean;
	setPlayerMove: React.Dispatch<React.SetStateAction<Move | null>>
}

function Controls({ playerMoves, isPlayerTurn, setPlayerMove }: ControlsProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const attackName = e.currentTarget.innerHTML.split("<div>")[0];
    const attack = playerMoves.find((move) => move.name === attackName);

    if (attack) {
			setPlayerMove(attack)
    }
  };

  return (
    <div className="controls-wrapper">
      <div className="controls-wrapper-menu">
        {isPlayerTurn ? (
          playerMoves.map((playerMove) => (
            <button onClick={handleClick} key={playerMove.name}>
              {playerMove.name}
              <div>PP: {playerMove.pp}</div>
            </button>
          ))
        ) : (
          <div>tu joues pas</div>
        )}
      </div>
    </div>
  );
}

export default Controls;
