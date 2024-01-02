export default function Form({ onSubmit, onTextChange }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onTextChange}></input>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
