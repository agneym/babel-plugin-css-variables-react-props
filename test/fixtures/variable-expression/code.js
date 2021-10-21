function App() {
  const isBold = true;
  return <p c--font-weight={isBold ? "600" : "400"}>Hello World</p>;
}

export default App;
