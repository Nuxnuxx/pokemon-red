import "./battlearena.scss";
import Pokemon from "../pokemon/Pokemon";

export function BattleArena({
  player,
  ennemy,
}: {
  player: Pokemon;
  ennemy: Pokemon;
}) {
  return (
    <div className="gameplay-wrapper">
      <Pokemon {...player} />
      <Pokemon {...ennemy} />
    </div>
  );
}

export default BattleArena;
