import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function NavigationButton() {
  const NavbarLink = styled(Link)<{ active: boolean }>`
    color: ${({ active }) => (active ? `#1e64b6` : `black`)};
    border: 1px solid ${({ active }) => (active ? `#1e64b6` : `black`)};
    padding: 4px 8px;
    font-size: 16px;
    text-decoration: none;
    margin: 10px;
    &:hover,
    &:focus {
      color: #1e64b6;
    }
  `;
  const { pathname } = useLocation();
  return (
    <div style={{ margin: "32px 0" }}>
      <NavbarLink
        active={pathname === "/dashboard/subcription"}
        to={"/dashboard/subcription"}
      >
        Subcription
      </NavbarLink>
      <NavbarLink
        active={pathname === "/dashboard/revenue"}
        to={"/dashboard/revenue"}
      >
        Revenue
      </NavbarLink>
    </div>
  );
}

export default NavigationButton;
