import "./App.css";
import Form from "./Form";

/* 
  Small component to demo event handling / user browser interaction
  3 small functions to identify what is happening when clicked or value updated
  event can be passed from any on* interaction
  Form component takes 2 props that get passed down to custom component
*/
function App() {

  function handleClick() {
    console.log("button click");
  }

  function handleSubmit() {
    console.log('Form submitted')
  }

  function handleTextChange(event) {
    console.log(event.target.value)
  }

  return (
    <div>
      <button onClick={handleClick}>Do Something</button>
      <Form onSubmit={handleSubmit} onTextChange={handleTextChange}/>
    </div>
  );
}

export default App;
