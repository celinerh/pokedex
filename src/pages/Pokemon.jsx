/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useParams } from "react-router-dom";
import Types from "../components/Types";
import useFetch from "../hooks/useFetch";

const Pokemon = () => {
  const { name } = useParams();

  const styles = {
    heading: css`
      text-transform: capitalize;
    `,
  };

  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img src={data.sprites.front_default} alt={data.name} />
          <h1 css={styles.heading}>{data.name}</h1>
          <Types types={data.types} />
        </>
      )}
    </div>
  );
};

export default Pokemon;
