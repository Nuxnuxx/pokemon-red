import "./pokemon.scss";
import { useState } from "react";

function Pokemon({
  name,
  lvl,
  hp,
  image,
  isEnnemy = false,
  types,
  special,
  speed,
  moves,
}: Partial<Pokemon>) {
  const [baseHp, setBaseHp] = useState(hp);
  const [currentHp, setCurrentHp] = useState(hp);

  return (
    <>
      {isEnnemy ? (
        <>
          <div className="image-wrapper">
            <img src={image} alt={name} />
          </div>

          <div className="info-wrapper">
            <p className="info-wrapper-name">{name}</p>
            <p className="info-wrapper-level">:L{lvl}</p>
            <div className="info-wrapper-health-wrapper">
              <p className="info-wrapper-health-text">
                HP:{hp}/{baseHp}
              </p>
              <div className="info-wrapper-health-bar"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="info-wrapper">
            <p className="info-wrapper-name">{name}</p>
            <p className="info-wrapper-level">:L{lvl}</p>
            <div className="info-wrapper-health-wrapper">
              <p className="info-wrapper-health-text">
                HP:{hp}/{baseHp}
              </p>
              <div className="info-wrapper-health-bar"></div>
            </div>
          </div>

          <div className="image-wrapper">
            <img src={image} alt={name} />
          </div>
        </>
      )}
    </>
  );
}

export default Pokemon
