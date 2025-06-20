import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Index } from './pages/index'
import { About } from './pages/about'
import { Cast } from './pages/cast'
import { KowairoInfo } from './pages/kowairo_info'

import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/kowairo" element={<KowairoInfo />} />
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
