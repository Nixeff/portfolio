import { createContext, useContext, useEffect, useRef, useState } from "react";
import "../App.css";

const SlideshowContext = createContext();

export function Slideshow({ children, className, style }) {
  const [context, setContext] = useState({
    items: [],
    edge: false
  });

  const moveSlide = (direction) => {
    if (context.items.length > 1) {
      const newItems = [...context.items];
      if (direction === "next") {
        const head = newItems.shift();
        newItems.push(head);
      } else if (direction === "prev") {
        const tail = newItems.pop();
        newItems.unshift(tail);
      }
      setContext({ ...context, items: newItems });
    }
  };

  console.log(context.items);

  return (
    <div id="slideShowBody">
      <button onClick={() => moveSlide("prev")}>prev</button>
      <SlideshowContext.Provider value={[context, setContext]}>
        <div id="slideShowBodyBody">
          {children}
        </div>
      </SlideshowContext.Provider>
      <button onClick={() => moveSlide("next")}>next</button>
    </div>
  );
}

export function SlideshowItem({ children }) {
  const name = useRef(`${performance.now()}_${Math.random()}`);
  const [context] = useContext(SlideshowContext);
  const [stage, setStage] = useState("ready");

  useEffect(() => {
    context.items.push(name.current);
    return () => {
      const index = context.items.indexOf(name.current);
      context.items.splice(index, 1);
    };
  }, []);

  useEffect(() => {
    const activeName = context.items[0];
    if (activeName === name.current) {
      setStage("on");
    }
    if (activeName !== name.current && stage === "on") {
      setStage("off");
    }
    if (activeName !== name.current && stage === "off") {
      setStage("ready");
    }
  }, [context]);

  let left = 0;
  let zIndex = 0;
  switch (stage) {
    case "ready":
      left = "100%";
      break;
    case "on":
      left = "0";
      zIndex = 1;
      break;
    case "off":
      zIndex = 0;
      break;
    default:
  }

  return (
    <div id="innerItem">
      {children}
    </div>
  );
}