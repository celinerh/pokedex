/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useParams } from "react-router-dom";
import Types from "../components/Types";
import useFetch from "../hooks/useFetch";

const Pokemon = () => {
  const { name } = useParams();

  const { data: pokemon, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  const styles = {
    heading: css`
      text-transform: capitalize;
    `,
    imageBackground: css`
      border-radius: 5px;
      border: inset #9aa28b 3px;
      background: linear-gradient(
        15deg,
        #cad5b5 64%,
        #dde2d4 70%,
        #dde2d4 81%,
        #fff 86%,
        #dde2d4 89%,
        #dde2d4 100%
      );
      display: flex;
      justify-content: center;
    `,
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>#{pokemon.id}</p>
          <div css={styles.imageBackground}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>

          <h1 css={styles.heading}>{pokemon.name}</h1>
          <Types types={pokemon.types} />
          <p>{pokemon.weight * 0.1} kg</p>
          <p>{pokemon.height / 10} m</p>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
