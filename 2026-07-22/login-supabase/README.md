# Login y CRUD de productos con Supabase + React + Vite

Este proyecto contiene:

- login con Supabase Auth
- registro de usuarios
- cierre de sesión
- CRUD de productos para usuarios autenticados

## 1. Instalar dependencias

```bash
npm install
```

## 2. Configurar Supabase

Edita el archivo `.env` y agrega tus credenciales reales:

```env
VITE_SUPABASE_URL=tu_project_url_aqui
VITE_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

## 3. Crear la tabla `productos` en Supabase

Ejecuta este SQL en el SQL Editor de Supabase:

```sql
create table if not exists productos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) default auth.uid(),
  nombre text not null,
  descripcion text,
  precio numeric not null default 0,
  created_at timestamp with time zone default now()
);
```

Luego activa RLS y crea estas políticas:

```sql
create policy "Los usuarios pueden ver sus propios productos"
on productos for select
using (auth.uid() = user_id);

create policy "Los usuarios pueden crear sus propios productos"
on productos for insert
with check (auth.uid() = user_id);

create policy "Los usuarios pueden editar sus propios productos"
on productos for update
using (auth.uid() = user_id);

create policy "Los usuarios pueden eliminar sus propios productos"
on productos for delete
using (auth.uid() = user_id);
```

## 4. Ejecutar la app

```bash
npm run dev -- --host 0.0.0.0
```

## 5. Probar el flujo

1. Regístrate o inicia sesión.
2. Crea un producto.
3. Edita y elimina productos.
4. Prueba con dos usuarios distintos para verificar que cada uno ve solo sus propios productos.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
