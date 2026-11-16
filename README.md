# Pokédex Evolutiva – Explorador de Pokémon

Aplicación web interactiva desarrollada con **Angular 22 y TypeScript** que permite consultar información de Pokémon, explorar sus cadenas evolutivas y comparar estadísticas entre diferentes Pokémon utilizando la API pública **PokéAPI**.

La aplicación integra tres endpoints diferentes de PokéAPI y utiliza los datos obtenidos para desarrollar funcionalidades de búsqueda, navegación, visualización de evoluciones y comparación de características.

**Práctica 02 – Desarrollo de una aplicación web interactiva con Angular y PokéAPI.**

**Universidad:** Universidad Politécnica Salesiana  
**Carrera:** Computación  
**Asignatura:** Programación y Plataformas Web  
**Práctica:** 02

---

## 1. Objetivo del proyecto

Desarrollar una aplicación web interactiva que permita consultar información de Pokémon mediante Angular, utilizando tres tipos de recursos diferentes de PokéAPI.

La aplicación busca facilitar la exploración de Pokémon y sus características, permitiendo conocer sus estadísticas, habilidades, información de especie y relaciones evolutivas.

También permite comparar las estadísticas de dos Pokémon para identificar cuál presenta valores superiores.

El proyecto utiliza componentes, servicios, interfaces TypeScript, funciones, eventos y solicitudes HTTP, sin necesidad de implementar un backend propio ni una base de datos.

## 2. Funcionalidades principales

### 2.1. Búsqueda de Pokémon

- Buscar Pokémon utilizando su nombre o número de identificación.
- Visualizar información obtenida directamente desde PokéAPI.
- Consultar Pokémon mediante botones de navegación.
- Acceder a un Pokémon aleatorio.
- Mostrar mensajes cuando el nombre ingresado es incorrecto o el Pokémon no existe.

### 2.2. Ficha informativa

La aplicación presenta una ficha con los siguientes datos:

- Nombre y número del Pokémon.
- Imagen oficial, cuando está disponible.
- Tipos del Pokémon.
- Categoría de especie.
- Descripción en español, cuando está disponible en PokéAPI.
- Hábitat.
- Altura en metros.
- Peso en kilogramos.
- Estadísticas base.
- Total de estadísticas.
- Habilidades normales y ocultas.
- Identificación de Pokémon legendarios o míticos.

Estos datos se obtienen de los endpoints `/pokemon` y `/pokemon-species`.

### 2.3. Cadena evolutiva

La aplicación permite explorar las diferentes etapas de evolución de un Pokémon.

Sus funciones incluyen:

- Consultar la familia evolutiva.
- Mostrar las diferentes etapas de evolución.
- Representar evoluciones ramificadas.
- Mostrar un requisito principal de evolución cuando está disponible.
- Seleccionar una evolución para consultar su ficha.
- Informar cuando un Pokémon no presenta evoluciones adicionales.

La información se obtiene principalmente del endpoint `/evolution-chain`.

Los requisitos presentados son una versión resumida de los datos disponibles en PokéAPI y no necesariamente incluyen todas las condiciones de evolución.

### 2.4. Comparación de Pokémon

La aplicación dispone de una función que permite comparar las características de dos Pokémon.

El usuario puede seleccionar un Pokémon principal y buscar otro para realizar la comparación.

Se presenta:

- Nombre de ambos Pokémon.
- Tabla de estadísticas base.
- Comparación de los valores de cada estadística.
- Identificación de las estadísticas superiores.
- Total de estadísticas de cada Pokémon.
- Mensaje que indica cuál tiene un mayor total de estadísticas base.

Esta función permite utilizar los datos obtenidos de PokéAPI en una comparación real, en lugar de mostrar únicamente información individual.

### 2.5. Interacción y validaciones

La aplicación incluye:

- Campos de búsqueda.
- Botones de navegación.
- Eventos de usuario.
- Selección de evoluciones.
- Comparación entre Pokémon.
- Actualización dinámica de los datos mostrados.
- Mensajes de carga.
- Mensajes de error en las consultas.

