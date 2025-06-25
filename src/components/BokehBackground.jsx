// src/components/BokehBackground.jsx
import React from "react";
import "../styles/bokeh.css"; // File CSS chứa keyframes

export default function BokehBackground() {
  return <div className="bokeh-background pointer-events-none absolute inset-0 z-0" />;
}
