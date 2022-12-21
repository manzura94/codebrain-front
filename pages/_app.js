import UserContext from "../context/UserContext";
import {GlobalStyle} from "../components/Styles/pages/style"



function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserContext>
  );
}

export default MyApp;
