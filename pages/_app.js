import UserContext from "../context/UserContext";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  );
}

export default MyApp;
