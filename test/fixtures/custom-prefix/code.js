import styled from "styled-components";
const Text = styled.p`
  color: var(--text-color, yellow);
`;

function App() {
  return <Text css--text-color="pink">Hello World</Text>;
}

export default App;
