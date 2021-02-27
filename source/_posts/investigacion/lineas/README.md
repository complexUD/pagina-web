# Lineas de investigación

En esta carpeta se encuentran las lineas de investigación, cada archivo **.md** será tratado como una linea de investigación y deberá tener el siguiente encabezado ([Front-matter](https://hexo.io/docs/front-matter)):

```yml
---
title: Nombres Linea
tags: 
    - Tag1
    - Tag2
excerpt: Descripción corta
img: foto.png
---
```

El dato **img** es opcional, si lo tiene se mostrará en la página de inicio, en caso contrario no.

El nombre de la imagen que allí aparezca debe coincidir con una imagen en una subcarpeta con el mimo nombre que el archivo de la linea de investigación.

> El nombre de los archivos no deben tener espacios o caracteres especiales!

---

Después del encabezado irá el contenido de la página de esta linea de investigación, este contenido soporta el formato de **markdown-it** por lo que se recomienda usar [este editor](https://markdown-it.github.io/).

Cualquier imagen que se desee mostrar en esta página, deberá estar guardado en la subcarpeta con el mismo nombre del archivo donde lo quiere llamar de la siguiente forma:

```md
![imagen alt](nombreImagen.formato)
```
