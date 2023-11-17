import styled from "styled-components";

function App() {
  return (
    <>
        <StyledButton
            type="button"
        >
            Button text
        </StyledButton>
    </>
  )
}

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
`

export default App
