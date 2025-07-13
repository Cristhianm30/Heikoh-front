# Sistema de Autenticación Angular

Este sistema de autenticación incluye login, registro, manejo de tokens y protección de rutas.

## Características

- ✅ **Login** con username y password
- ✅ **Registro** con username, email y password
- ✅ **Manejo automático de tokens** con interceptor HTTP
- ✅ **Protección de rutas** con guards
- ✅ **Persistencia de sesión** en localStorage
- ✅ **Validaciones de formularios** reactivos
- ✅ **UI moderna y responsive**
- ✅ **Manejo de errores** y mensajes de éxito

## Estructura del Proyecto

```
src/app/
├── features/
│   ├── auth/
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   ├── login.ts
│   │   │   │   ├── login.html
│   │   │   │   └── login.scss
│   │   │   └── register/
│   │   │       ├── register.ts
│   │   │       ├── register.html
│   │   │       └── register.scss
│   │   └── services/
│   │       └── auth.ts
│   └── dashboard/
│       └── dashboard.ts
├── core/
│   ├── guards/
│   │   ├── auth.guard.ts
│   │   └── no-auth.guard.ts
│   └── interceptors/
│       └── auth.interceptor.ts
└── app-module.ts
```

## Configuración del Backend

### Endpoints Requeridos

1. **Registro** - `POST /api/auth/register`
   ```json
   {
     "username": "string",
     "email": "string", 
     "password": "string"
   }
   ```
   Respuesta:
   ```json
   {
     "id": 16,
     "username": "TestUser1",
     "email": "hi.cristhian@gmail.com",
     "enabled": true,
     "role": "ROLE_USER",
     "createdAt": "2025-07-13T13:28:50.6490373",
     "updatedAt": "2025-07-13T13:28:50.6490373"
   }
   ```

2. **Login** - `POST /api/auth/login`
   ```json
   {
     "username": "string",
     "password": "string"
   }
   ```
   Respuesta:
   ```json
   {
     "id": 2,
     "username": "Cristhianm30",
     "email": "Cristhian@example.com",
     "enabled": true,
     "role": "ROLE_ADMIN",
     "token": "eyJhbGciOiJIUzI1NiJ9..."
   }
   ```

## Configuración

### 1. URL del Backend

Edita la URL del backend en `src/app/features/auth/services/auth.ts`:

```typescript
private apiUrl = 'http://localhost:8080/api'; // Ajusta según tu backend
```

### 2. Rutas Protegidas

Las rutas están configuradas en `src/app/app-routing-module.ts`:

- `/login` - Solo accesible si NO estás autenticado
- `/register` - Solo accesible si NO estás autenticado  
- `/dashboard` - Solo accesible si estás autenticado
- `/` - Redirige a `/dashboard`

## Uso

### Login
1. Navega a `/login`
2. Ingresa username y password
3. Al hacer login exitoso, serás redirigido a `/dashboard`

### Registro
1. Navega a `/register`
2. Completa el formulario con username, email y password
3. Al registrarte exitosamente, serás redirigido a `/login`

### Dashboard
- Muestra información del usuario autenticado
- Botón para cerrar sesión
- Solo accesible si estás autenticado

## Funcionalidades del Servicio de Auth

```typescript
// Login
authService.login({username, password})

// Registro  
authService.register({username, email, password})

// Logout
authService.logout()

// Verificar autenticación
authService.isAuthenticated()

// Obtener usuario actual
authService.getCurrentUser()

// Obtener token
authService.getToken()

// Verificar si es admin
authService.isAdmin()
```

## Interceptor HTTP

El `AuthInterceptor` automáticamente agrega el token Bearer a todas las peticiones HTTP:

```typescript
Authorization: Bearer <token>
```

## Guards

- **AuthGuard**: Protege rutas que requieren autenticación
- **NoAuthGuard**: Protege rutas que solo deben ser accesibles si NO estás autenticado

## Persistencia

- El token se guarda en `localStorage` como `auth_token`
- La información del usuario se guarda en `localStorage` como `current_user`
- Al recargar la página, la sesión se mantiene automáticamente

## Validaciones

### Login
- Username: requerido, mínimo 3 caracteres
- Password: requerido, mínimo 6 caracteres

### Registro  
- Username: requerido, mínimo 3 caracteres
- Email: requerido, formato válido
- Password: requerido, mínimo 6 caracteres
- Confirm Password: debe coincidir con password

## Estilos

Los componentes usan SCSS con:
- Diseño responsive
- Gradientes modernos
- Animaciones suaves
- Estados de hover y focus
- Mensajes de error y éxito estilizados

## Próximos Pasos

1. Ajusta la URL del backend en el servicio de auth
2. Configura CORS en tu backend si es necesario
3. Personaliza los estilos según tu diseño
4. Agrega más validaciones si es necesario
5. Implementa refresh tokens si tu backend los soporta 