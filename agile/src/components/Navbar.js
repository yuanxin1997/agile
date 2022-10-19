import React, { useEffect, useState, useRef } from "react";
import { Menu, Button, Avatar, Dropdown, Skeleton } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.png"; // with import
import { useLocation } from "react-router-dom";

const Navbar = ({ items }) => {
  const location = useLocation();
  console.log(location.pathname);
  // action ====== END

  return (
    <>
      <NavWrapper>
        <NavLogoWrapper className="home-logo">
          <a href="/">
            <img src={logo} height="50" />
          </a>
        </NavLogoWrapper>

        <NavLinkWrapper className="nav-item">
          {items.map((item, index) => (
            <NavLink
              className={
                location.pathname === item.path
                  ? "nav-link active"
                  : "nav-link inactive"
              }
              to={`${item.path}`}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinkWrapper>
      </NavWrapper>
    </>
  );
};

Navbar.defaultProps = {
  items: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Academics",
      path: "/academics",
    },
    {
      name: "Admission",
      path: "/admission",
    },
  ],
};

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  
  .home-logo {
    vertical-align: middle;
    flex-grow: 1;
    div {
      vertical-align: middle;
    }
  }

  .nav-item {
    flex-grow: 10;
  }
`;

const NavLinkWrapper = styled.div`
  display: flex;
  font-size: var(--fs-h5);
  gap: 2rem;

  .nav-link {
    text-decoration: none;
    &.active {
      color: black;
    }

    &.inactive {
      color: grey;
    }
  }
  .nav-link:hover {
    color: black;
  }
`;

const NavLogoWrapper = styled.div``;
export default Navbar;
