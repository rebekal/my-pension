import React from "react";
import MyPensionPage from "./pages/MyPensionPage";
import "./App.css";
import { CURRENT_USER } from "./data/dummyUsers";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <MyPensionPage user={CURRENT_USER} />
      </div>
    </div>
  );
}

export default App;
