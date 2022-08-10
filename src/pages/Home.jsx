/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [pokemons, setPokemons] = useState({});
  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const styles = {
    container: css`
      width: 200px;
      height: 400px;
      overflow-y: auto;
      border: 1px solid #ccc;
      padding: 10px;
    `,
  };

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div css={styles.container}>
          {data.results?.map((item) => (
            <p key={item.name}>
              <Link to={"/pokemon/" + item.name}>{item.name}</Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
