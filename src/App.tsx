import React, {Suspense} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import RouteList from "./routes"

function App() {
  return (
    <Suspense fallback={"again"}>
      <Routes>
        {
          RouteList.map(data => (
            <>
              {/* <React.Suspense fallback={"loading"}> */}
                <Route path={data.path} element={data.element} />
              {/* </React.Suspense> */}
            </>
          ))
        }
      </Routes>
    </Suspense>
  );
}

export default App;
