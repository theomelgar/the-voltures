'use client'

import styled from "styled-components";
import Aside from "./Aside";

export default function MenuButton() {
  const handleMenuClick = () => {
    // Toggle the aside by changing the right property
    const aside = document.querySelector(".aside");
    aside.style.left = aside.style.left === "0px" ? "-400px" : "0px";
  };

  return (
    <>
      <MenuIconContainer>
        <MenuIcon onClick={handleMenuClick}>
          <input className="menu-icon__checkbox" type="checkbox" />
          <div>
            <span></span>
            <span></span>
          </div>
        </MenuIcon>
      </MenuIconContainer>
      <Aside></Aside>
    </>
  );
}

const MenuIcon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transform: scale(1.5);
  .menu-icon__checkbox {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    z-index: 2;
    -webkit-touch-callout: none;
    position: absolute;
    opacity: 0;
  }

  div {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 22px;
    height: 12px;
  }

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--bar-bg, #ffffff);
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

    &:first-of-type {
      top: 0;
    }

    &:last-of-type {
      bottom: 0;
    }
  }

  &.active,
  .menu-icon__checkbox:checked + div {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }

      &:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
    }
  }

  &.active:hover span:first-of-type,
  &.active:hover span:last-of-type,
  &:hover .menu-icon__checkbox:checked + div span:first-of-type,
  &:hover .menu-icon__checkbox:checked + div span:last-of-type {
    width: 22px;
  }

  &:hover {
    @media (min-width: 1024px) {
      span:first-of-type {
        width: 26px;
      }

      span:last-of-type {
        width: 12px;
      }
    }
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  z-index: 1;
`;
