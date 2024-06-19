# **API SIPI 💻**
## _API del Sistema Integral de Prestamos e Instalación de Programas_

## Endpoints desarrollados 🚀

- Crear solicitudes (metodo POST)
- Obtener solicitudes (metodo GET)
- Obtener solicitud por id de solicitud (metodo GET)
- Actualizar solicitud por id de solicitud (metodo PUT)
- Eliminar solicitud por id de solicitud (metodo DELETE)

## Tecnología utilizada

- [node.js] - Software para servidores que permite crear un entorno de ejecución de JavaScript para crear aplicaciones del lado del servidor de forma rápida y escalable.
- [Express] - Framework que facilita la creacion de APIs y servicios web
- [MongoDB] - Base de datos NoSQL
- [Mongoose] - Libreria ODM que facilita el trabajo con MongoDB

## Instalación y ejecución
- Clonar este repositorio
- Copiar archivo .env.example y guardarlo como .env en la raiz del proyecto
- completar los datos MONGODB_URI y PORT con tus datos de configuración

Para entornos no productivos
```sh
npm install
npm run dev
```

## Desarrolladores

Cada desarrollador realizó su propio correspondiente endpoint (ruta-controlador-servicio-repositorio)

| Nombre y apellido | Endpoints desarrollados |
| ------ | ------ |
| Lucia Pereyra | Crear solicitudes |
| Luis Tang | Obtener solicitudes |
| Héctor Domínguez | Obtener solicitud por id y actualizar solicitud por id |
| Cecilia Mogro | Eliminar solicitud por id |


## Archivo endpoints.http

En la raiz del proyecto de deja un archivo **"endpoints.http"** el cual se puede utilizar para realizar pruebas con los endpoints desarrollados desde el Visual Studio Code con el plugin Client Rest instalado.

[//]: # (Enlaces de las técnologias)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [MongoDB]: <https://www.mongodb.com/>
   [Mongoose]: <https://mongoosejs.com/>