import styled from 'styled-components';

const Link = ({ className, children, href }) => {
  return (
    <a
      className={className}
      href={href}
    >
      {children}
    </a>
  );
};

const StyledLink = styled(Link)`
  color: green;
  font-weight: bold;
`;

export default function StylingAnyComponent(props) {
  return (
    <div>
      <Link href="https://github.com/kuman514">
        Normal Link to kuman514 Github profile
      </Link>
      <br />
      <StyledLink href="https://github.com/kuman514/StyledComponentPractice">
        Styled Link to kuman514's styled-components practice
      </StyledLink>
    </div>
  );
}
