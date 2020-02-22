# React Hooks

Hooks don't work inside classes.

## Why Hooks???

Understand how **this** keyword works in javascript.<br/>
Remember to bind event handlers in class components.<br/>
Classes don't minify very well and make hot reloading very unreliable.<br/><br/>
There is no particular way to reuse stateful component logic<br/>
HOC and render props patterns do address this problem<br/>
Makes the code harder to follow<br/>
There is need to share stateful logic in a better way<br/><br/>
Create components for complex scenarios such as data fetching and subscribing to events<br/>
Related code is not orgnized in once place
**EX**
Data Fetching- In _componentDidMount_ and _componentDidUpdate_
Event Listeners - In _componentDidMount_ and _componentWillUnmout_

Because of stateful logic- can't break components into smaller ones.

## Rules of Hooks

_"Only call Hooks at the Top Level"_<br/>
Don't call Hooks inside loops, conditions or nested functions

_"Only call Hooks from React Functions"_<br/>
Call them from within React Functional components and not just any regular JavaScript function

## useState

The useState hooks lets you add state to functional components<br/>
In Classes, the state is always an object<br/>
With the useState hook, the state doesn't have to be an object<br/>
The first element is the current value of the state, and the second element is a state setter function<br/>
New state value depends on the previous state value? You can pass a function to the setter function<br/>
When dealing with object or arrays, always make sure to spread your state variable and then call the setter function

## useEffect

The Effect Hook lets you perform side effect in functional components<br/>
It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount<br/>

# Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

# Notes

For React Hooks, React 16.8 or higher version is required<br/>
Completely optain<br/>
Hooks don't contain any breaking changes and the release is 100% backward-compatible<br/>
Classes won't be removed from React<br/>
Can't use Hooks inside of class components<br/>
Hooks don't replace your existing knowledge of React concepts<br/>
Instead, Hooks provide a more direct API to the React concepts you already know

# Summary

Hooks are new feature addition in React version 16.8<br/>
They allow you to use React features without having to write a class<br/>
Avoid the whole confusion with _this_ keyword<br/>
Allow you to reuse stateful logic <br/>
Organise the logic inside a component into the reusable isolated units
