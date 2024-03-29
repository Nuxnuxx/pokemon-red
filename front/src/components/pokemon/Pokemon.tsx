import "./pokemon.scss";
import { useState } from "react";

function Pokemon({ name, lvl, hp, image, isEnnemy = false }: Partial<Pokemon>) {
  // Keep typescript happy
  if (hp === undefined) {
    return <div>undefined</div>;
  }

  // We dont use useState so it store the HP base and dont change it base on the "currentHP" of the pokemon
  const baseHp = Math.floor(hp);

  // Math.floor so we dont have decimal
  const [currentHp, _] = useState(Math.floor(hp));

  const barWidth = (baseHp / currentHp) * 100;

  return (
    <>
      {isEnnemy ? (
        <>
          <div className="info-wrapper">
            <p className="info-wrapper-name">{name}</p>
            <p className="info-wrapper-level">:L{lvl}</p>
            <div className="info-wrapper-health-wrapper">
              <div
                style={{ "--hpbar": `${barWidth}%` } as React.CSSProperties}
                className="info-wrapper-health-bar"
              ></div>
              <p className="info-wrapper-health-text">
                HP:{baseHp}/{currentHp}
              </p>
            </div>
          </div>

          <div className="image-wrapper">
            <img src={image} alt={name} />
          </div>
        </>
      ) : (
        <>
          <div className="image-wrapper">
            <img src={image} alt={name} />
          </div>

          <div className="info-wrapper">
            <p className="info-wrapper-name">{name}</p>
            <p className="info-wrapper-level">:L{lvl}</p>
            <div className="info-wrapper-health-wrapper">
              <div
                style={{ "--hpbar": `${barWidth}%` } as React.CSSProperties}
                className="info-wrapper-health-bar"
              ></div>
              <p className="info-wrapper-health-text">
                HP:{baseHp}/{currentHp}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Pokemon;
