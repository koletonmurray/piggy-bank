import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Learn from './Learn/Learn';
import Layout from './Layout/Layout';
import AddMoney from './AddMoney/AddMoney';
import Savings from './Savings/Savings'
import Spending from './Spending/Spending';

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