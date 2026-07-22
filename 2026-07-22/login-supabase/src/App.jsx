import { useEffect, useState } from 'react'
import { supabase, hasSupabaseConfig } from './supabaseClient'
import Login from './Login'
import Productos from './Productos'
import './App.css'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    if (!hasSupabaseConfig || !supabase) {
      return
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    if (!supabase) {
      return
    }

    await supabase.auth.signOut()
    setSession(null)
  }

  if (!session) {
    return <Login onLogin={setSession} />
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Bienvenido</h1>
          <p>Has iniciado sesión correctamente con Supabase.</p>
          <p className="user-email">{session.user?.email}</p>
        </div>
        <button type="button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
      <Productos session={session} />
    </div>
  )
}

export default App
