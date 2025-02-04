# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications: an infinite loop caused by the `useEffect` hook.

## Bug Description

The `MyComponent` component uses the `useEffect` hook to update the `count` state.  However, the dependency array is empty (`[]`), causing the effect to run repeatedly, leading to an infinite loop and crashing the application. 

## Solution

The solution involves correctly specifying the dependencies in the `useEffect` hook's dependency array. In this case, if the effect doesn't need to depend on any props or states, you can use `React.useCallback` to prevent unnecessary updates.