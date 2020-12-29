# El Covid19 en el mundo

Vamos a utlizar una API para obtener datos sobre la situación del Covid19 en el mundo. Vamos a usar uno de los __endpoint__ que nos ofrecen en esta [Web](https://corona.lmao.ninja/docs/#/COVID-19%3A%20Worldometers)

Un objetivo añadido es usar un componente para crear [tablas](https://bootstrap-table.com/) de **Bootstrap** para poder volcar los datos en una tabla, sin tener que nosotros codificar casi nada.

El verdadero reto de esta práctica es entender la documentación de una herramienta que puede hacernos ahorrar mucho trabajo si aprendemos a utilizarla.

## Requisitos
1. Explora los diferentes __endpoints__ que nos ofrecen en esta Web. Busca aquel que nos permite recuperar información sobre la pandemia para un conjunto de países. Úsala en el mismo navegador para asegurarte que sabes como invocarla.
2. Crea la cabecera adecuada para la tabla. Concretamente queremos mapear el país, su población, los casos activos por millón de habitantes y la útlima vez que se actualizaron los datos.
<details>
 <summary>Pista</summary>
    Crea un thead con la información necesaria para cada una de las columnas: (https://www.w3schools.com/tags/tag_thead.asp)
</details>
1. Establece el atributo adecuado en el tag **table** para que la biblioteca haga una llamada al endpoint y recupere información para un conjunto de paises. Por ejemplo, para los mismo que se muestran en la demo. 
<details>
 <summary>Pista</summary>
    Fíjate en el atributo data-url y en los atributos data-field: (https://examples.bootstrap-table.com/#welcomes/from-url.html#view-source)
</details>

3. Haz posible que, al hacer clic en la columna de "casos activos por millón de habitantes"; esta pueda ser ordenada creciente o decrecientemente.