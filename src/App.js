import './App.css';
import Logo from './components/Logo/Logo';
import Options from './components/Options/Options';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <Logo/>
          <Options/>
      </header>
    </div>
  );
}

export default App;
