import "./controls.scss";

export function Controls({ playerMoves, playerTurn }: { playerMoves: Move[], isPlayerTurn: boolean }) {
  return (
    <div className="controls-wrapper">
      <div className="controls-wrapper-menu">
        {playerMoves.map((playerMove) => (
          <button key={playerMove.name}>{playerMove.name}</button>
        ))}
      </div>
    </div>
  );
}
export default Controls;
