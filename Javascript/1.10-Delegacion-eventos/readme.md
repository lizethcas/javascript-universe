# Ejercicio Práctico: Delegación de eventos en una tienda online



- En este ejercicio vas a simular una tienda online que muestra una lista de productos usando tarjetas (cards). Cada card mostrará:

- Nombre del producto

- Imagen del producto

- Botón “Agregar al carrito”

- Botón “Ver detalles”

Tu objetivo es implementar delegación de eventos para manejar los clics en estos botones desde un único listener en el contenedor padre.

Requerimientos:
✅ Mostrar al menos 4 productos en pantalla, cada uno con su card.
✅ Coloca los botones “Agregar al carrito” y “Ver detalles” dentro de cada card.
✅ Agrega un listener único al contenedor padre de las cards.
✅ Cuando el usuario haga clic:

Si es en Agregar al carrito, muestra en consola:
`[Título del producto]` agregado al carrito

Si es en Ver detalles, muestra en consola:
Mostrando detalles de `[título del producto]`

Ejemplo de mensaje en consola:

```
Camiseta básica agregada al carrito
Mostrando detalles de Zapatillas deportivas

```