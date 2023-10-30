import "./Header.css"
import Logo from "../Logo/Logo";
import Media from "../Media/Media";
import Options from "../Options/Options";

function Header() {
  return (
      <header className='App-header'>
          <Logo/>
          <Options/>
          <Media/>
      </header>
  );
}

export default Header;
