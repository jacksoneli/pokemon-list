import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  )
}

export default App
