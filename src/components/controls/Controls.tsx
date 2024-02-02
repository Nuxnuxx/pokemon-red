import "./controls.scss";

interface ControlsProps {
	setBattleState: React.Dispatch<React.SetStateAction<Battle>>;
	calculateDamage: (attacker: Pokemon, defender: Pokemon, move: Move) => number;
	playerMoves: Move[];
	isPlayerTurn: boolean;
}

function Controls({
	setBattleState,
	calculateDamage,
	playerMoves,
	isPlayerTurn,
}: ControlsProps) {

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const attack = playerMoves.find(
			(move) => move.name === e.currentTarget.textContent,
		);

		if (attack) {
			setBattleState((prev: Battle) => {
				return {
					...prev,
					playerTurn: false,
					ennemy: {
						...prev.ennemy,
						hp:
							prev.ennemy.hp -
							calculateDamage(prev.player, prev.ennemy, attack),
					},
				};
			});
		}
	};

	return (
		<div className="controls-wrapper">
			<div className="controls-wrapper-menu">
				{isPlayerTurn ? (
					playerMoves.map((playerMove) => (
						<button onClick={handleClick} key={playerMove.name}>
							{playerMove.name}
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
