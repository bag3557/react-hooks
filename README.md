## Rules of Hooks

"Only call Hooks at the Top Level"

Don't call Hooks inside loops, conditions or nested functions

"Only call Hooks from React Functions"

Call them from within React Functional components and not just any regular JavaScript function

## useState

The useState hooks lets you add state to functional components

In Classes, the state is always an object

With the useState hook, the state doesn't have to be an object

The first element is the current value of the state, and the second element is a state setter function

New state value depends on the previous state value? You can pass a function to the setter function

When dealing with object or arrays, always make sure to spread your state variable and then call the setter function

## useEffect

The Effect Hook lets you perform side effect in functional components

It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount
