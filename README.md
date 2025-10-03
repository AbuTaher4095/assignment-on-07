https://present-calendar1234.surge.sh/

1. What is JSX, and why is it used?
JSX is a syntax extension for JavaScript that looks like HTML. It’s used in React to describe the UI structure in a more readable and declarative way.

2. What is the difference between State and Props?
State: Managed within a component; can change over time using hooks like useState.
Props: Passed from parent to child components; read-only and cannot be modified by the     child.

3. What is the useState hook, and how does it work?
useState is a React hook used to add state to functional components. It returns a state variable and a function to update it. When updated, the component re-renders to reflect the new state.

4. How can you share state between components in React?
    1. Lift the state up to a common parent and pass it down as props.
    2. Use Context API for global sharing.
    3. Use state management libraries like Redux, Zustand, or Recoil for complex apps.

5. How is event handling done in React?
React uses camelCase event names such as onClick and passes functions as event handlers. Events are handled using synthetic events, which work similarly across all browsers.
