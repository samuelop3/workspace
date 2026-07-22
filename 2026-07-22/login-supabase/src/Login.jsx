import { useState } from 'react'
import { supabase, hasSupabaseConfig } from './supabaseClient'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setSuccessMsg('')

    if (!hasSupabaseConfig || !supabase) {
      setErrorMsg('Agrega VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en el archivo .env para usar el login real.')
      return
    }

    setLoading(true)

    const { data, error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password })

    setLoading(false)

    if (error) {
      setErrorMsg(error.message)
      return
    }

    if (data.session) {
      onLogin(data.session)
    } else if (isSignUp) {
      setSuccessMsg('Revisa tu correo para confirmar la cuenta si la confirmación está activada.')
    }
  }

  return (
    <div className="auth-card">
      <h2>{isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}</h2>
      <p className="auth-subtitle">
        {isSignUp
          ? 'Registra un usuario con Supabase y accede a la sesión.'
          : 'Ingresa con tu correo y contraseña para entrar.'}
      </p>

      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </label>

        {errorMsg ? <p className="message error">{errorMsg}</p> : null}
        {successMsg ? <p className="message success">{successMsg}</p> : null}

        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : isSignUp ? 'Registrarme' : 'Entrar'}
        </button>
      </form>

      <button type="button" className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
      </button>
    </div>
  )
}
