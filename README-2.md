UTE EC

> Xtratego ACADEMY

Practica

Descripción de la Práctica

Objetivo:
Desarrollar una aplicación de lista de tareas (To-Do List) utilizando React. El proyecto debe implementar conceptos clave del curso, como componentes, props, manejo de estado, ciclo de vida de componentes, y el uso de Redux para gestionar el estado global de la aplicación.

Instrucciones de la Práctica:

Configuración del Proyecto:
Utiliza create-react-app para generar el entorno inicial del proyecto.
Configura Webpack y Babel para empaquetar y transpilar el código.
Asegúrate de utilizar ESLint y Prettier para mantener la calidad del código.

Componentes:
Crea al menos tres componentes:
TodoList: Encargado de mostrar la lista de tareas.
Todoltem: Representa una tarea individual.
AddTodo: Un formulario para añadir nuevas tareas a la lista.
Props y Estado:
Usa props para pasar los datos desde TodoList a Todoltem.
Utiliza useState para gestionar el estado local de la lista de tareas y el formulario de ingreso de tareas en AddTodo.

Ciclo de Vida de Componentes:
Usa el hook useEffect para guardar las tareas en el almacenamiento local del navegador cada vez que la lista cambie.
Al cargar la aplicación, usa useEffect para cargar las tareas guardadas desde el almacenamiento local.

Manejo de Eventos:
Implementa el evento onSubmit para añadir una nueva tarea en el formulario de AddTodo.
Implementa un botón para eliminar tareas individuales, utilizando el evento onClick.

Uso de Redux:
Configura Redux en el proyecto para gestionar el estado global de las tareas.
Implementa actions y reducers para añadir y eliminar tareas en el estado global.
Usa useSelector y useDispatch para conectar los componentes a Redux.

Optimización:
Utiliza técnicas de optimización como code splitting y lazy loading para mejorar el rendimiento de la aplicación.

/// Desarrollo

Comenzamos creando el proyecto utilizando create-react-app

npx create-react-app practica-modulo-2

cd practica-modulo-2

Instalamos react-redux

npm install react-redux

Envolvemos el componente TodoList en un provider de redux

creamos los componentes Todoltem y AddTodo

Creamos el archivo index.js dentro de src/components/TodoList

Creamos el archivo index.js dentro de src/components/Todoltem

Creamos el archivo index.js dentro de src/components/AddTodo

Configuramos el archivo App.js

Configuramos el archivo index.js

Instalamos Webpack y Babel

npm install webpack webpack-cli --save-dev
npm install babel-loader babel-preset-react --save-dev
npm install babel-preset-env --save-dev

Configuramos Webpack

Creamos el archivo webpack.config.js

y creamos los archivos para ambos ambientes: development y production

Instalamos ESLint

npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev

Configuramos ESLint

Creamos el archivo .eslintrc.json

Instalamos Prettier

No sólo es necesario instalar Prettier, sino configurarlo a nivel del vscode, para que las reglas de Prettier se apliquen automáticamente al código.

además, configuramos el archivo .prettierrc

también configuramos babel

npm install @babel/core @babel/preset-env @babel/preset-react --save-dev

Como el proyecto es requerido redux, instalamos react-redux y redux

npm install react-redux redux --save

Configuramos el archivo store.js

y el archivo reducers.js

Instalamos la librería antd

npm install antd --save

y configuramos el archivo App.js para el manejo de temas (oscuro y claro)

Configuramos el archivo index.css

Es muy interesante, todo lo que se puede hacer con redux, react-redux, antd, la optimización de código con webpack y babel, y la integración con eslint y prettier.
