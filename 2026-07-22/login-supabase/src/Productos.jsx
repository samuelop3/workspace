import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export default function Productos({ session }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [formError, setFormError] = useState('')

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [editingId, setEditingId] = useState(null)

  const cargarProductos = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('productos')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setErrorMsg(error.message)
    } else {
      setProductos(data || [])
    }

    setLoading(false)
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  const limpiarFormulario = () => {
    setNombre('')
    setDescripcion('')
    setPrecio('')
    setEditingId(null)
    setFormError('')
  }

  const validarFormulario = () => {
    if (!nombre.trim()) {
      setFormError('El nombre es obligatorio.')
      return false
    }

    if (!precio || Number(precio) < 0) {
      setFormError('El precio debe ser mayor o igual a 0.')
      return false
    }

    setFormError('')
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setSuccessMsg('')

    if (!validarFormulario()) {
      return
    }

    if (editingId) {
      const { error } = await supabase
        .from('productos')
        .update({ nombre, descripcion, precio: Number(precio) })
        .eq('id', editingId)

      if (error) {
        setErrorMsg(error.message)
        return
      }

      setSuccessMsg('Producto actualizado correctamente.')
    } else {
      const { error } = await supabase.from('productos').insert({
        nombre,
        descripcion,
        precio: Number(precio),
        user_id: session.user.id,
      })

      if (error) {
        setErrorMsg(error.message)
        return
      }

      setSuccessMsg('Producto creado correctamente.')
    }

    limpiarFormulario()
    cargarProductos()
  }

  const handleEditar = (producto) => {
    setEditingId(producto.id)
    setNombre(producto.nombre)
    setDescripcion(producto.descripcion || '')
    setPrecio(producto.precio)
    setFormError('')
    setSuccessMsg('')
  }

  const handleEliminar = async (id) => {
    const confirmar = window.confirm('¿Seguro que deseas eliminar este producto?')
    if (!confirmar) return

    const { error } = await supabase.from('productos').delete().eq('id', id)

    if (error) {
      setErrorMsg(error.message)
      return
    }

    cargarProductos()
  }

  return (
    <div className="products-card">
      <div className="products-header">
        <div>
          <h2>Mis productos</h2>
          <p className="products-subtitle">Gestiona tus productos con operaciones CRUD.</p>
        </div>
        <span className="products-badge">{productos.length} registros</span>
      </div>

      <form onSubmit={handleSubmit} className="products-form">
        <label>
          Nombre
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>

        <label>
          Descripción
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </label>

        <label>
          Precio
          <input
            type="number"
            step="0.01"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </label>

        {formError ? <p className="message error">{formError}</p> : null}
        {errorMsg ? <p className="message error">{errorMsg}</p> : null}
        {successMsg ? <p className="message success">{successMsg}</p> : null}

        <div className="actions-row">
          <button type="submit">
            {editingId ? 'Guardar cambios' : 'Crear producto'}
          </button>
          {editingId ? (
            <button type="button" className="secondary-button" onClick={limpiarFormulario}>
              Cancelar
            </button>
          ) : null}
        </div>
      </form>

      {loading ? (
        <p>Cargando productos...</p>
      ) : productos.length === 0 ? (
        <p>Aún no tienes productos registrados.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion || '—'}</td>
                  <td>${Number(producto.precio).toFixed(2)}</td>
                  <td>
                    <div className="inline-actions">
                      <button type="button" onClick={() => handleEditar(producto)}>
                        Editar
                      </button>
                      <button type="button" className="danger-button" onClick={() => handleEliminar(producto.id)}>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
