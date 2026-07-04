# 1. Utilizar una imagen base ligera de Node.js basada en Alpine Linux para optimizar recursos
FROM node:20-alpine

# 2. Definir el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiar los archivos de dependencias primero (aprovechamiento del sistema de capas de Docker)
COPY package*.json ./

# 4. Instalar solo las dependencias necesarias para producción
RUN npm install --only=production

# 5. Copiar el resto del código fuente de la aplicación
COPY . .

# 6. Declarar el puerto en el que escucha la aplicación de manera informativa
EXPOSE 3000

# 7. Comando de ejecución por defecto al iniciar el contenedor
CMD ["node", "server.js"]
