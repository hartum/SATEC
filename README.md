# Control salas SATEC test

## Pasos para arrancar el proyecto

1. Descargar el proyecto desde github ( https://github.com/hartum/SATEC ) a tu disco local
2. Abre una terminal y ve hasta el direcotrio donde te descargaste el proyecto

```
cd c:\tu_ruta\satec\control-salas
```

3. Una vez en el directorio has una instalación para conseguir todas las dependencias

```
npm install
```

4. Arranca el proyecto con

```

npm run serve

```

## Decisiones tomadas

El framework que he utilizado es Vue.Js Ver.3, ya que ademas de ser mi favorito es el ideal para desarrollar proyectos de forma rápida.
La aplicación me pareció de una sola vista así que evite usar un router (no hay cambio de páginas) y en su lugar decidí hacer un uso intensivo de Vuex, el gestor de estados de Vue para la comunicación entre componentes.

Para las llamadas a la API he usado axios, contra una API fake creada en apimocha.com, las llamadas son las siguientes:

1.  https://apimocha.com/hartum/list-floors
2.  https://apimocha.com/hartum/list-rooms/1
3.  https://apimocha.com/hartum/list-rooms/2
4.  https://apimocha.com/hartum/list-rooms/3

No he preparado ningún Endpoint para crear una **Sala nueva**, para la **Edición** o para el **Borrado**, ya que estas operaciones dependen de una acción sobre la BBDD y como dichas acciones no van a verse reflejadas en la prueba, solo he implementado la llamada a Vuex.

Para hacer la aplicación responsive he usado la librería [Primeflex](https://www.primefaces.org/primeflex/), es ligera rápida y fácil de usar.

Por último he dividido la aplicación en 4 componentes:

- **FloorSelector**
  Contiene la lista con las salas
- **Floor**
  Es el contenedor de las salas
- **Room**
  La tarjeta de cada sala
- **NewRoom**
  Una tarjeta especial con todos los campos para crear una nueva sala

## Dificultades encontradas

Las principales dificultades no han han sido problemas de desarrollo, como siempre el diablo está en los detalles.
La primera ha sido que realmente el rato que he tenido para sentarme para hacer la prueba ha sido el fin de semana.

La segunda y que me llevo un buen rato, era que la API no me estaba devolviendo un JSON, hasta que me di cuenta que al copiar y pegar directamente del editor, lo que estaba pegando era un STRING y no un JSON.

La tercera que los gremlimns de la informática han estado hurgando y por alguna razón perdí el acceso a mi github desde sourcetree, tuve que estar un rato de configuraciones.

La especificación extra del filtrado de salas no es lo suficientemente clara.

Por último admito que el test entregado no es pixel-perfect, ni el grosor de las fuentes es el mismo, ni las separaciones entre componentes son las mismas que las imágenes, hasta diría que hay diferencia de los border-radius entre lo que se me dijo y la ventana que se entrego, pero por suerte los he puesto en una variable y cambiarlos es cuestión de 1min.
