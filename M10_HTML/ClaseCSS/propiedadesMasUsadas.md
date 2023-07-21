# Propiedad font-family

->Serif: «Times New Roman» en Windows, y «Times» en Macintosh.
->Sans serif: «Arial» en Windows, y «Helvetica» en Macintosh.
->Monospace: «Courrier New» en Windows, «Courrier» en Macintosh, y por lo general «VeraSans» o «DejaVuSans» en Linux.

    ```css
    h1{
    	font-family: "Comic Sans MS", sans-serif;
    }
    ```

# Propiedad text-decoration

La propiedad text-decoration se usa para establecer el formato de texto normal subrayado y supra rayado, tachado, entre otros
-> underline, overline, line-through, none.

    ```css
    h1{
    	text-decoration:underline;
    }
    ```

# Propiedad line-height

La propiedad line-height establece el tamaño del interlineado entre líneas de texto en bloque.

    ```css
    p {
    	line-height: 1.6;
    }
    ```

# Propiedad list-style-type

La propiedad list-style-type establece el tipo de ícono indicador de un elemento de lista.
-> disc, circle, square, decimal, upper-roman, none.

    ```css
    ul {
      list-style-type: none;
    }
    ```

## Unidades de Medida

configurando la etiqueta HTML en 62.5%, los 16px por defecto, se ajusta a 10px ayudando a la hora de ciertos cálculos.

```css
html {
  font-size: 62.5%;
}
```

    1.- Absolutas: establecen de forma completa el valor de una medida.
    	-> px (pixels): es la unidad de medida que usan las pantallas.

    2.- Relativas: definen su valor en relación con otra medida.
    	->Rem: relativa a la configuración de tamaño del elemento raíz (etiqueta html) default 1rem = 16px
    		rem esta pensado para accesibilidad, ya que crece o decrece según la configuración del tamaño de fuente que tenga el dispositivo donde se este visualice la App´
    	->Porcentaje: tomando en cuenta que 16px es 100%.
    	->Viewport: se utilizan para layouts responsive.

## Tipografías locales y web

en el directorio raíz:

```css
@font-face {
  font-family: "Mystery Quest";
  /* El valor de la propiedad src debe indicar en qué parte de nuestro directorio raíz guardamos nuestra tipografía post descarga */
  src: url ("mystery-quest.ttf");
}
p {
  font-family: "mystery Quest", cursive;
}
```

ventajas de tipografías descargadas en el proyecto: no depender de externos.
desventajas: aumento de peso el aplicativo.

alternativas: Google Fonts
ventajas de google font: gran repositorio con muchas configuraciones
desventajas: si la usas online te puede multar si tu pagina estará en la Union Europea. investiga el porqué.
alternativa para evitar multas: usar el repo para la variedad, descargarla e instalarlas en al raiz del documento.

## Estilos de fondos

# Propiedad background-color

Como valor, podemos utilizar uno de los colores predeterminados

# Propiedad background-image

se indican a través de su URL dentro o fuera del proyecto. se recomienda que este en un repositorio
externo para disminuir el tamaño del proyecto o en su defecto, bien optimizadas en tamaño,
formato y resolución para su contenedor.

Recomendaciones
->crear una carpeta para imágenes dentro de la carpeta del proyecto
->para fondos con imagen, asignar también background-color, por si falla la img.
->formatos JPG, PNG o GIF en RGB.

# Propiedad background-repeat

define cómo se repiten los fondos del documento.
->repeat-x, repeat-y, repeat, space, round, no-repeat.

```css
div {
  background-repeat: no-repeat;
}
```

# Propiedad background-position

cuando la imagen no se repite, la posición default es Esquina superior izquierda de su contenedor
->valores: top, bottom, center, left y right
->se pueden combinar 2 posiciones

```css
div {
  background-position: top center;
}
```

# Propiedad background-attachment

determina si la posición de la imagen de fondo será fija dentro de la pantalla o se desplazará con su bloque contenedor al hacer scroll.
-> valores son: scroll, fixed, local.

    ```css
    	div {
    background-attachment: fixed;
    }
    ```

# Propiedad background-size

especifica el tamaño de las imágenes de fondo en el contenedor
->valores son: contain, cover, auto, o también, 1 o 2 números
Dichos números deben incluir sus unidades de medida, y hacen referencia al ancho y alto.
Si solo se incluye 1, se aplicará la misma medida a ambos ejes.

```css
	div {
	background-size; 30% 55%;
	}
```

## Pseudo-classes

Es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado.
Son mayormente utilizadas con botones o enlaces, que es donde adquieren mayor funcionalidad.

Por ejemplo, :hover
aplicará un estilo cuando el usuario haga pase su mouse sobre el elemento especificado por el selector.

```css
selector:pseudo-clase {
  propiedad1: valor1;
  propiedad2: valor2;
}
```

Las pseudo-clases, junto con los pseudo-elementos, permiten aplicar un estilo a un elemento no sólo
en relación con el contenido del árbol de documento, sino también en relación a factores externos como:

El historial del navegador (:visited),

El estado de su contenido (como :checked en checkbox de formularios),

La posición del ratón ( :hover).

Los estilos de las pseudo-classes link, visited, hover, y active podrán ser anulados entre ellos
dependiendo del orden en el que fueron definidos. Para darle un estilo apropiado a los enlaces,
coloque las reglas como lo define el orden LVHA:
-> :link — :visited — :hover — :active.

# Pseudo-clase :link

representa un elemento que aún no se ha visitado.
Coincide con cada elemento no visitado <a>, <area>, o <link> que tiene un atributo href.

```css
a:link {
  background-color: #fff;
}
```

# Pseudo-clase :visited

representa enlaces que el usuario ya ha visitado. Por motivos de privacidad,
los estilos que se pueden modificar con este selector son muy limitados.

```css
a:visited {
  background-color: #fff;
}
```

# Pseudo-clase :hover

coincide cuando el usuario interactúa con un elemento con el curso, pero no necesariamente lo activa.

```css
a:hover {
  background-color: #fff;
}
```

# Pseudo-clase :active

representa un elemento que el usuario está activando. Cuando se usa un mouse, la "activación"
generalmente comienza cuando el usuario presiona el botón primario del mouse y termina cuando se suelta.

```css
a:active {
  background-color: #fff;
}
```

# Pseudo-clase :focus

representa un elemento (como una entrada de formulario) que ha recibido el foco.
Generalmente se activa cuando el usuario hace clic, toca un elemento o lo selecciona con la tecla "Tab" del teclado.

```css
a:focus {
  background-color: #fff;
}
```

# Pseudo-clase :not()

podríamos aplicar unos estilos a todos los elementos “a” y evitar que éstos se apliquen a otras capas
con un id o class determinado. En el siguiente ejemplo hacemos justo esto, evitando que se apliquen
los estilos a los elementos del tipo <a> que tienen como clase “boton”.

```css
a:not(.boton) {
  background-color: #fff;
}
```

# Pseudo-clase :nth-child( )

podremos aplicar sus estilos a todos los elementos hijos cuya posición sea un número “N” respecto a un padre
Este número N no tiene que ser necesariamente un número entero para especificar una posición fija
(la posición 2, por ejemplo), ya que también permite insertar fórmulas y palabras específicas.

```css
a:nth-child(2) {
  background-color: #fff;
}
```
