# 1. Imagen base oficial de NGINX basada en Alpine para alta eficiencia de recursos
FROM nginx:alpine

# 2. Eliminar la configuración por defecto de NGINX
RUN rm /etc/nginx/conf.d/default.conf

# 3. Copiar nuestro archivo de configuración personalizado al contenedor
COPY nginx.conf /etc/nginx/conf.d/

# 4. Exponer el puerto 80 hacia el host/red tradicional
EXPOSE 80
