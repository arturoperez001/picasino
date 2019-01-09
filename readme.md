
Estructura:

- Public:       Esta carpeta solo contendra las plantillas de estilos de la pagina
- api:          Aqui solo se contendra los apis de la pagina, solo se permiten metodos para agregar, buscar, eliminar                  o updatear en la base de datos. Aqui no puede ir nada que envie una 
- Views:        Aqui se colocaran las vistas de la pagina.
- Config:       Se guardan las configuracion de la base de datos, puertos, conexiones a la base de datos, etc.
- app.js:       main.
- routes.js:    Archivo principal de rutas, cualquier api nuevo debe referirse aqui. De la misma forma la vistas deben                 ser referidas aqui.

TODO List
- Ignorar la carpeta de public
- Eliminar models, routes, srvices y server. Cambiar la estructura a las carpetas correspondientes.
- crear vistas par loguear y creacion de usuario.
- Cazar y eleminar todo el codigo php en las vistas.
- cargar opciones habiles en la vistas
