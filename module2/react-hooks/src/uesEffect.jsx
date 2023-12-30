import { useEffect, useState } from "react";
import BlogList from "./BlogList";

// component starts with having a state of blogs defined and a function to update the list of blogs
const Blogs = () => {
    const [blogs, setBlogs] = useState([
      {
        title: "my new website",
        body: "lorem ipsum ...",
        author: "mario",
        id: 1,
      },
      {
        title: "house party",
        body: "lorem ipsum ...",
        author: "luigi",
        id: 2,
      },
    ]);

    // handleDelete returns a new array after filtering the current state of blogs.
    //  filter looks through the blogs in state and if the current blog being clicked is in the list then it is removed
    // easier to follow where this function is called - the bloglist component
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blogs => blogs.id !== id)
        setBlogs(newBlogs)
    }

    // This is only here to show how this hook will run after each render is called. Renders happen when initial app loads or when state is changed in component
    useEffect(()=> {
        console.log('use effect ran')
    })

    // return another component called bloglist passing props `blogs, title, & handleDelete`
    // blogs is coming from the component state and being passed down to the child
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
        </div>
    )
}

export default Blogs;