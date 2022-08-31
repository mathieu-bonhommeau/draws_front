import "../styles/global/main.scss";
import Container from "../components/Container";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
