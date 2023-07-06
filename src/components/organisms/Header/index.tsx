"use client";
import {
  Background,
  Nav,
  Wrapper,
  Logo,
  Menus,
  Item,
  Link,
} from "@/components/organisms/Header/styled";

const menuItems = [
  {
    id: 1,
    name: "About",
    link: "/",
  },
  {
    id: 2,
    name: "Discover",
    link: "/",
  },
  {
    id: 3,
    name: "Get Started",
    link: "/",
  },
];

export default function Header() {
  return (
    <Background>
      <Nav>
        <Wrapper>
          <Link href="/">
            <Logo src="/img/logo.svg" width={127} height={20} alt="Logo" />
          </Link>
          <Menus>
            {menuItems.map((item) => (
              <Item key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </Item>
            ))}
          </Menus>
        </Wrapper>
      </Nav>
    </Background>
  );
}
