# Taller: manipulación del DOM

## Encuentro Maker Medellín 2026

El comité organizador del Encuentro Maker ya tiene lista la página de inscripción: el HTML y el CSS están terminados y el formulario se ve bien. El problema es que hoy no hace casi nada. Todos los campos están ahí, pero la página no responde a lo que la persona escribe o selecciona.

Tu trabajo es darle vida con JavaScript.

---

## Cómo funciona este taller

Lee esto antes que nada. El formato no es el de un taller normal de clase.

> **Este taller se resuelve en casa y se sustenta en clase.**
>
> **En casa:** el equipo resuelve las cinco features, con todo el tiempo que necesite.
>
> **En clase:** el profesor elige **una** de las cinco features y elige quién la codifica. Esa persona, o ese grupo, arranca desde el proyecto base sin resolver y tiene **20 minutos** para dejarla funcionando.

La consecuencia es directa: no basta con que cada integrante domine la feature que le tocó. **Todos tienen que entender las cinco**, porque nadie sabe cuál le va a caer.

Practicar en casa una sola vez y cerrar el computador no alcanza. Borra tu solución y vuelve a escribirla desde cero, cronómetro en mano, hasta que te sobre tiempo.

---

## Cómo ejecutar el proyecto

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server** si aún no la tienes.
3. Clic derecho sobre `index.html` y selecciona **Open with Live Server**.

No hay que instalar dependencias ni ejecutar comandos en la terminal. Es JavaScript nativo.

---

## Qué contiene el proyecto base

| Archivo | Contenido |
|---|---|
| `index.html` | Formulario completo de inscripción. No necesita cambios de estructura. |
| `styles.css` | Todos los estilos, incluidas las clases utilitarias que vas a usar. |
| `script.js` | Dos funcionalidades ya resueltas y el espacio de trabajo de cada feature. |

En `script.js` encontrarás dos ejemplos resueltos:

- **Resuelto 1:** mostrar u ocultar los datos de facturación según un checkbox.
- **Resuelto 2:** el envío del formulario y el panel de confirmación.

Léelos antes de empezar. Ahí está el patrón que se espera en tu código: seleccionar el elemento, escribir una función con nombre y conectarla con un event listener.

---

## Reglas del taller

**Las tres que definen la evaluación:**

1. **Se trabaja en equipos de "Maximo" de 3 personas.**.
2. **El taller se resuelve en casa. En clase se sustenta.** El profesor asigna la feature que hay que codificar en vivo, y no se anuncia con anticipación cuál será.
3. **Hay 20 minutos para resolver la feature asignada**, partiendo del proyecto base sin resolver. El cronómetro corre desde que se abre el editor.

**Las que aplican mientras programas:**

4. Solo JavaScript nativo. Sin librerías ni frameworks.
5. Todo tu código va en `script.js`, dentro de la sección que corresponde a cada feature.
6. Los elementos nuevos que necesites (mensajes de error, contadores, ítems de una lista) se crean desde JavaScript. No los dejes escritos en el `index.html` para solo mostrarlos y ocultarlos.
7. Puedes agregar un `id` o una `class` al HTML si te hace falta, pero no cambies la estructura del formulario ni elimines campos.
8. No escribas CSS. Usa las clases utilitarias que ya están definidas.
9. Cada función debe tener un nombre que describa lo que hace.

---

## Clases utilitarias disponibles

Estas clases ya están en `styles.css`. Las agregas o las quitas desde JavaScript según lo necesites.

| Clase | Para qué sirve |
|---|---|
| `oculto` | Oculta cualquier elemento. |
| `mensaje-error` | Da formato a un mensaje de error debajo de un campo. |
| `campo__control--error` | Marca un campo con datos inválidos. |
| `campo__control--valido` | Marca un campo con datos correctos. |
| `contador` | Da formato a un contador de caracteres o de selecciones. |
| `contador--alerta` | Estado de advertencia del contador. |
| `contador--limite` | Estado de límite alcanzado del contador. |
| `opcion--bloqueada` | Muestra una opción como no disponible. |
| `boton-mini` | Botón pequeño para acciones dentro de una lista. |

---

## Las cinco features

Las cinco son independientes entre sí. Puedes resolverlas en cualquier orden y ninguna necesita que otra esté terminada.

### Feature 1: contador de caracteres en observaciones

> Como participante quiere saber cuánto espacio me queda en el campo de observaciones, para no quedarme a mitad de una frase.

**Criterios de aceptación**

- El campo de observaciones admite máximo 200 caracteres.
- Debajo del campo se muestra siempre cuántos caracteres van escritos y cuál es el máximo, con el formato `0 / 200`.
- El contador se actualiza mientras la persona escribe, sin tener que salir del campo.
- Desde los 150 caracteres el contador pasa a estado de advertencia.
- Al llegar a 200 caracteres el contador pasa a estado de límite y no es posible escribir más.
- El contador también se actualiza si la persona borra texto.

---

### Feature 2: validación del correo electrónico

> Como organizador necesito que el correo esté bien escrito, porque es el único canal por el que enviamos la boleta de ingreso.

