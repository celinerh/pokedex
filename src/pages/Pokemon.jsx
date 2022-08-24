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
    rightPanel: css`
      display: flex;
      flex-direction: column;
      gap: 10px;
    `,
    header: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    `,
    heading: css`
      flex: 3;
      width: 100%;
      text-transform: uppercase;
      font-size: 1.1rem;
      white-space: nowrap;

      background: linear-gradient(
        14deg,
        rgb(165, 205, 83) 60%,
        rgb(193, 217, 144) 65%
      );
      padding: 5px;
      border-radius: 3px;
      border: inset #879a65 3px;
      letter-spacing: 1px;

      &.pokemonId {
        text-align: right;
        flex: 1;
      }
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
    image: css`
      display: block;
      width: 100%;
    `,
    imagePokeball: css`
      display: block;
      width: 80%;
    `,
    statsContainer: css`
      display: flex;
      gap: 10px;
    `,
    stats: css`
      width: 100%;
      max-width: 162px;
      background: linear-gradient(
        14deg,
        rgb(165, 205, 83) 60%,
        rgb(193, 217, 144) 65%
      );
      padding: 5px;
      border-radius: 3px;
      border: inset #879a65 3px;
      letter-spacing: 1px;
    `,
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div css={styles.rightPanel}>
          <div css={styles.header}>
            <h1 css={styles.heading}>{pokemon.name}</h1>
            <p css={styles.heading} className="pokemonId">
              #{pokemon.id}
            </p>
          </div>

          <div css={styles.imageBackground}>
            {pokemon.sprites.front_default ? (
              <img
                css={styles.image}
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            ) : (
              <img
                css={styles.imagePokeball}
                src={"/images/pokeball.png"}
                alt={pokemon.name}
              />
            )}
          </div>

          <div css={styles.statsContainer}>
            <div css={styles.stats}>
              <p>Weight(kg).....{(pokemon.weight * 0.1).toFixed(1)}</p>
              <p>Height(m)......{(pokemon.height / 10).toFixed(1)}</p>
            </div>

            <Types types={pokemon.types} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
