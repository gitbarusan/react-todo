import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

// v17まで
//ReactDOM.render(<App />,document.getElementByID("root"));

// v18から
const root = createRoot(document.getElementById("root"));
root.render(<App />);
