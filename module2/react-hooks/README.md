# Hooks

Hooks let you handle app state without writing classes.
2 of the more common hooks will be used in this example `useState` and `useEffect`.

`useState` is used to give the app a local state that can be passed from parent components down to child nodes

`useEffect` should be use sparingly since it runs on the first render to the DOM and anytime state is changed. Typically this is used to fetch data
or talk with middleware like auth.
