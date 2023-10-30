import Logo from "../Logo/Logo";
import Media from "../Media/Media";
import Options from "../Options/Options";

import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

function Header() {
  return (
      <HeaderContainer>
          <Logo/>
          <Options/>
          <Media/>
      </HeaderContainer>
  );
}

export default Header;
