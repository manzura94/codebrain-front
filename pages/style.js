import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
body {
    background-color: red;
  overflow: auto !important;
  padding-right: 0 !important;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

ul li {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

.wrapper{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.container{
    max-width: 2100px;
    width: 100%;
    margin: 0 auto;
}
`

export {GlobalStyle}