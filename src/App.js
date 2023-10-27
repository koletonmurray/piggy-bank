import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Learn from './pages/Learn/Learn';
import AddMoney from './pages/AddMoney/AddMoney';
import Savings from './pages/Savings/Savings'
import Spending from './pages/Spending/Spending';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path='/add-money' element={<AddMoney /> } />
          <Route path='/savings' element={<Savings /> } />
          <Route path='/spending' element={<Spending /> } />
          <Route path='*' element={<Home/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;