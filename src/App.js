import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import AppRouter from './Components/AppRouter';
import Footer from './Sections/Footer/Footer';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
