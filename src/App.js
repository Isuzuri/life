import './App.css';
import Blog from './components/main/blog.jsx';
import Nav from './components/nav/nav.jsx'

function App() {
  return (
    <div className="App" style={{margin: 'auto 1%'}}>
      <Nav></Nav>
      {/* Добавить ниже роутер */}
      <Blog></Blog>
    </div>
  );
}

export default App;
