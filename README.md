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
Related code is not orgnized in once place<br/>
**EX:-**<br/>
Data Fetching- In _componentDidMount_ and _componentDidUpdate_<br/>
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

## Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## useReducer

useReducer us a hook that is used for the state management</br>
It is an alternative to setState

#### What's the difference?

useState is built using useReducer

#### When to useState vs useReducer?

1. Type of state-</br>
   useState- Number, String, Boolean</br>
   useReducer - Object or Array
2. Number of state transitions-</br>
   useState- one or two</br>
   useReducer - Too many
3. Related state transitions-</br>
   useState- No</br>
   useReducer- Yes
4. Business Logic-</br>
   useState- No business logic</br>
   useReducer- Complex business logic
5. Local vs Global state-</br>
   useState- Local</br>
   userReducer- Global

#### useReducer with useContext

useReducer- Local state management</br>
useContext- Share state between components - Global state management</br>
useReducer + useContext

## useCallback

#### What?

useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.<br/>

#### Why?

It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

## Hooks so far

useState - state</br>
useEffect - side effects</br>
useContext - context API</br>
useReducer - reducers</br>
useCallback - reducers</br>

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
