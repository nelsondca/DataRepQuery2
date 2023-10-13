function Content() {
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );// writing the visual piece of this component
}
//This command allows us to import this function somewhere else
export default Content;