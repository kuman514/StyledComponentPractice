import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: gray;
`;

export default function StyledTitle() {
  return (
    <Wrapper>
      <Title>
        Koishi is an adorable baby!
      </Title>
    </Wrapper>
  );
}
