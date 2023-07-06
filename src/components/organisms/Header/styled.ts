import { styled } from "styled-components";
import Image from "next/image";

export const Background = styled.div`
  height: 400px;
  background: url("/img/image-hero-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const Nav = styled.div`
  height: 128px;
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.0) 100%);
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 910px;
  height: 100%;
  margin: 0 auto;
  transition: width .1s;
`

export const Logo = styled(Image)`
  width: 127px;
  height: 20px;
`

export const Menus = styled.ul`
  display: flex;
  gap: 32px;
`

export const Item = styled.li`
  list-style: none;
`

export const Link = styled.a`
  color: #FFF;
  font-family: Commissioner;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  cursor: pointer;
`