// props can be destructed or just passed in as an object
// blogs is the array of objects from parent component
const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  // Because blogs is an array we can map over each element in the array to display the items as a list
  // When we click on the delete button we call the handleDelete function with the current blog element in the map
  // If the current blog is in the list, which it is, we will then remove it and return a new array to state that then gets rendered back through this component   
  return (
    <div className="blog-list">
      <h2> { title } </h2>
      { blogs.map((blog) => (
        <div className="blog-preview" key={ blog.id }>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button onClick={() => props.handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
