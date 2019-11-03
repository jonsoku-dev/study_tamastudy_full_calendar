import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Wrapper = styled.div``;
const ImgBox = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    height: 50px;
  }
`;
const MenuBox = styled.div``;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
      text-transform: uppercase;
      transition: all 0.3s ease;
      font-size: 1.5rem;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
  margin-bottom: 1rem;
`;

const MenuLink = styled(Link)`
  background-color: ${props => props.selected && 'black'};
  color: ${props => props.selected && 'white'};
`;

const GlobalNavigation = props => {
  return (
    <Wrapper>
      <ImgBox>
        <img src="https://cdn.worldvectorlogo.com/logos/infiniti-logo-1.svg" alt="" />
      </ImgBox>
      <MenuBox>
        <Menu>
          <li>
            <MenuLink to="/notice" selected={props.location.pathname.startsWith('/notice')}>
              Notice
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/board" selected={props.location.pathname.startsWith('/board')}>
              Board
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/post" selected={props.location.pathname.startsWith('/post')}>
              Post
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/contact" selected={props.location.pathname.startsWith('/contact')}>
              Contact
            </MenuLink>
          </li>
        </Menu>
      </MenuBox>
    </Wrapper>
  );
};

export default withRouter(GlobalNavigation);
