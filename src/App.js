/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Outlet, Link } from "react-router-dom";

function App() {
  const styles = {
    navigation: css`
      list-style: none;
    `,
    navigationLink: css`
      text-decoration: none;
    `,
  };

  return (
    <div className="App">
      <header>
        <h1>Brians Fantastiske Pokemon-App</h1>
        <nav css={styles.navigation}>
          <li>
            <Link to="/" css={styles.navigationLink}>
              Forside
            </Link>
          </li>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
