import './styles/App.css';
import {Card, CardsList} from './components'
import img1 from './images/img1.jpeg'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Navbar, Footer} from './components'
import MainView from './MainView';
import DetailsView from './DetailsView';
import CreateView from './CreateView';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Main" element={<MainView />} exact />
        <Route path="/Details/:id" element={<DetailsView />}  />
        <Route path="/Create" element={<CreateView />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
