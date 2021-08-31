import React from "react";
import ReactDOM from "react-dom";

// import { MemoHook } from "./components/06-memo/MemoHook";
// import { Memorize } from "./components/06-memo/Memorize";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import MultipleCustomHooks from "./components/03-examples/MultipleCustomHooks";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
// import CounterApp from "./components/01-useState/Counter-app";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
// import HookApp from "./HookApp";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { RealExampleRef } from "./components/04-useRef/RealExampleRef";
// import { LayoutEffect } from "./components/05-useLayoutEffect/LayoutEffect";
// import { CallbackHook } from "./components/06-memo/CallbackHook";
// import { Padre } from "./components/07-tarea-memo/Padre";
import { TodoApp } from "./components/08-useReducer/TodoApp";

ReactDOM.render(<TodoApp />, document.getElementById("root"));
