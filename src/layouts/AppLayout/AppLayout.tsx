import { Footer } from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const AppLayout = () => {
  return (
    <div className="min-h-[100vh] grid grid-rows-[auto,1fr,auto]">
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
