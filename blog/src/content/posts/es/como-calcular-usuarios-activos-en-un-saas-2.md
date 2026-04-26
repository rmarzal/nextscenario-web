---
title: '¿Cómo calcular usuarios activos en un Saas?'
description: 'https://nextscenario.com/wp-content/uploads/2023/11/Active-users-1024x528-1-1.jpg — análisis práctico del equipo de NextScenario.'
slug: 'como-calcular-usuarios-activos-en-un-saas-2'
pubDate: '2023-11-08T08:01:13Z'
updatedDate: '2025-04-25T07:30:15Z'
lang: 'es'
tags: []
heroImage: 'https://nextscenario.com/wp-content/uploads/2023/11/Active-users-1024x528-1-1.jpg'
heroAlt: '¿Cómo calcular usuarios activos en un Saas?'
translationOf: 'how-to-calculate-active-users-in-a-saas-startup'
author: 'Ruben'
migratedFrom: 'https://nextscenario.com/es/como-calcular-usuarios-activos-en-un-saas-2/'
needsReview: false
draft: false
businessModel: 'saas'
---

![](https://nextscenario.com/wp-content/uploads/2023/11/Active-users-1024x528-1-1.jpg)

Antes de entrar en detalle en cómo calcular usuarios activos en un saas, debemos recordar qué es un usuario activo.

Los usuarios activos en una startup saas son el número total de usuarios que interactúan con nuestro producto, en un periodo de tiempo determinado. Usuarios que acceden «x» veces a tu servicio y realizan «y» acciones.

En resumen, un usuario activo puede clasificarse en:

[](https://nextscenario.com/old/es/como-calcular-usuarios-activos-en-un-saas/#)

## Maus (usuarios activos mensuales).

Los usuarios activos mensuales (MAU) son el total de usuarios activos durante un periodo de un mes.

## Waus(Usuarios activos semanales).

Los usuarios activos semanales son el total de usuarios activos durante un periodo de una semana.

## Dau (Usuarios activos diarios).

Los usuarios activos diarios son el número total de usuarios que interaccionan de alguna manera con nuestro saas, durante un día determinado. Algunas startups consideran usuarios «activos», a los usuarios que simplemente hacen login y esto puede causar problemas, ya que no es del todo correcto, pero esto lo veremos un poco más adelante.

> **Los usuarios activos, es un kpi para identificar, a qué usuarios les estamos aportando valor y están lejos del «churn».**

Los pasos para calcular los usuarios activos pueden ser aparentemente sencillos, pero pueden complicarse, dependiendo de las particularidades de tu solución.

## Problemas para definir los criterios de un usuario activo.

###   
¿Cómo calcular usuarios activos en un Saas? Varios problemas con los DAU:

  * No son accionables. No se puede hacer nada con un DAU que causan baja, excepto preguntarse qué ha pasado. Podemos detectar problemas, pero ya hemos llegado tarde.
  * Es una métrica que puede ser fácilmente sesgada y manipulada. Dependiendo de lo específico que seas con la definición de active user.
  * Una startup calcula los usuarios activos de forma diferente a otra, lo que hace que sea complicado hacer un benchmarking.

### ¿Cómo calcular usuarios activos en un Saas? Desafíos comunes con los eventos para calcular usuarios activos en un Saas.

Los eventos más comunes utilizados para definir a los usuarios «activos» en muchas empresas son los siguientes:

### Visita

Este evento web se utiliza en pocas ocasiones para el DAU. Contabilizará a usuarios sin autenticar y no registrados como activos a menos que los excluyas. Suele incluir a cualquier persona (incluyendo bots y usuarios fraudulentos) que llegue a cualquier página web. Las visitas son los eventos menos confiables y limpios.

![](https://nextscenario.com/wp-content/uploads/2023/11/image-30-1024x403-1-1.jpeg)

### Inicio de sesión de sesión

Estos eventos son utilizados tanto en aplicaciones móviles como en web, lo que los hace atractivos para los informes si tu aplicación es compatible con múltiples plataformas. Sin embargo, también incluyen identificaciones de usuarios sin autenticar y usuarios no registrados, a menos que los excluyas. El desafío con los eventos de sesión es que se definen de manera ligeramente diferente en cada herramienta de análisis:

  * **[Google Analytics](https://marketingplatform.google.com/about/analytics/)** : Una sesión es un período de tiempo durante el cual un usuario interactúa con tu sitio web o aplicación. De manera predeterminada, una sesión finaliza (se agota el tiempo) después de 30 minutos de inactividad del usuario. No hay límite de duración para una sesión.
  * **Mixpanel** : La sesión de la aplicación se ejecuta cuando el usuario pasa más de 10 segundos en la aplicación, sin límite en la duración máxima de la sesión.
  * **Braze** : Una sesión comienza cuando se lanza la aplicación y la aplicación pasa a primer plano, y termina cuando la aplicación sale de primer plano o cuando la aplicación se cierra. El valor predeterminado para la duración de la sesión es de 10 segundos.
  * [** Amplitude** :](amplitude:) Una sesión es el período de tiempo en el que un usuario tiene tu aplicación en primer plano o tu sitio web abierto. En el caso de aplicaciones móviles, una sesión comienza cuando se trae la aplicación a primer plano y termina cuando la aplicación pasa a segundo plano y no se disparan eventos durante al menos 5 minutos. Las sesiones web tienen un tiempo de expiración predeterminado de 30 minutos.

**Aunque las definiciones parecen similares, cada una de las cuatro herramientas mencionadas proporcionará un valor diferente para una sesión **(y, por lo tanto, diferentes métricas de DAU).

Comprender el flujo de las sesiones puede volverse bastante complejo. Un usuario puede iniciar múltiples sesiones, y debes trabajar con tus desarrolladores para entender cómo se conectan y se definen los eventos y las sesiones. Además, dependiendo del dispositivo, el navegador y los cambios de privacidad, los usuarios pueden experimentar diferentes comportamientos en cuanto a las sesiones. Es importante tener en cuenta estos factores al reportar el número de usuarios activos diarios.

> ## Define claramente lo que es un active user
> 
> Para mejorar realmente una solución saas e identificar que es relevante para nuestros clientes, tenemos que conectar la definición de «activo» con los objetivos de crecimiento. Es decir, averiguar qué tipo de actividades y características conducen a la retención y construir la definición de usuario activo en torno a ellas.

Una de las métricas clave en la retención es el ratio DAU/MAU ratio. Esta métrica suele ser una medida de adherencia que nos indica el grado de compromiso de nuestro producto.

Esta métrica es un «must» para muchos fondos a partir de cierta madurez.

### Verifica y valida tus eventos de actividad del Saas

Antes de comenzar a calcular usuarios activos en un Saas y basar tus métricas en eventos de actividad, realiza pruebas exhaustivas para asegurarte de que **los eventos se estén registrando y contabilizando correctamente.** Verifica que los eventos estén alineados con las acciones que definiste como actividad y que no estén incluyendo acciones no deseadas o usuarios no relevantes. Esto te ayudará a evitar errores de conteo y asegurar que tus datos sean confiables.

![](https://nextscenario.com/wp-content/uploads/2023/11/image-8-1024x363-1-1.png)

### Comprende las definiciones de sesiones de tu herramienta de análisis

Si estás utilizando eventos de sesión para el DAU, asegúrate de comprender las definiciones de sesiones de tu herramienta de análisis. Cada herramienta puede tener su propia forma de medir y contabilizar las sesiones, por lo que es importante conocer las diferencias y cómo se ajustan a tus necesidades. Asegúrate de establecer límit

## Ejemplos de usuarios activos en un negocio saas :

Vamos con un ejemplo de usuarios activos en un saas. Para entender la tasa de crecimiento de tu saas, decides medir el número de usuarios activos diarios. Tu definición de «activo» es el número de usuarios, que se han conectado, durante un día determinado.

Has trabajado bien en tu estrategia de medios y entonces, lanzas una nota de prensa, y ha sido todo un éxito. Muchas personas se han registrado por primera vez, y entonces las consideras como «DAU».

La gente tiene «curiosidad» y utiliza tu producto, es una transacción de baja fricción, con cero engagement.

![](https://nextscenario.com/wp-content/uploads/2023/11/d-1.png)

El gráfico resultante podría ser algo así.

El peligro de definir tu «usuario activo» por una métrica mínima, como los inicios de sesión es que sólo, **estás viendo un reflejo del éxito de una campaña. No estás midiendo el uso real de tu servicio **.

Mientras que tu DAU se dispara, el número de personas que utilizan tu producto no lo hace. La gente se ha inscrito, pero la mayoría de ellos no utiliza su producto como se supone que debe hacerlo.

Si sólo prestas atención a tu DAU, no te darás cuenta de que el uso real está cayendo.

![](https://nextscenario.com/wp-content/uploads/2023/11/e-2.png)

A corto plazo, esto parece estar bien, pero con el tiempo, te enfrentarás a una dura corrección.

> Cuando lances el producto y tus usuarios empiecen a utilizarlo, será una prueba de realidad. Las características que pensabas que serían las más valiosas no lo serán; las características que pensabas que eran secundarias, tienen la posibilidad de ser las características de la experiencia principal para algunos de tus usuarios.

¿Quién no conoce esta historia?

Por eso, en el post anterior hablamos de la importancia de priorizar el conocimiento de tus usuarios, en lugar de priorizar la construcción del producto.

## ¿Cómo calcular los usuarios activos?

Para entender realmente lo que ocurre con tu saas, tienes que ser capaz de identificar qué conjunto de acciones realizan tus usuarios más frecuentes:

  * ¿Qué acciones representan sus usuarios?
  * ¿Qué eventos realizan dentro de una sesión?

Independientemente de lo que hayas pensado que sería tu principal propuesta de valor, la única manera de definir realmente esos términos es ver qué características hacen que la gente vuelva más.

Cuando sea capaz de identificar qué característica hace que los usuarios vuelvan más a menudo, mejor podrás predecir la retención a largo plazo.

Al redefinir tu «usuario activo» con métricas de uso reales, construyes una estructura que te incentiva a construir tu producto en la dirección correcta.

#### Ejemplos de cómo definen usuarios activos algunas startups

![](https://nextscenario.com/wp-content/uploads/2023/11/image-29-1024x1022-1-1.jpeg)

Del mismo modo, si has identificado grupos de usuarios que se han dado de baja, averigua qué puedes hacer para evitar que los nuevos usuarios se conviertan en ellos.

Cuanto más específico seas con los criterios de los usuarios activos, más bajas serán las métricas, pero mayor será el conocimiento de tu producto y lo que necesita mejorar.

### En resumen,  
Cómo definir un usuario activo en un Saas

  1. Determina el periodo de tiempo que le interesa examinar (día, semana, mes…).
  2. Identifica, define y mide, el conjunto de acciones que debe realizar un usuario.
  3. Empieza de forma sencilla y, a medida que vayas conociendo a tus usuarios, empieza a especificar más. No compliques la medición antes de tiempo

Ya sé que hemos dicho que no sólo es necesario el inicio de sesión… pero no te agobies, trabaja con lo que conoces en ese momento y empieza a validar, por algo hay que empezar.

> Las métricas aportan valor, pero demasiadas métricas o una forma compleja de medirlas, pueden bloquearnos y llevarnos a una «parálisis por análisis».

Esta herramienta te ayuda a definir tus métricas clave de saas y es muy útil si no quieres hacer un seguimiento de todo en hojas o excel

Si tienes algún comentario o si eres un founder de saaS y te gustaría recibir post como este, sólo tienes que suscribirte a mi newsletter.

Me encantaría escuchar tu experiencia.
