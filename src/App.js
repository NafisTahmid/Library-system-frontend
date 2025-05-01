import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {  Routes, Route } from 'react-router-dom';
function App() {
  return (
        <div className="">
          <Header/>
            <main className="container py-3">
              <Routes>
                <Route path="/" element={<HomeScreen/>} exact/>
                <Route path="/book/:id" element={<ProductScreen/>}/>
              </Routes>
            </main>
          <Footer/>
        </div>
 
    
  );
}

export default App;
