'use client'
import Container from "@/components/atoms/Container"
import { Background, Logo, Menus, Item, Link } from "@/components/organisms/Header/styled"

export default function Header(){
  return (
    <Background>
      <Container>
        <Logo
          src=""
          width={20}
          height={20}
          alt="Logo"
        />
        <Menus>
          <Item>
            <Link href=""></Link>
          </Item>
        </Menus>
      </Container>
    </Background>
  )
}