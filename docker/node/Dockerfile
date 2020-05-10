FROM node:12.16-buster

LABEL maintainer="Luis Briceño<luijo@correo.co>"
LABEL description="Docker Image for node console"

# Ejecución en tiempo real de cambios en la aplicación
RUN npm install -g nodemon

# Crear estructura básica para la aplicación
WORKDIR /app
RUN mkdir -p node_modules

# Instalación de paquetes necesarios para nuestra aplicación
COPY ./package.json /app/.
RUN npm install

# Verificar el ID del usuario
RUN id -u node

# Asignar permisos a nuestra aplicacion
RUN chown -R node:node /app
COPY --chown=node:node . .

# Establecemos usuario login
USER node

# Definición del puerto
# ENV PORT=3000
ARG PORT=80

EXPOSE $PORT/tcp

ENTRYPOINT [ "/usr/local/bin/npm" ]
CMD [ "run", "docker" ]
