import { useState } from 'react';
import styled from 'styled-components';

const StyledCntDiv = styled.div`
  padding: 0.6em;
  background-color: gray;
  border-radius: 20px;
`;

const Paragraph = styled.p`
  padding: 0.4em;
  background-color: green;
  color: white;
  border: solid 2px black;
`;

const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  background-color: green;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export default function StyledCounter(props) {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  return (
    <StyledCntDiv>
      <Paragraph>
        Current Value: {value}
      </Paragraph>
      <Button onClick={increase}>
        +
      </Button>
      <Button onClick={decrease}>
        -
      </Button>
    </StyledCntDiv>
  );
}
