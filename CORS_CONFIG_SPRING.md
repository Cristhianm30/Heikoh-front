# Configuración CORS para Spring WebFlux

## Opción 1: Configuración Global (Recomendada)

Agrega esta clase a tu proyecto Spring WebFlux:

```java
package com.tuproyecto.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
public class CorsConfig {

    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        
        // Permitir origen de Angular (desarrollo)
        corsConfig.addAllowedOrigin("http://localhost:4200");
        
        // Permitir todos los métodos HTTP
        corsConfig.addAllowedMethod("*");
        
        // Permitir todos los headers
        corsConfig.addAllowedHeader("*");
        
        // Permitir credenciales (cookies, headers de autorización)
        corsConfig.setAllowCredentials(true);
        
        // Configurar el tiempo de cache para preflight requests
        corsConfig.setMaxAge(3600L);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);
        
        return new CorsWebFilter(source);
    }
}
```

## Opción 2: Configuración por Anotación

Si prefieres usar anotaciones, agrega esto a tu controlador:

```java
@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class AuthController {
    
    @PostMapping("/login")
    public Mono<LoginResponse> login(@RequestBody LoginRequest request) {
        // Tu lógica de login
    }
    
    @PostMapping("/register")
    public Mono<User> register(@RequestBody RegisterRequest request) {
        // Tu lógica de registro
    }
}
```

## Opción 3: Configuración en application.yml

También puedes configurar CORS en tu `application.yml`:

```yaml
spring:
  webflux:
    cors:
      allowed-origins: "http://localhost:4200"
      allowed-methods: "*"
      allowed-headers: "*"
      allow-credentials: true
      max-age: 3600
```

## ¿Qué hace cada configuración?

### `addAllowedOrigin("http://localhost:4200")`
- Permite peticiones desde tu frontend Angular
- En producción, cambia a tu dominio real

### `addAllowedMethod("*")`
- Permite todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)

### `addAllowedHeader("*")`
- Permite todos los headers HTTP
- Necesario para headers como `Authorization`, `Content-Type`, etc.

### `setAllowCredentials(true)`
- Permite enviar cookies y headers de autorización
- Necesario para tu sistema de autenticación con tokens

### `setMaxAge(3600L)`
- Cachea las respuestas de preflight por 1 hora
- Mejora el rendimiento

## Verificación

Después de agregar la configuración:

1. **Reinicia tu backend Spring**
2. **Abre las herramientas de desarrollador** (F12)
3. **Ve a la pestaña Network**
4. **Intenta hacer login**
5. **Deberías ver**: 
   - Petición OPTIONS (preflight) → 200 OK
   - Petición POST (login) → 200 OK

## Para Producción

Cuando despliegues tu aplicación, cambia:

```java
// Desarrollo
corsConfig.addAllowedOrigin("http://localhost:4200");

// Producción
corsConfig.addAllowedOrigin("https://tu-dominio.com");
```

## ¿Por qué es necesario?

Sin CORS configurado:
- ❌ Frontend no puede comunicarse con backend
- ❌ Error en consola del navegador
- ❌ Peticiones fallan

Con CORS configurado:
- ✅ Frontend puede comunicarse con backend
- ✅ Peticiones funcionan correctamente
- ✅ Sistema de autenticación funciona 