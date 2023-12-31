import { useEffect, useRef, useState } from 'react'
import './App.css'

// Example url to get data from for this demo
const BASE_URL = 'https://jsonplaceholder.typicode.com';


function App() {

  // setting up different variables in state that can/will be used
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0)

  // using a ref to a controller to cancel outstanding http request 
  const abortControllerRef = useRef(null)

  // Again called when app mounts initially or when state changes.
  useEffect(() => {
    const fetchPosts = async () => {

      // Setup a new abort controller for http request
      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()

      // Because this this hook runs at least once we want to set isLoading to true before we start any api calls
      setIsLoading(true)

      // try/catch block to try and fetch data from the endpoint with a signal of a new abort controller
      // if the data is found then it will set posts to the data, else it will set error and display the error jsx
      // and when all is done it will set is loading to false since there is no more work to be done
      // dependency array filled with page state it only runs if page is updated (in state)
      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const posts = await response.json();
        setPosts(posts)
      } catch (err) {
        if (err.name ==="AbortError") {
          console.log('aborted')
          return
        }
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  },[page]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong. Please try again</div>
  }

  // button is only to show how page will trigger the useEffect and simulate an error to show if a race condition was met before the abort controller can fire
  return (
    <div className='tutorial'>
      <h1>Data fetching in React</h1>
      <button onClick={() => setPage(page + 1)}>Increase Page {page}</button>
      <ul>
        {posts.map(post => {
          return <li key={posts.id}>{post.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
