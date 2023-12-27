// Import statements from other components within app
import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"

// functional component - no longer really use class components
// Components must return jsx
function App() {

  // Returning a fragment allows for you to return multiple components
  return (
    <>
    <Header></Header>
    <Food/>
    <Footer/>
    </>
  )
}

export default App
