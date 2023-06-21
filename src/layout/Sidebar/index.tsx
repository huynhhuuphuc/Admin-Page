import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { SidebarData } from "./SidebarData";

const SidebarWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarMenu = styled.div`
  width: 208px;
  position: relative;
  border: 1px solid #1e64b6;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: 0.6s;
  margin-top: 1.5rem;
  padding-bottom: 2rem;
  margin-left: 1.5rem;
  margin-bottom: 2rem;
  margin-right: 1rem;
  z-index: 2;
`;

const MenuItems = styled.li<{ active: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 40px;
  padding: 1.5rem 0 1.25rem;
  margin-top: 16px;
`;
const MenuItemLinks = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  color: ${({ active }) => (active ? "#1e64b6" : "black")};
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-left: 1.2rem;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
`;

const Sidebar: FC = () => {
  const { pathname } = useLocation();

  return (
    <SidebarWrapper>
      <SidebarMenu>
        <Divider />
        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index} active={pathname === item.path}>
              <MenuItemLinks to={item.path} active={pathname === item.path}>
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;
