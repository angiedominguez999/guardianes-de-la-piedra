# Guardianes de la piedra: la ruta STEAM

Recurso Educativo Digital (RED) para estudiantes de 6.° a 9.° del Caquetá.
Incluye la expedición 3D *Senderos Amazónicos* y el Atlas 3D de especies.

Autoras: Angie Carolina Domínguez López, Amelida Peñaranda Aguirre y Lina Fernanda Aristizábal Bocanegra.
Doctorado en Educación y Cultura Ambiental · Universidad de la Amazonia.

---

## Contenido de esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El recurso completo (las 5 pantallas y la expedición). |
| `atlas/` | Fotos y mapas de profundidad del Atlas 3D. No cambies sus nombres. |
| `apps-script/Codigo.gs` | Código para guardar las respuestas en Google Sheets. |

---

## Parte 1. Publicar el recurso en GitHub Pages

1. Entra a <https://github.com> y crea una cuenta (o inicia sesión).
2. Arriba a la derecha pulsa **+ › New repository**.
   - Nombre: `guardianes-de-la-piedra`
   - Marca **Public**.
   - Pulsa **Create repository**.
3. En el repositorio nuevo, pulsa **uploading an existing file** (o **Add file › Upload files**).
4. Arrastra **todo el contenido** de esta carpeta: `index.html`, la carpeta `atlas` y la carpeta `apps-script`.
   Espera a que terminen de subir y pulsa **Commit changes**.
5. Ve a **Settings › Pages**.
   - En *Source* elige **Deploy from a branch**.
   - En *Branch* elige **main** y la carpeta **/ (root)**. Pulsa **Save**.
6. Espera uno o dos minutos y recarga. Arriba aparecerá la dirección del recurso:
   `https://TU-USUARIO.github.io/guardianes-de-la-piedra/`

Esa es la dirección que compartes con tus estudiantes.

---

## Parte 2. Guardar las respuestas en Google Sheets

GitHub Pages solo muestra páginas: no guarda datos. Por eso las respuestas se envían a una hoja de cálculo tuya en Google Drive.

1. En Google Drive crea una **Hoja de cálculo** nueva. Nómbrala, por ejemplo, *Respuestas Guardianes*.
2. En la hoja, abre **Extensiones › Apps Script**.
3. Borra el código que aparece y pega todo el contenido de `apps-script/Codigo.gs`. Pulsa **Guardar** (ícono de disquete).
4. Pulsa **Implementar › Nueva implementación**.
   - En el engranaje elige **Aplicación web**.
   - *Ejecutar como*: **Yo**.
   - *Quién tiene acceso*: **Cualquier usuario**.
   - Pulsa **Implementar** y autoriza los permisos con tu cuenta de Google
     (si aparece "Google no verificó esta app", pulsa *Configuración avanzada › Ir a…*; es tu propio código).
5. Copia la **URL de la aplicación web** (termina en `/exec`).
6. Vuelve a GitHub, abre `index.html` y pulsa el **lápiz** (Edit).
   Busca esta línea (Ctrl + F → `registro:`):

   ```js
   registro:''     // URL de la aplicación web de Google Apps Script…
   ```

   Pega tu URL entre las comillas:

   ```js
   registro:'https://script.google.com/macros/s/XXXXXXXX/exec'
   ```

7. Pulsa **Commit changes**. En uno o dos minutos la página quedará actualizada.

### Probarlo

Abre el recurso, completa la ruta hasta la pantalla 5, escribe un nombre, elige el grado y pulsa **Enviar mis respuestas**. En la hoja aparecerá una pestaña **Respuestas** con una fila por envío.

### Qué se guarda

Fecha, nombre, grado, huellas obtenidas, diagnóstico "¿Qué sé?", resultados de la expedición, textos de las estaciones S y A, registro del entrenamiento de la IA, reflexiones, dilema ético, compromisos y autoevaluación.

---

## Otros enlaces que puedes completar

En la misma parte de `index.html` (al inicio del código, en `CONFIG`) puedes pegar:

- `rutaSteam:''` → enlace al taller externo de la ruta STEAM.
- `padlet:''` → enlace al muro de Padlet.
- `video:''` → enlace al video *Lo que la piedra recuerda*.

Si un enlace queda vacío, el recurso muestra "Enlace pendiente".

---

## Sin conexión

- Una vez cargada, la página funciona sin internet, salvo la expedición 3D (la primera vez), Teachable Machine, el video y Padlet.
- Si un estudiante pulsa **Enviar** sin internet, las respuestas quedan guardadas en su dispositivo y se envían solas cuando vuelva la conexión y abra de nuevo la página.

---

## Datos personales de estudiantes

Los estudiantes son menores de edad. Antes de usar el envío de respuestas:

- Informa a las familias y a la institución qué datos se recogen y para qué (Ley 1581 de 2012).
- Pide solo nombre y grado; no agregues documentos de identidad ni datos de contacto.
- Mantén la hoja de cálculo privada (no la compartas con "cualquier persona con el enlace").

---

## Si cambias el código de Apps Script

Ve a **Implementar › Gestionar implementaciones › ✏️ Editar › Versión: Nueva versión › Implementar**. Así la URL sigue siendo la misma.

---

## Créditos

- Fotografías de especies: Wikimedia Commons (autores y licencias en la ventana *Créditos y referencias* del recurso), excepto la de la danta del Atlas, aportada por la docente.
- Relieve 3D de las fotos: mapas de profundidad calculados con el modelo de IA Depth Anything V2.
- Motor 3D: three.js.
