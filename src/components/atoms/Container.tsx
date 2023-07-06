import { styled } from "styled-components";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 910px;
  margin: 0 auto;
  transition: width .1s;

  
`