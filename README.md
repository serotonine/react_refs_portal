# React Refs & Portals

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836236#overview

## useRef hook

Reference a component || tag || variable.
return ALWAYS an object with all the component || tag props (includes the native one)

- !! a useRef() change do not re-evaluate the app != useState()
- but you can use useRef to update a useState()

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836296#overview

## forwardRef function

To forward the ref on component level

```
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {}
```

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836360#questions

## useImperativeHandle

To add inner function at componant level.
E.g instead of calling straight showModal() in the App level.

```
useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
```

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836376#questions

## Portals

Tell the app to place the component in another place in the DOM.

```
import { createPortal } from "react-dom";
return createPortal( DOM elements, index.html DOM element where to insert => document.getElementByID('modal'));

```

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836418#questions
