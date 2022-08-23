/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Divider from "../components/Divider";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [query, setQuery] = useState("");

  const { data: pokemons, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10228"
  );

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    if (!pokemons) {
      return;
    }

    setFilteredPokemons(
      pokemons.results.filter((pokemon) =>
        query ? pokemon.name.toLowerCase().includes(query.toLowerCase()) : true
      )
    );
  }, [pokemons, query]);

  const styles = {
    app: css``,
    pokedex: css`
      background-color: #e61515;
      width: 848px;
      margin: 0 auto;
      padding: 1em;
      border-radius: 15px;
      border: double black 10px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
    `,
    leftPanel: css`
      padding: 10px;
      border: inset #b31818 3px;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,

    pokemonsContainer: css`
      height: 410px;
      overflow-y: auto;
      padding: 10px;
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
      flex-direction: column;
      gap: 8px;

      &::-webkit-scrollbar {
        width: 20px;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
      }
      &::-webkit-scrollbar-thumb {
        background: #888;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `,
    pokemonLink: css`
      font-family: "VT323";
      letter-spacing: 1px;
      color: #000;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;
    `,
    noResult: css`
      font-family: "VT323";
      letter-spacing: 1px;
    `,
    searchField: css`
      font-family: "VT323";
      font-size: 1rem;
      outline: none;
      width: 100%;
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
    rightPanel: css`
      padding: 10px;
      border: inset #b31818 3px;
      border-radius: 3px;
    `,
  };

  return (
    <div className="App" css={styles.app}>
      <div css={styles.pokedex}>
        <div css={styles.leftPanel}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div css={styles.pokemonsContainer}>
              {filteredPokemons.map((pokemon) => (
                <p key={pokemon.name}>
                  <Link
                    to={"/pokemon/" + pokemon.name}
                    css={styles.pokemonLink}
                  >
                    {pokemon.name}
                  </Link>
                </p>
              ))}

              {!isLoading && filteredPokemons.length === 0 && (
                <p css={styles.noResult}>No results</p>
              )}
            </div>
          )}

          <input
            css={styles.searchField}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search for a pokemon..."
          />
        </div>
        <Divider />
        <div css={styles.rightPanel}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
