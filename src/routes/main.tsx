import React from 'react'

// importing pages 
const LandingPage = React.lazy(()=> import("../pages/landingPage"));
const RegistrationPage = React.lazy(()=> import("../pages/Registration"))

const Routes = [
    {id: 1, path: "/", name: "LandingPage", element: <LandingPage/>},
    {id: 2, path: "/register/*", name: "Register", element: <RegistrationPage/>}
]

export default Routes