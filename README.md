# Tienda de electrónica, [Santucho Nicolas](https://www.linkedin.com/in/nicolas-santucho-50a881182/)

## Descripción general proyecto.
Proyecto creado con tecnologia [React.js](https://es.reactjs.org/), basada en JavaScript. 

Se trata de un E-commerce, con todo su apartado visual, desde animaciones pasando por la logica y validaciones minimas, hasta integracion con una base de datos, en este caso [Firebase de Google](https://firebase.google.com/?hl=es-419). Cuenta con productos subidos a la base de datos, con sus cantidades disponibles, identificadores, precios, y demas datos.


### Estado del proyecto
Este proyecto se encuentra actualmente en fase de desarrollo, con cambios planeados como integrar el boton de continuar compra directamente en el carrito al pasar por encima de el, integrar API de mercado pago para finalizar las transacciones, agregar una pagina de inicio de sesion para administrador donde podra realizar cambios, agregar o quitar productos de stock, modificar precios, verificar clientes, compras, etc.

###Requisitos de entorno de desarrollo
>* [Visual Studio Code](https://code.visualstudio.com/)
>* [Node.js](https://nodejs.org/es/)
>* [Git](https://git-scm.com/downloads)


###Instalacion y funcionamiento
Esta guia funcionara unicamente si cumplimos con los requisitos de entorno antes mencionados.

1. Abrimos [VisualStudioCode](https://code.visualstudio.com/), hacemos click en Terminal>Nuevo terminal

2. Nos ubicamos en la carpeta donde querramos guardar el proyecto, nos movemos por carpeta con el comando "cd" seguido del nombre de la carpeta para entrar en la carpeta, para volver a la carpeta anterior escribimos "cd .." sin las comillas.

3. Una vez ubicados en la carpeta de destino, escribimos el comando ```npx create-react-app nombre-de-app```

4.  Ahora en la misma terminal, escribimos el comando ```"git clone"``` seguido del [link del repositorio](https://github.com/xsarbon/coder-react), es decir, de esta manera ```git clone https://github.com/xsarbon/coder-react```

5. Ahora abrimos el explorador de archivos, entramos a la carpeta donde hicimos el clone, abrimos la carpeta ```coder-react``` y copiamos todos los archivos en la carpeta ```nombre-de-app```

6. Desde la terminal de VSC (Visual Studio Code) nos movemos a la carpeta ```nombre-de-app```, y ejecutamos los siguiente comando: ```npm i react-router-dom```>```npm i react-router-dom```>```react-hook-form```

### Bugs conocidos y posibles correcciones de errores
* En el itemContainer al hacer click en "agregar al carrito", el producto no se agrega al carrito, esto pasa porque

    1. El boton "Agregar al carrito" no tiene agregado ninguna logica.
    2. En ese momento, los productos no cuentan con un "quantity", ya que se lo agregamos recien en el "itemCount".

* Al cambiar el tamaño de la pantalla a una resolucion menor a 1300px, en CSS se cuelga, ya que no cuenta con diseño responsive por el momento.
* Al agregar x cantidad de productos al carrito, luego ir al carrito y despues volver a agregar mas cantidades de ese mismo producto, podemos ver el total de cantidades de ese producto en el arrito aunque hayamos superado la cantidad de stock disponible. Esto se debe a que el proyecto consulta al servidor unicamente cuando simulamos el proceso de enviar los datos al servidor.
