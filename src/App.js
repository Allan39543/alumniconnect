import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import TopFourEvents from './components/TopFourEvents';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">

<Header />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      </Routes>

      {/* <Landing /> */}
      {/* <TopFourEvents /> */}
      <Footer />

    </div>
  );
}

export default App;
