import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Provider from './components/Provider';
import Category from './components/Category';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
        <Layout>
      <Routes>
        <Route path='/provider' element={<Provider />} />
        <Route path='/category' element={<Category />} />
      </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
