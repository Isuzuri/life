import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeLog from './components/main/changeLog.jsx';
import ListsPage from './components/main/lists.jsx';
import Layout from './components/layout.jsx';
import FullPage from './components/main/full.jsx';
import HomePage from './components/main/home.jsx';

function App() {
  return (
    <div className="App" style={{ margin: 'auto 1%' }}>
      <Routes>
        <Route path="/" element={<Layout />}>         
          <Route index element={<ChangeLog />}></Route>
          <Route path="lists" element={<ListsPage />}></Route>
          <Route path='full' element={<FullPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
