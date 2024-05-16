# Delifit Dashboard Admin

Breve descripción del proyecto.

## Instalación

1. Clona el repositorio y abrelo con VSCode.

```bash
  git clone <url del repositorio>
  cd <nombre del repositorio>
  code ./
```

2. Ejecuta `npm install` para instalar las dependencias.

```bash
  npm i
```

3. Agregar el archivo `.local.env`.

```.local.env
  #credenciales de la base de datos
  DB_HOST=<string>
  DB_NAME=<string>
  DB_USER=<string>
  DB_PASS=<string>
  DB_PORT=<number>
```

4. En modo desarrollo puede ejecutar.

```bash
  npm run dev
```

5. Abre tu navegador y visita `http://localhost:3000`.

## Uso

1. Ejecuta `npm start` para iniciar la aplicación.
2. Abre tu navegador y visita `http://localhost:3000`.

## Contribución

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube los cambios a tu repositorio fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request para que tus cambios sean revisados.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