## 3. Endpoints de PokéAPI utilizados

La aplicación consume tres tipos diferentes de recursos de la API REST pública de Pokémon.

**URL principal:** https://pokeapi.co/api/v2/

### 3.1. Endpoint Pokémon

**Recurso:** `GET /pokemon/{nombre_o_id}`

**Ejemplo:**

https://pokeapi.co/api/v2/pokemon/pikachu

Este endpoint permite obtener información general del Pokémon, incluyendo:

- Identificador.
- Nombre.
- Imagen.
- Tipos.
- Altura.
- Peso.
- Estadísticas.
- Habilidades.

**Uso en la aplicación:**

Los datos se utilizan para mostrar la ficha informativa y realizar las comparaciones de estadísticas entre dos Pokémon.

### 3.2. Endpoint Especies

**Recurso:** `GET /pokemon-species/{id}`

**Ejemplo:**

https://pokeapi.co/api/v2/pokemon-species/25

Este endpoint permite consultar información relacionada con la especie del Pokémon.

Entre los datos utilizados están:

- Categoría de especie.
- Descripción.
- Hábitat.
- Identificación de Pokémon legendario.
- Identificación de Pokémon mítico.
- Referencia a su cadena evolutiva.

**Uso en la aplicación:**

Se utiliza para complementar la ficha informativa y obtener el identificador de la cadena evolutiva correspondiente.

### 3.3. Endpoint Evoluciones

**Recurso:** `GET /evolution-chain/{id}`

**Ejemplo:**

https://pokeapi.co/api/v2/evolution-chain/10

Este endpoint proporciona información sobre las relaciones evolutivas de una familia Pokémon.

Permite consultar:

- Pokémon de la cadena.
- Etapas de evolución.
- Evoluciones ramificadas.
- Condiciones y requisitos evolutivos disponibles.

**Uso en la aplicación:**

La información se procesa y organiza en etapas para mostrar las evoluciones de manera visual y permitir consultar otros Pokémon de la misma familia.

### Relación entre los tres endpoints

Los tres recursos están conectados mediante la lógica del programa:

1. `/pokemon` obtiene la información del Pokémon y la referencia a su especie.
2. `/pokemon-species` obtiene información adicional y la referencia a la cadena evolutiva.
3. `/evolution-chain` obtiene las etapas y relaciones evolutivas.

De esta manera, las consultas forman parte de las funcionalidades de la aplicación y no se utilizan únicamente para mostrar respuestas JSON.

## 4. Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| Angular 22 | Desarrollo de la aplicación mediante componentes |
| TypeScript | Programación de la lógica y procesamiento de información |
| HTML | Estructura de las páginas y componentes |
| CSS | Diseño visual y presentación |
| Fetch API | Solicitudes HTTP a PokéAPI |
| PokéAPI | Fuente externa de información Pokémon |
| GitHub | Publicación del código fuente |
| Vercel | Despliegue público de la aplicación |

En Angular se utilizan componentes standalone, señales con `signal()`, propiedades calculadas con `computed()`, entradas con `input()` y eventos mediante `output()`.

También se utilizan las estructuras `@if` y `@for` para controlar la presentación de los datos.

## 5. Organización del proyecto

```text
pokedex-evolutiva/
│
├── src/
│   └── app/
│       │
│       ├── components/
│       │   ├── buscador-pokemon/
│       │   ├── ficha-pokemon/
│       │   ├── cadena-evolutiva/
│       │   ├── comparacion-pokemon/
│       │   └── pokedex/
│       │
│       ├── models/
│       │   ├── pokemon.ts
│       │   ├── especie.ts
│       │   ├── evolucion.ts
│       │   └── respuestas.ts
│       │
│       ├── services/
│       │   └── pokeapi.ts
│       │
│       ├── utils/
│       │   ├── entrada.ts
│       │   ├── formato.ts
│       │   ├── evolucion.ts
│       │   └── estadisticas.ts
│       │
│       ├── app.ts
│       ├── app.html
│       └── app.css
│
├── angular.json
├── package.json
├── package-lock.json
└── README.md
```

