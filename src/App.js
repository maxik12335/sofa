import './styles/App.css'
import { HashRouter  } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import AppRouter from './Components/AppRouter';
import Footer from './Sections/Footer/Footer';

function App() {

  return (
    <HashRouter  basename={process.env.PUBLIC_URL}>
      <Navbar />
      <AppRouter />
      <Footer />
    </HashRouter >
  )
}

export default App;
