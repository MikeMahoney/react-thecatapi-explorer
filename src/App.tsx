import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Upload from 'components/pages/Upload/Upload'
import Home from 'components/pages/Home/Home'
import AppLayout from 'components/layout/AppLayout/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='upload' element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