### 5.1. Componentes

**buscador-pokemon:** permite introducir el nombre o identificador del Pokémon y utilizar los controles de navegación.

**ficha-pokemon:** presenta la información general, imagen, tipos, estadísticas, habilidades y características de la especie.

**cadena-evolutiva:** muestra las etapas de evolución y permite seleccionar otros Pokémon de la familia.

**comparacion-pokemon:** muestra la tabla de estadísticas y los resultados de la comparación.

**pokedex:** coordina las consultas, los componentes y los estados de carga y error de la aplicación.

### 5.2. Modelos

La carpeta `models` contiene las interfaces TypeScript que definen la estructura de la información recibida y utilizada por la aplicación.

- `pokemon.ts`: información general del Pokémon.
- `especie.ts`: información de la especie.
- `evolucion.ts`: datos de las etapas evolutivas.
- `respuestas.ts`: estructuras de las respuestas obtenidas desde PokéAPI.

### 5.3. Servicio

**services/pokeapi.ts**

Contiene los métodos responsables de consultar los tres endpoints de PokéAPI:

- `getPokemon()`
- `getEspecie()`
- `getEvoluciones()`

Utiliza `fetch()`, `async`, `await`, `response.ok` y `response.json()` para realizar y procesar las solicitudes HTTP.

También implementa una caché temporal mediante `Map` para reutilizar los resultados de consultas anteriores durante la misma sesión.

### 5.4. Utilidades

**entrada.ts:** procesa y valida los nombres o identificadores ingresados por el usuario.

**formato.ts:** contiene funciones para presentar nombres, descripciones, estadísticas y otros datos en un formato legible.

**evolucion.ts:** procesa la información evolutiva y organiza las etapas de una cadena.

**estadisticas.ts:** contiene funciones relacionadas con el cálculo del total de estadísticas.

## 6. Funcionamiento de la aplicación

El proceso general es el siguiente:

1. El usuario escribe un nombre o identificador en el buscador.
2. Angular ejecuta la función correspondiente al evento de búsqueda.
3. El servicio consulta PokéAPI mediante `fetch()`.
4. Se procesa la respuesta HTTP y se convierte el contenido JSON a datos utilizables por TypeScript.
5. Se obtiene la información general del Pokémon.
6. Se consulta su especie.
7. Se obtiene la cadena evolutiva correspondiente.
8. Los componentes presentan la información en pantalla.
9. El usuario puede consultar evoluciones, navegar entre Pokémon o realizar una comparación de estadísticas.

Las consultas se ejecutan de manera asíncrona para obtener los datos sin bloquear la interfaz de la aplicación.

## 7. Manejo de errores y estados de carga

El proyecto contempla mensajes para informar al usuario sobre diferentes situaciones:

- Campo de búsqueda vacío.
- Nombre o identificador inválido.
- Pokémon no encontrado.
- Error de conexión con PokéAPI.
- Error en una solicitud HTTP.
- Información de evolución no disponible.
- Carga de datos del Pokémon principal.
- Carga de datos del Pokémon utilizado en la comparación.

El servicio utiliza `response.ok` para comprobar el resultado de las solicitudes HTTP y genera mensajes cuando ocurre un error.

Los componentes utilizan variables de estado para actualizar los mensajes de la interfaz.

## 8. Requisitos para ejecutar el proyecto

Para ejecutar la aplicación localmente se necesita:

- Git.
- Node.js compatible con Angular 22.
- npm.
- Un navegador web actualizado.
- Conexión a internet para obtener información desde PokéAPI.

## 9. Instalación y ejecución local

### Paso 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### Paso 2. Entrar a la carpeta del proyecto

```bash
cd pokedex-evolutiva
```

### Paso 3. Instalar las dependencias

```bash
npm install
```

### Paso 4. Ejecutar Angular

```bash
npm start
```

Cuando la aplicación termine de compilar, abrir:

http://localhost:4200/

El servidor de desarrollo debe mantenerse funcionando mientras se utiliza la aplicación.

Para detenerlo se utiliza `Ctrl + C` en la terminal.

