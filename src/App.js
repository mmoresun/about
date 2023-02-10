import { Route, Routes } from 'react-router-dom';
import './App.css';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<About />} />
            <Route index path='/me' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
