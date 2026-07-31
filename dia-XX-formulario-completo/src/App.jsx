import { useEffect, useState } from 'react'
import './App.css'

const LANGUAGES = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'python', label: 'Python' },
  { id: 'java', label: 'Java' },
  { id: 'csharp', label: 'C#' },
]

const COUNTRIES = [
  { value: '', label: 'Selecciona un país' },
  { value: 'mexico', label: 'México' },
  { value: 'colombia', label: 'Colombia' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'espana', label: 'España' },
  { value: 'otros', label: 'Otros' },
]

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [experience, setExperience] = useState(5)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [languages, setLanguages] = useState(
    LANGUAGES.reduce((acc, lang) => ({ ...acc, [lang.id]: false }), {}),
  )
  const [mode, setMode] = useState('presencial')
  const [country, setCountry] = useState('')
  const [comments, setComments] = useState('')
  const [photo, setPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [color, setColor] = useState('#8b5cf6')
  const [submittedData, setSubmittedData] = useState(null)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const emailValid = emailRegex.test(email)
  const ageValid = age === '' || Number(age) > 0

  useEffect(() => {
    if (!photo) {
      setPhotoPreview(null)
      return undefined
    }

    const objectUrl = URL.createObjectURL(photo)
    setPhotoPreview(objectUrl)

    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [photo])

  const handleLanguageChange = (event) => {
    const { name, checked } = event.target
    setLanguages((prev) => ({ ...prev, [name]: checked }))
  }

  const handleFileChange = (event) => {
    setPhoto(event.target.files?.[0] ?? null)
  }

  const handleAgeChange = (event) => {
    const nextValue = event.target.value.replace(/\D/g, '')
    setAge(nextValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const selectedLanguages = LANGUAGES.filter((lang) => languages[lang.id]).map(
      (lang) => lang.label,
    )

    setSubmittedData({
      name,
      email,
      password,
      age,
      birthdate,
      experience,
      acceptedTerms,
      selectedLanguages,
      mode,
      country,
      comments,
      photoName: photo?.name ?? 'Sin foto',
      color,
    })
  }

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Registro de estudiante</h1>
        <p>Llena todos los campos y envía el formulario para ver el resumen.</p>
      </header>

      <form className="student-form" onSubmit={handleSubmit} noValidate>
        <div className="field-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="correo@ejemplo.com"
            required
          />
          {!emailValid && email.length > 0 && (
            <p className="input-error">Ingresa un correo con formato válido.</p>
          )}
        </div>

        <div className="field-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Contraseña segura"
            autoComplete="current-password"
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="age">Edad</label>
          <input
            id="age"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            min="1"
            value={age}
            onChange={handleAgeChange}
            placeholder="18"
          />
          {!ageValid && <p className="input-error">La edad debe ser mayor a 0.</p>}
        </div>

        <div className="field-group">
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <input
            id="birthdate"
            type="date"
            value={birthdate}
            onChange={(event) => setBirthdate(event.target.value)}
          />
        </div>

        <div className="field-group range-group">
          <label htmlFor="experience">Nivel de experiencia</label>
          <div className="range-control">
            <input
              id="experience"
              type="range"
              min="1"
              max="10"
              value={experience}
              onChange={(event) => setExperience(Number(event.target.value))}
            />
            <span>{experience}</span>
          </div>
        </div>

        <fieldset className="fieldset-group">
          <legend>Aceptar términos</legend>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
            />
            Acepto los términos y condiciones
          </label>
        </fieldset>

        <fieldset className="fieldset-group">
          <legend>Lenguajes que conoces</legend>
          <div className="checkbox-list">
            {LANGUAGES.map((lang) => (
              <label key={lang.id} className="checkbox-label">
                <input
                  type="checkbox"
                  name={lang.id}
                  checked={languages[lang.id]}
                  onChange={handleLanguageChange}
                />
                {lang.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="fieldset-group">
          <legend>Modalidad</legend>
          <label className="radio-label">
            <input
              type="radio"
              name="mode"
              value="presencial"
              checked={mode === 'presencial'}
              onChange={(event) => setMode(event.target.value)}
            />
            Presencial
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="mode"
              value="virtual"
              checked={mode === 'virtual'}
              onChange={(event) => setMode(event.target.value)}
            />
            Virtual
          </label>
        </fieldset>

        <div className="field-group">
          <label htmlFor="country">País</label>
          <select
            id="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            {COUNTRIES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field-group">
          <label htmlFor="comments">Comentarios</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            rows="4"
            placeholder="Escribe alguna observación"
          />
        </div>

        <div className="field-group">
          <label htmlFor="photo">Foto de perfil</label>
          <input id="photo" type="file" accept="image/*" onChange={handleFileChange} />
          {photoPreview && (
            <div className="photo-preview">
              <img src={photoPreview} alt="Vista previa" />
            </div>
          )}
        </div>

        <div className="field-group">
          <label htmlFor="color">Color favorito</label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <span className="color-value">{color}</span>
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={!acceptedTerms || !emailValid || !ageValid}
        >
          Enviar
        </button>
      </form>

      {submittedData && (
        <section className="summary-card">
          <h2>Resumen de registro</h2>
          <ul>
            <li>
              <strong>Nombre:</strong> {submittedData.name || 'No ingresado'}
            </li>
            <li>
              <strong>Correo:</strong> {submittedData.email}
            </li>
            <li>
              <strong>Contraseña:</strong> {submittedData.password ? '********' : 'No ingresada'}
            </li>
            <li>
              <strong>Edad:</strong> {submittedData.age || 'No ingresada'}
            </li>
            <li>
              <strong>Fecha de nacimiento:</strong> {submittedData.birthdate || 'No ingresada'}
            </li>
            <li>
              <strong>Experiencia:</strong> {submittedData.experience}
            </li>
            <li>
              <strong>Términos aceptados:</strong>{' '}
              {submittedData.acceptedTerms ? 'Sí' : 'No'}
            </li>
            <li>
              <strong>Lenguajes:</strong>{' '}
              {submittedData.selectedLanguages.length > 0
                ? submittedData.selectedLanguages.join(', ')
                : 'Ninguno'}
            </li>
            <li>
              <strong>Modalidad:</strong> {submittedData.mode}
            </li>
            <li>
              <strong>País:</strong> {submittedData.country || 'No seleccionado'}
            </li>
            <li>
              <strong>Comentarios:</strong> {submittedData.comments || 'Sin comentarios'}
            </li>
            <li>
              <strong>Foto:</strong> {submittedData.photoName}
            </li>
            <li>
              <strong>Color favorito:</strong>{' '}
              <span className="color-badge" style={{ background: submittedData.color }}>
                {submittedData.color}
              </span>
            </li>
          </ul>
        </section>
      )}
    </main>
  )
}

export default App
