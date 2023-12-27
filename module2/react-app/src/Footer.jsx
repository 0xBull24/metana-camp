// Another example of using JS inside of `{}`
function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    );
}

export default Footer