import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
hmtl {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  color: black;
  background-color:#f0f0f0;
  font-family: Roboto, sans-serif;
  font-size: 20px;
}
img {
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1, h2, h3 {
  font-family: Pacifico, sans-serif;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
button {
  cursor: pointer;
}
input, button {
  font: inherit;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
`;
