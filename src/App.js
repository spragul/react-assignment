import { Route, Routes } from 'react-router-dom';
import './App.css';
import Elementtransfer from './Components/Element-transfer';
import Firstpage from './Components/Firstpage';
import NestedList from './Components/NestedList';
import Infinitescroll from './Components/Infinitescroll';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Firstpage/>}/>
        <Route path='/element' element={<Elementtransfer/>}/>
        <Route path='/nestedlist' element={<NestedList/>}/>
        <Route path='/infinitescroll' element={<Infinitescroll/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;
