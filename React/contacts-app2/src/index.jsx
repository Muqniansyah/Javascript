// import react
import React from "react";
// import react dom untuk buat root
import { createRoot } from "react-dom/client";
// import react component
import ContactApp from "./components/ContactApp";
// import styling
import "./styles/style.css";

// buat root
const root = createRoot(document.getElementById("root"));

// render react element
root.render(<ContactApp />);
