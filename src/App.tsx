import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Index } from './pages/index'
import { About } from './pages/about'
import { Cast } from './pages/cast'

import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/cast" element={<Cast />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
