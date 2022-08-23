/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Types = ({ types }) => {
  const styles = {
    typesList: css`
      list-style: none;
      margin-left: auto;
      display: flex;
      gap: 5px;
    `,
    type: css`
      width: 80px;
      border: 1px solid #000;
      text-transform: uppercase;
      font-size: 1.4rem;
      border-radius: 2px;

      display: flex;
      justify-content: center;
      align-items: center;

      &.normal {
        background: linear-gradient(
          14deg,
          rgba(168, 167, 122, 1) 60%,
          rgba(231, 230, 187, 1) 65%
        );
      }

      &.fire {
        background: linear-gradient(
          14deg,
          rgba(238, 129, 48, 1) 60%,
          rgba(255, 201, 161, 1) 65%
        );
      }

      &.water {
        background: linear-gradient(
          14deg,
          rgba(9, 9, 121, 1) 60%,
          rgba(175, 175, 255, 1) 65%
        );
        -border: inset rgba(175, 175, 255, 1) 3px;
      }
      &.electric {
        background: linear-gradient(
          14deg,
          rgba(247, 208, 44, 1) 60%,
          rgba(255, 237, 160, 1) 65%
        );
      }
      &.grass {
        background: linear-gradient(
          14deg,
          rgba(122, 199, 76, 1) 60%,
          rgba(204, 255, 174, 1) 65%
        );
      }
      &.ice {
        background: linear-gradient(
          14deg,
          rgba(150, 217, 214, 1) 60%,
          rgba(206, 255, 253, 1) 65%
        );
      }
      &.fighting {
        background: linear-gradient(
          14deg,
          rgba(194, 46, 40, 1) 60%,
          rgba(255, 147, 143, 1) 65%
        );
      }
      &.poison {
        background: linear-gradient(
          14deg,
          rgba(163, 62, 161, 1) 60%,
          rgba(255, 168, 253, 1) 65%
        );
      }
      &.ground {
        background: linear-gradient(
          14deg,
          rgba(226, 191, 101, 1) 60%,
          rgba(255, 238, 193, 1) 65%
        );
      }
      &.flying {
        background: linear-gradient(
          14deg,
          rgba(169, 143, 243, 1) 60%,
          rgba(223, 212, 255, 1) 65%
        );
      }
      &.psychic {
        background: linear-gradient(
          14deg,
          rgba(249, 85, 135, 1) 60%,
          rgba(255, 169, 195, 1) 65%
        );
      }
      &.bug {
        background: linear-gradient(
          14deg,
          rgba(166, 185, 26, 1) 60%,
          rgba(236, 255, 93, 1) 65%
        );
      }
      &.rock {
        background: linear-gradient(
          14deg,
          rgba(182, 161, 54, 1) 60%,
          rgba(255, 236, 140, 1) 65%
        );
      }
      &.ghost {
        background: linear-gradient(
          14deg,
          rgba(115, 87, 151, 1) 60%,
          rgba(218, 190, 255, 1) 65%
        );
      }
      &.dragon {
        background: linear-gradient(
          14deg,
          rgba(111, 53, 252, 1) 60%,
          rgba(188, 161, 255, 1) 65%
        );
      }
      &.dark {
        background: linear-gradient(
          14deg,
          rgba(112, 87, 70, 1) 60%,
          rgba(250, 202, 169, 1) 65%
        );
      }
      &.steel {
        background: linear-gradient(
          14deg,
          rgba(183, 183, 206, 1) 60%,
          rgba(221, 221, 255, 1) 65%
        );
      }
      &.fairy {
        background: linear-gradient(
          14deg,
          rgba(214, 133, 173, 1) 60%,
          rgba(255, 198, 226, 1) 65%
        );
      }
    `,
  };

  return (
    <ul css={styles.typesList}>
      {types.map((type) => (
        <li css={styles.type} key={type.type.name} className={type.type.name}>
          {type.type.name}
        </li>
      ))}
    </ul>
  );
};

export default Types;
