import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeLog from './components/main/changeLog.jsx';
import Lists from './components/main/lists.jsx';
import Layout from './components/layout.jsx';
import Full from './components/main/full.jsx';

function App() {
  return (
    <div className="App" style={{ margin: 'auto 1%' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChangeLog />}></Route>
          <Route path="changeLog" element={<ChangeLog />}></Route>
          <Route path="lists" element={<Lists />}></Route>
          <Route path='full' element={<Full />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
