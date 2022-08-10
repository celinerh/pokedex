/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Outlet, Link } from "react-router-dom";

function App() {
  const styles = {
    app: css``,
    // navigation: css`
    //   list-style: none;
    // `,
    // navigationLink: css`
    //   text-decoration: none;
    // `,
  };

  return (
    <div className="App">
      <header>
        {/* <nav css={styles.navigation}>
          <li>
            <Link to="/" css={styles.navigationLink}>
              Forside
            </Link>
          </li>
        </nav> */}
      </header>

      <Outlet />
    </div>
  );
}

export default App;
