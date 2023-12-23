import { AppLayout } from './layouts/AppLayout/AppLayout'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from './routes/routesConfig'
import { Toaster } from 'react-hot-toast'

const App = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timerId = setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 5000)

    timerId

    return () => clearTimeout(timerId)
  }, [])

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          {routesConfig.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'black',
            color: 'white',
            maxWidth: '200px',
            width: '100%',
          },
        }}
      />
    </>
  )
}

export default App
