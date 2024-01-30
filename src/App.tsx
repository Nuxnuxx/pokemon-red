import "./app.scss";
import { playerPokemon, ennemyPokemon } from "./pokemon";
import BattleArena from "./components/battlearena/BattleArena";
import Controls from "./components/controls/Controls";
import { useState } from "react";

function App() {
	const [battleState, setBattleState] = useState<Battle>({
		player: playerPokemon,
		ennemy: ennemyPokemon,
		playerTurn: playerPokemon.speed > ennemyPokemon.speed,
	});

	return (
		<>
			<BattleArena player={playerPokemon} ennemy={ennemyPokemon} />
			<Controls
				isPlayerTurn={battleState.playerTurn}
				playerMoves={playerPokemon.moves}
			/>
		</>
	);
}

export default App;
