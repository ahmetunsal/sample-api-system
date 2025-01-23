import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/main/Home'
import DocsLayout from './pages/docs/DocsLayout'
import DocumentPage from './pages/docs/DocumentPage'
import { DocumentProvider } from './context/DocumentProvider'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="docs" element={<DocsLayout />}>
          <Route path=':slug' element={<DocumentPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
