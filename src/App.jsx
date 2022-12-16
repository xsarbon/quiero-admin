
import { Routes, Route, HashRouter } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import Admin from './components/Admin/Admin.jsx'
import Sales from './components/Admin/Sales/Sales'
import EditProd from "./components/Admin/EditProd/EditProd"
import SubirProd from "./components/Admin/SubirProd/SubirProd"
import RefreshCat from "./components/Admin/RefreshCat/RefreshCat"
import Analitics from "./components/Admin/Analitics/Analitics"
import Categories from "./components/Admin/Categories/Categories"
import Clients from "./components/Admin/Clients/Clients"
import Log from './components/log/Log'
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { useState } from 'react'

function App({ user }) {
  return (
    <>
      <CartContextProvider>
        <HashRouter>
          <Routes >
            <Route path="/" element={<Log />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/ventas" element={<Sales />} />
            <Route path="/edit" element={<EditProd />} />
            <Route path="/subirprod" element={<SubirProd />} />
            <Route path="/refreshcat" element={<RefreshCat />} />
            <Route path="/analitics" element={<Analitics />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/clientes" element={<Clients />} />
          </Routes>
        </HashRouter>
      </CartContextProvider>
    </>
  )
}
export default App;