Si el puerto 4200 está ocupado, se puede iniciar en otro puerto mediante:

```bash
npx ng serve --port 4201
```

En ese caso, abrir:

http://localhost:4201/

### Paso 5. Compilar para producción

```bash
npm run build
```

Este comando genera los archivos optimizados para su publicación.

La carpeta de salida debe verificarse según la configuración de compilación de Angular.

## 10. Funcionamiento sin backend ni base de datos propios

La aplicación está desarrollada con Angular y se ejecuta desde el navegador.

Toda la información externa se solicita directamente a PokéAPI mediante peticiones HTTP.

Las funciones de búsqueda, navegación, presentación de evoluciones y comparación de estadísticas son implementadas mediante TypeScript.

La información temporal se administra en memoria y se reutilizan respuestas mediante una caché.

Por tanto, no es necesario implementar un backend propio ni instalar una base de datos para ejecutar la aplicación.

## 11. Publicación en GitHub y Vercel

El proyecto está diseñado para publicarse mediante un repositorio público de GitHub y desplegarse en Vercel.

### Publicación en GitHub

1. Crear un repositorio público.
2. Subir el código fuente completo.
3. Incluir las configuraciones necesarias para ejecutar Angular.
4. Incorporar este archivo README.md.
5. Comprobar que el repositorio sea accesible públicamente.

### Despliegue en Vercel

1. Iniciar sesión en Vercel.
2. Importar el repositorio desde GitHub.
3. Seleccionar Angular como framework.
4. Configurar la compilación con `npm run build`.
5. Verificar el directorio de salida correspondiente.
6. Desplegar la aplicación.
7. Probar que las consultas a PokéAPI funcionen desde la dirección pública.

**Repositorio GitHub:**

URL_DEL_REPOSITORIO

**Aplicación publicada en Vercel:**

URL_DE_VERCEL

Estas direcciones deberán reemplazarse por los enlaces públicos reales una vez que se complete la publicación.

## 12. Pruebas de funcionamiento

Para comprobar la aplicación se pueden realizar las siguientes pruebas:

| Prueba | Resultado esperado |
|---|---|
| Buscar `pikachu` | Se muestra su ficha informativa |
| Buscar `25` | Se obtiene la información de Pikachu |
| Buscar `charmander` | Se muestra su información y cadena evolutiva |
| Seleccionar una evolución | Se consulta la ficha del Pokémon elegido |
| Buscar `eevee` | Se muestran sus evoluciones ramificadas |
| Presionar Anterior | Se consulta el Pokémon anterior cuando está disponible |
| Presionar Siguiente | Se consulta el siguiente Pokémon cuando está disponible |
| Presionar Aleatorio | Se consulta un identificador elegido aleatoriamente |
| Comparar Pikachu con Charizard | Se muestran sus estadísticas y los valores superiores |
| Buscar un nombre inexistente | Se presenta un mensaje de error |
| Buscar con el campo vacío | Se solicita introducir un valor |
| Consultar sin internet | Se informa del error de conexión |

Estas pruebas permiten verificar el funcionamiento de los tres endpoints y las principales interacciones de la aplicación.

## 13. Referencias

- PokéAPI: https://pokeapi.co/
- Documentación de PokéAPI: https://pokeapi.co/docs/v2
- Documentación de Angular: https://angular.dev/
- Plataforma de publicación Vercel: https://vercel.com/
- Ejemplo educativo del docente: https://github.com/gabusleon/angular-pokeapi

## 14. Conclusión

Pokédex Evolutiva integra tres tipos diferentes de recursos de PokéAPI para desarrollar una aplicación web informativa e interactiva mediante Angular.

El proyecto permite consultar datos de Pokémon, explorar familias evolutivas y comparar estadísticas utilizando información obtenida desde una API REST.

Durante su desarrollo se aplican conceptos de componentes, servicios, modelos, TypeScript, eventos, promesas, solicitudes HTTP y actualización dinámica de la interfaz.

La aplicación utiliza los datos externos para realizar funcionalidades propias sin requerir un backend ni una base de datos propios.