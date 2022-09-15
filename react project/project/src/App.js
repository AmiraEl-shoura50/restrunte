
import { Fragment } from 'react';
import './App.css';
import Home from './component/Home/Home';
import Navs from './component/Navs/nav';
function App() {
  return (
    <Fragment >
      <Navs />
      <Home/>
     
    </Fragment>
  );
}

export default App;
