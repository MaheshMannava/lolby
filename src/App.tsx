import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import React from "react";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />}>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Header 1
            </h1>
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
      <div className="w-[292px] h-[99px]"></div>
    </Suspense>
  );
}

export default App;
