import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

// v17γΎγ§
//ReactDOM.render(<App />,document.getElementByID("root"));

// v18γγ
const root = createRoot(document.getElementById("root"));
root.render(<App />);
