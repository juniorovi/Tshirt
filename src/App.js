import './App.css';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview'
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
