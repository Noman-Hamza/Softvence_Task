import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<LoginPage />} />
              <Route exact path='/dasbroad' element={<HomePage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
