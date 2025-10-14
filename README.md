# Proyecto de Backend en Node.js - Interacción con FakeStoreAPI

Este proyecto es una aplicación de línea de comandos (CLI) desarrollada en Node.js que interactúa con la [FakeStoreAPI](https://fakestoreapi.com/) para realizar operaciones básicas de un CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos.

## Funcionalidades Principales

La aplicación permite ejecutar las siguientes acciones sobre los productos de la API:

  * **Obtener todos los productos**: Recupera una lista completa de todos los productos disponibles.
  * **Obtener un producto específico**: Muestra los detalles de un único producto a través de su ID.
  * **Agregar un nuevo producto**: Permite añadir un nuevo producto a la base de datos especificando su título, precio y categoría.
  * **Actualizar un producto existente**: Modifica la información de un producto ya existente (funcionalidad implementada en `fakestoreAPI.js` pero no expuesta directamente en la CLI de `index.js`).
  * **Eliminar un producto**: Borra un producto de la base de datos utilizando su ID.

## ¿Cómo usar la aplicación?

Para ejecutar las diferentes funciones, debes utilizar `node index.js` seguido de los comandos y parámetros correspondientes desde tu terminal.

### 1\. Obtener todos los productos

Para recibir un listado de todos los productos en la consola, ejecuta:

```bash
node index.js GET products
```

### 2\. Obtener un producto por su ID

Si deseas ver la información de un producto en particular, utiliza el siguiente comando, reemplazando `id` con el número del producto que quieres consultar:

```bash
node index.js GET products/id
```

**Ejemplo:**

```bash
node index.js GET products/2
```

### 3\. Agregar un nuevo producto

Para añadir un producto, debes especificar el título, el precio y la categoría. Asegúrate de que el título y la categoría no contengan espacios o únelos con guiones.

```bash
node index.js POST products 'titulo' 'precio' 'categoria'
```

**Ejemplo:**

```bash
node index.js POST products Arroz-Gallo 1420.25 Almacen
```

### 4\. Eliminar un producto

Para eliminar un producto, proporciona su ID de la siguiente manera:

```bash
node index.js DELETE products/id
```

**Ejemplo:**

```bash
node index.js DELETE products/5
```

-----

*Este proyecto fue desarrollado por Javier Luchina como parte del curso de Backend en Node.JS - Octubre 2025.*