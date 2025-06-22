import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import React from "react"
import PageLoader from "./components/common/PageLoader";

const HomePage = React.lazy(() => import("./pages/index"));


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<PageLoader/>}>
                <HomePage />
              </React.Suspense>
            }
          >
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
