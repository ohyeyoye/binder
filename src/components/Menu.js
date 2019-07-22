import React from "react";
import styled from "styled-components";

const MenuIconContainer = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  width: 48px;
  height: 48px;
  cursor: pointer;
  .active {
    background: transparent;
    box-shadow: none;
  }
  .active:before {
    top: 0;
    transform: rotate(135deg);
  }
  .active:after {
    top: 0;
    transform: rotate(45deg);
  }
`;
const MenuIcon = styled.div`
  position: absolute;
  top: 50%;
  width: 48px;
  height: 6px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: translate(0, -50%);
  transition: 0.5s;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 48px;
    height: 6px;
    border-radius: 3px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  &:before {
    top: -16px;
  }
  &:after {
    top: 16px;
  }
`;

const Menu = ({ className }) => {
  const toggleSideMenu = () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sideMenu = document.querySelector(".side-menu");
    menuIcon.classList.toggle("active");
    sideMenu.classList.toggle("opened");
  };
  return (
    <MenuIconContainer className={className} onClick={toggleSideMenu}>
      <MenuIcon className="menu-icon" />
    </MenuIconContainer>
  );
};

export default Menu;
