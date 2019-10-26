import React, { FC } from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import setsu from '../styles/theme/default/assets/images/setsu.svg';
const style = {
  menu: {
    borderRadius: '0'
  },
  image: {
    margin: '0.5rem 0.5rem 0.5rem 1.5rem '
  },
  menuTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    paddingLeft: '0.5rem'
  }
};

const SuiHeader: FC = () => {
  return (
    <>
      <Menu inverted style={style.menu}>
        <Container>
          <Image size='mini' src={setsu} style={style.image}></Image>
          <Menu.Item style={style.menuTitle}>「水」ジェネレーター</Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default SuiHeader;
