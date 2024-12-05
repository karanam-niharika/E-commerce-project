

import Home from './Home';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbarpage from './Navbarpage';
import Contactpage from './Contactpage';
import ServicesPage from './ServicesPage';
import Productspage from './Productspage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to='/'></Link>
        <Routes>
      
          <Route path='/' element={<Home />}></Route>
          <Route path='Navbarpage' element={<Navbarpage />}></Route>
          <Route path='Contactpage' element={<Contactpage />}></Route>
          <Route path='Productspage' element={<Productspage />}></Route>
          <Route path='ServicesPage' element={<ServicesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;










































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
