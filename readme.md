
Para iniciar este proyecto es necesario primero instalar el cliente de mongo db. Despues es necesario intalar todas las dependencias con npm install, una vez instaladas las dependencias 
y luego npm start. Inicialmente el sistema generara un usuario de prueba (user: test@example.com , pass:test ), y un usuario de administrador (user: admin@example.com, pass: admin).
Programa de administracion de colacion. El backend esta elaborado con node.js, usa la libreria de express para el manejo de las rutas y el uso de middleware entre cada llamado de las API.
Para el control de las vistas usa la libreria de ejs. Usa una base de datos de mongo, para conectarse usa la libreria de mongoose. 
Hasta el momento solo las API de usuarios estan funcionando, las vistas para ingresar a una cuenta y crear un usuario estan funcionando. Las vistas de login y creacion estan guardando tokens 
de verificacion de usuarios. 

TODO List
- Redirigir la pagina de inicio al login si la cuenta no esta auntentificada
- Ignorar la carpeta de public
- Eliminar models, routes, srvices y server. Cambiar la estructura a las carpetas correspondientes.
- crear vistas par loguear y creacion de usuario.
- Cazar y eleminar todo el codigo php en las vistas.
- cargar opciones habiles en la vistas

Estructura:

- Public:       Esta carpeta solo contendra las plantillas de estilos de la pagina
- api:          Aqui solo se contendra los apis de la pagina, solo se permiten metodos para agregar, buscar, eliminar                  
				o updatear en la base de datos. Aqui no puede ir nada que envie una 
- Views:        Aqui se colocaran las vistas de la pagina.
- Config:       Se guardan las configuracion de la base de datos, puertos, conexiones a la base de datos, etc.
- app.js:       main.
- routes.js:    Archivo principal de rutas, cualquier api nuevo debe referirse aqui. De la misma forma la vistas deben                 
				ser referidas aqui.

API:
- api/users get: Ver todos los usuarios en la base de datos 
 requiere: token

- api/users/me get: Ver propiedades del cliente 
 require: token
 optional : none

-api/users post: Crear un nuevo usuario 
 require: email, nombre, last, password
 optional: none


- api/users/:id get: ver las propiedades de un usuario
 require: email, nombre, last, password
 optional: none

- api/users/:id delete: Elimina un usuario en la base de datos
 requiere: token


- api/users/:id/password Cambia la contrasenna del usuario
 requiere: token

rutas:
- login: La pagina para iniciar una session en la pagina.
- signup: La pagina para crear un usuario nuevo.

