import Header from "./Header";
import Reminder from "./Reminder";
import Home from "./Home";
import Historia from "./Historia";
import Cartas from "./Cartas";
import Galeria from "./Galeria";
import Regalos from "./Regalos";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <main>
        <Historia />
        <Cartas />
        <Galeria />
        <Regalos />
      </main>
      <Footer />
    </>
  );
}

export default App;
