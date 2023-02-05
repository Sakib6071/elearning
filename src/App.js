import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import ClassSix from './components/ClassSix/ClassSix';
import ClassSeven from './components/ClassSeven/ClassSeven';
import ClassEight from './components/ClassEight/ClassEight';
import ClassNine from './components/ClassNine/ClassNine';
import ClassTen from './components/ClassTen/ClassTen';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<AboutMe></AboutMe>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/six' element={<ClassSix></ClassSix>}></Route>
            <Route path='/seven' element={<ClassSeven></ClassSeven>}></Route>
            <Route path='/eight' element={<ClassEight></ClassEight>}></Route>
            <Route path='/nine' element={<ClassNine></ClassNine>}></Route>
            <Route path='/ten' element={<ClassTen></ClassTen>}></Route>
            <Route path='/checkout/:JS/:ID/:Level' element={<Checkout></Checkout>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
    </div>
  );
}

export default App;
