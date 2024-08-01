import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage"


export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="auth" element={<AuthPage/>} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}
