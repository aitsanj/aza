import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import WomenSrc from '../../images/woman.svg';
import { countLevel } from '../../assets/constants';
import { useSelector } from 'react-redux';
import gifka from '../../images/gif.mp4';
import sabina from '../../images/sabina.png';
const { Header } = Layout;

const HeaderMy = (props) => {
  // разобраться с выбранным итемом меню
  const number = useSelector((state) => state.constants.stepNumber);

  return (
    <>
      <Header className="header" style={{ background: '#40a9ff' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[number]}
          style={{ background: '#40a9ff' }}
        >
          <Menu.Item key="0">
            <NavLink to="/">
              <img
                src={number >= 2 ? sabina : WomenSrc}
                style={{ width: '40px' }}
              />
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      {props.children}
    </>
  );
};

export default HeaderMy;
