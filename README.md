# MindCloud Test

I decided to use React + Vite + Typescript + Tailwind for styling. I really think this a great stack for
modern apps.😎

When it comes to the Steps component, I think it was a good idea to add a few more keys to each object of the data compare to the ones you mentioned on the email. I did this thinking that this data might grow at some point, and I really like to avoid conditional rendering when possible. In this way, we will be able to add more objects there with different icons very easy.

I'm also using a custom hook that I have for cases when the user already clicked something but maybe he wants to see the initial UI again by clicking outside of the element. I'm leaving an explination at the end in case you want to check it. 

The StepsButton component is a very simple component that receives a few props. Nothing fancy there.🙂

I really enjoyed working on this test, and I'm open to suggestions about my code. I really like learning from more experienced developers and knowing different ways to achieve something here with React.


# Custom Hook -> useOutsideClick

This hook detects clicks outside a specific element and executes a callback function when that happens.

It accepts two arguments:
• ref = a reference to a DOM element
• callback = A function that will be executed when a click outside the referenced element is detected.

The hook is using the useEffect React hook that will re-run only if either ref or callback change.

Inside the useEffect, we have a function named 'handleClickOutside' that will run every time a mousedown event on the HTML document occurs.

Inside this function, we check:
• If ref.current exists (meaning the referenced element is mounted).
• If the click event (event.target) is not contained within the referenced element 
(!ref.current.contains(event.target as Node)).

If both conditions are met, the callback is executed.

useEffect returns a cleanup function that removes the event listener when the component using this hook unmounts. This prevents memory leaks and unexpected behavior.

We call the useOutsideClick hook on the Steps component, passing the steps container reference (stepsDivRef) and a callback function that resets the 'activeStep' state to null.


