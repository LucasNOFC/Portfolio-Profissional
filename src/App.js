import './App.css';
import Logo from './components/Logo/Logo';
import Media from './components/Media/Media';
import Options from './components/Options/Options';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <Logo/>
          <Options/>
          <Media/>
      </header>
    </div>
  );
}

export default App;
