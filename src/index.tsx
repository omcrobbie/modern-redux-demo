// eslint-disable-next-line spaced-comment
/// <reference types="react-dom/experimental" />

// import { unstable_createRoot as createRoot } from 'react-dom';
import { createRoot } from "react-dom/client";

import App from "./App";

const ele = document.getElementById("app");
if (!ele) throw new Error("no app");
createRoot(ele).render(<App />);
