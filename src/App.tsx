import { Route, Routes } from "react-router-dom"
import "./globals.css"
import { SignInForm } from "./auth/forms/SignInForm"
import { Home } from "./root/pages/Home"
import { SignUpForm } from "./auth/forms/SignUpForm"
import { AuthLayout } from "./auth/AuthLayout"
import { RootLayout } from "./root/RootLayout"

function App() {
  return (
    <main className="flex h-screen">
      <Routes >

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main >
  )
}

export default App
