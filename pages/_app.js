import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="pt-16 relative flex-grow overflow-hidden">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
