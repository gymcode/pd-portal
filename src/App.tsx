import React, { Suspense } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import RouteList from "./routes"

type FormContext = {
  formData: {},
  setFormData: React.Dispatch<React.SetStateAction<{}>>
}

export const FormContext = React.createContext<FormContext>({
  formData: {},
  setFormData: () => { }
})

function App() {
  const [formData, setFormData] = React.useState({})
  const value = { formData, setFormData }

  console.log(formData)
  return (
    <Suspense fallback={"again"}>

      <FormContext.Provider value={value}>
        <Routes>
          {
            RouteList.map(data => (
              <>

                <Route path={data.path} element={data.element} />

              </>
            ))
          }
        </Routes>
      </FormContext.Provider>

    </Suspense >
  );
}

export default App;
