import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useState } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemPage from './components/ItemPage';

function App() {
  const [activePage, setActivePage] = useState('tasks');

  return (
    <div className="app-wrapper">
      <AppNavbar activePage={activePage} setActivePage={setActivePage} />
      <div className="page-content">
        <ItemPage type={activePage} />
      </div>
    </div>
  );
}

export default App;