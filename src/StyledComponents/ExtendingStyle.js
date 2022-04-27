import styled from 'styled-components';

const Button = styled.button`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
`;

const ExtendedButton = styled(Button)`
  color: orange;
  border-color: orange;
`;

export default function ExtendingStyle(props) {
  return (
    <div>
      <Button>Normal</Button>
      <ExtendedButton>Extended</ExtendedButton>
    </div>
  );
}
