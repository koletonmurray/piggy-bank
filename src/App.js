import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import AddMoney from './pages/AddMoney';
import Savings from './pages/Savings'
import Spending from './pages/Spending';

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