**Criterios de aceptación**

- La validación se ejecuta cuando la persona sale del campo de correo, no mientras escribe.
- Un correo se considera válido si tiene texto antes de una arroba, una sola arroba, y después de la arroba un dominio que contenga al menos un punto.
- Si el campo queda vacío, aparece debajo el mensaje: `El correo es obligatorio.`
- Si el correo es inválido, aparece debajo el mensaje: `Escribe un correo válido, por ejemplo nombre@dominio.com` y el campo se marca como erróneo.
- Si el correo es válido, el mensaje desaparece y el campo se marca como correcto.
- Aunque la persona entre y salga del campo diez veces, nunca debe haber más de un mensaje visible al tiempo.

---

### Feature 3: límite de talleres seleccionables

> Como organizador necesito que nadie reserve más de dos talleres, porque los cupos son limitados y se agotan el primer día.

**Criterios de aceptación**

- Debajo del listado de talleres se muestra el conteo con el formato `Talleres seleccionados: 0 de 2`.
- El conteo se actualiza cada vez que se marca o se desmarca un taller.
- Cuando hay dos talleres marcados, los demás quedan deshabilitados y su tarjeta se ve como no disponible.
- Si se desmarca uno de los dos, los demás vuelven a quedar disponibles y recuperan su apariencia normal.
- El conteo pasa a estado de límite cuando hay dos talleres marcados.
- En ningún caso es posible llegar a tener tres talleres marcados.

---

### Feature 4: cálculo del total de la inscripción

> Como participante quiero ver cuánto voy a pagar mientras elijo, para no llevarme una sorpresa al final del formulario.

**Criterios de aceptación**

- Al cargar la página, el total muestra el valor de la modalidad que viene preseleccionada.
- El total se recalcula al cambiar de modalidad y al marcar o desmarcar cualquier servicio adicional.
- El valor se muestra con signo de peso y separador de miles, por ejemplo `$175.000`.
- Si no hay ningún servicio adicional marcado, el total muestra únicamente el valor de la modalidad.
- Si mañana el comité cambia un precio en el `index.html`, el total debe seguir siendo correcto sin tocar el `script.js`.

---

### Feature 5: registro de acompañantes

> Como participante quiero registrar a las personas que van conmigo, para que el comité tenga clara la cantidad de asistentes.

**Criterios de aceptación**

- Al presionar el botón de agregar, el acompañante aparece en la lista con su nombre y su parentesco.
- Después de agregarlo, el campo de nombre queda vacío y listo para el siguiente registro.
- Si el campo de nombre está vacío, no se agrega nada a la lista y aparece debajo del campo el mensaje: `Escribe el nombre del acompañante.`
- Cada acompañante de la lista tiene un botón que lo elimina de la lista.
- No se pueden registrar más de cuatro acompañantes. Al llegar a cuatro, el botón de agregar queda deshabilitado.
- Si se elimina un acompañante estando en cuatro, el botón vuelve a habilitarse.

---

## Reto adicional (opcional)

Solo si el equipo ya resolvió las cinco features:

> Como organizador necesito que nadie envíe el formulario sin aceptar el tratamiento de datos.

**Criterios de aceptación**

- Al cargar la página, el botón de confirmar inscripción está deshabilitado.
- El botón se habilita únicamente cuando el checkbox de términos está marcado.
- Si se desmarca el checkbox, el botón vuelve a quedar deshabilitado.

---

## Trabajo en equipo

Equipos de 3 personas. Cinco features y tres integrantes, así que a alguien le tocan dos. Repártanlas como quieran, pero recuerden que en la sustentación el profesor asigna la feature sin importar quién la resolvió en casa.

Una forma que funciona:

1. Cada integrante crea su rama a partir de `main`, con el nombre `feature/1-contador`, `feature/2-correo`, y así sucesivamente.
2. Trabaja únicamente dentro de la sección de `script.js` que corresponde a su feature.
3. Al terminar, abre un pull request hacia `main`. Otro integrante lo revisa antes de integrar.
4. El equipo resuelve en conjunto los conflictos que aparezcan.
5. **Antes de la clase, reúnanse y explíquense las features entre ustedes.** Quien resolvió la 3 le cuenta a los otros dos cómo lo hizo, y así con todas. Ese paso es el que decide la nota de la sustentación.

---

## Entrega

**Antes de la clase (opcional)**

- Repositorio con las ramas y los pull requests de cada feature.
- La rama `main` con las cinco features integradas y funcionando.

**En clase**

- El profesor asigna una feature y quién la codifica.
- Se parte del proyecto base sin resolver, no del repositorio del equipo (en caso de que sus soluciones esten en un repositorio).
- 20 minutos de reloj. Se puede consultar la documentación de MDN, no el código propio ni el de nadie más.
- Al terminar, quien codificó explica su solución con estas tres frases: qué elemento seleccioné, qué evento escuché y qué modifiqué del DOM.

Si el tiempo se acaba con la feature a medias, igual se sustenta lo que haya. Explicar bien un avance incompleto suma más que un código completo que no se sabe justificar.
