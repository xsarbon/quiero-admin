
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
import Log from '../src/components/Admin/log/Log'
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Filter from './components/Admin/Sales/Filter/Filter'


function App() {
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
            
            <Route path="/ventas" element={
              <ProtectedRoute>
                <Sales />
              </ProtectedRoute>
            } />

            <Route path="/ventas/:id" element={
              <ProtectedRoute>
                <Filter />
              </ProtectedRoute>
            } />
            
            <Route path="/edit" element={
              <ProtectedRoute>
                <EditProd />
              </ProtectedRoute>
            } />
            <Route path="/subirprod" element={
              <ProtectedRoute>
                <SubirProd />
              </ProtectedRoute>
            } />
            <Route path="/refreshcat" element={
              <ProtectedRoute>
                <RefreshCat />
              </ProtectedRoute>
            } />
            <Route path="/analitics" element={
              <ProtectedRoute>
                <Analitics />
              </ProtectedRoute>
            } />
            <Route path="/categories" element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            } />
            <Route path="/clientes" element={
              <ProtectedRoute>
                <Clients />
              </ProtectedRoute>
            } />
          </Routes>
        </HashRouter>
      </CartContextProvider>
    </>
  )
}
export default App;