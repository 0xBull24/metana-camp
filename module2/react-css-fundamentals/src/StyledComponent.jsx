import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;
  color: ${(props) => props.color};

  p {
    font-size: 3.5rem;
  }
`;

const CssInJs = () => {
    return (
    <StyledDiv color="#BF4F74">
        <p>This is a react component using styled component</p>
    </StyledDiv>
    )
}

export default CssInJs;