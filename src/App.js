import './stylesheet/App.css';
import {BodyWrapper} from './components'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Navbar, Footer} from './components'
import MainView from './views/MainView';
import DetailsView from './views/DetailsView';
import CreateView from './views/CreateView';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BodyWrapper>
        <Routes>
          <Route path="/Main" element={<MainView />} exact />
          <Route path="/Details/:id" element={<DetailsView />} />
          <Route path="/Create" element={<CreateView />} />
          <Route path="/Edit/:id" element={<CreateView />} exact/>
        </Routes>
      </BodyWrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
