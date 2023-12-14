import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext/AuthContext'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { GlobalStyles } from './styles/global'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
import { RegisterClient } from './pages/RegisterClient'
import { RegisterProduct } from './pages/RegisterProduct'
import { Products } from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'
import { Clients } from './pages/Clients'
import { ClientDetails } from './pages/ClientDetails'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/registerclient"
                element={
                  <RequireAuth>
                    <RegisterClient />
                  </RequireAuth>
                }
              />
              <Route
                path="/registerproduct"
                element={
                  <RequireAuth>
                    <RegisterProduct />
                  </RequireAuth>
                }
              />
              <Route
                path="/clients"
                element={
                  <RequireAuth>
                    <Clients />
                  </RequireAuth>
                }
              />
              <Route
                path="/clientdetails/:clientId"
                element={
                  <RequireAuth>
                    <ClientDetails />
                  </RequireAuth>
                }
              />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
            </Routes>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
