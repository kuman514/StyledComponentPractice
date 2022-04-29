import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'green'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default function PassedProps(props) {
  return (
    <div>
      <Input
        type="text"
        defaultValue="@originalInput"
      />
      <Input
        type="text"
        defaultValue="@propPassedInput"
        inputColor="rebeccapurple"
      />
    </div>
  );
}
