## Proyecto: Ejemplo CI/CD con Node.js

Este proyecto es una librería simple desarrollada en Node.js, creada con el propósito de demostrar un pipeline básico de CI/CD usando GitHub Actions. El proyecto incluye código fuente, pruebas unitarias y un workflow que ejecuta pruebas y genera un paquete .tgz.

## Estructura del Proyecto
.
├── src/
│   └── index.js
├── test/
│   └── index.test.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
└── README.md

## Contenido del Proyecto
 ## 1. src/index.js

Contiene las funciones principales de la librería:

sum(a, b) – Suma dos números.

multiply(a, b) – Multiplica dos números.

isEven(n) – Verifica si un número es par.

 ## 2. test/index.test.js

Incluye pruebas unitarias usando Jest, que validan:

Suma correcta

Multiplicación correcta

Verificación de número par

Verificación de número impar

 ## 3. package.json

Archivo de configuración del proyecto, contiene:

Nombre y versión del paquete

Scripts (test, build)

Dependencias de desarrollo

Punto de entrada del proyecto

 ## 4. Workflow de GitHub Actions – .github/workflows/ci.yml

Archivo YAML que ejecuta automáticamente:

Instalación de dependencias

Ejecución de pruebas

Construcción del paquete con npm pack

Subida del artefacto generado

 ## 5. Artefacto generado

El pipeline produce un archivo .tgz que contiene el paquete listo para ser distribuido o publicado.

## Scripts principales
npm test   # Ejecuta pruebas unitarias
npm run build   # Construye el paquete .tgz