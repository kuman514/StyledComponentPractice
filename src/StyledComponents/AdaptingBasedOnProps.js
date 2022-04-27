import styled from 'styled-components';

const PropAdaptedButton = styled.button`
  background: ${props => props.primary ? 'yellow' : 'white'};
  color: ${props => props.primary ? 'green' : 'black'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export default function AdaptingBasedOnProps(props) {
  return (
    <div>
      <PropAdaptedButton>Normal</PropAdaptedButton>
      <PropAdaptedButton primary>Primary</PropAdaptedButton>
    </div>
  );
}
