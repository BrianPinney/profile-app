import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Quote from './components/Quote';
import Grid from './components/Grid';
import PictCarousel from './components/PictCarousel';
import Video from './components/Video';
import Footer from './components/Footer';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {
  return (
    <div className="App">
      <HeroBanner />
      <About />
      <Quote />
      <Grid />
      <PictCarousel />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
