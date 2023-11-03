import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Upload from 'components/pages/Upload/Upload'
import Home from 'components/pages/Home/Home'
import Layout from 'components/layout/Layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='upload' element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
