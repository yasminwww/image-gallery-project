import "./styles/global.scss";
import Header from "./components/Header";
import ImageContainer from "./features/ImageContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageContainer />
      <Footer />
    </div>
  );
}

export default App;
