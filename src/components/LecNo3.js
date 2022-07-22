//ReactJS Course [3] - Ternary Operators, Lists in React, Css in React

import React from "react";

const LecNo3 = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ];
  return (
    <div>
      {planets.map((planet, key) => {
        return (
          <div className="card">
            {planet.isGasPlanet === true
              ? <h1>
                  {planet.name}
                </h1>
              : null}
          </div>
        );
      })}
    </div>
  );
};

export default LecNo3;
