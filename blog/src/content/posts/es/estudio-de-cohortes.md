---
title: 'Análisis de cohortes para Saas y negocios de recurrencia'
description: 'Cuando hablamos de captación de clientes en empresas o startups, existen tres métricas clave que definen el éxito de una estrategia y con ello la del negocio: el…'
slug: 'estudio-de-cohortes'
pubDate: '2023-11-06T12:50:31Z'
updatedDate: '2025-04-25T07:30:21Z'
lang: 'es'
tags: []
heroImage: 'https://nextscenario.com/wp-content/uploads/2023/11/Net-Mrr-Retention-Cohorts-2-1024x607.png'
heroAlt: 'Análisis de cohortes para Saas y negocios de recurrencia'
translationOf: 'cohort-study-saas'
author: 'Ruben'
migratedFrom: 'https://nextscenario.com/es/estudio-de-cohortes/'
needsReview: false
draft: false
businessModel: 'saas'
---

Cuando hablamos de captación de clientes en empresas o startups, existen tres métricas clave que definen el éxito de una estrategia y con ello la del negocio: el CAC (Customer Acquisition Cost o Coste de Adquisición de Cliente), el LTV (Customer Lifetime Value o Valor de Vida del Cliente) y la retención de clientes. 

El [CAC](/es?p=14123) es fácil de calcular, simplemente debemos calcular la inversión en marketing entre losnuevos clientes que hemos sido capaces de obtner en un determinado periodo. 

El LTV, es una métrica un poco más complicada, pero sigue siendo algo sencilla si ya tienes la recurrencia medida. Se calcula multiplicando el margen bruto de un pedido o subscripción por la recurrencia de los clientes, es decir, el número de meses que un cliente se va a quedar con nosotros.

El cálculo de la recurrencia es donde se complica. Analizarla correctamente requiere implementar un análisis de cohortes, algo que muchos conocemos la teoría, pero es realmente tedíoso de calcular. Por eso, en este post te explicaré cómo realizar un análisis de cohortes y te ofreceré una solución para atomatizarla el calculo del análisis de cohortes. 

Nos ponemos un poco más técnicos y empezamos con el [modelado de cohortes](/es?p=14699).

## **¿Qué es un estudio de cohortes?**

Una cohorte es un grupo de clientes adquiridos en un momento determinado; por ejemplo, el cohorte de "septiembre de 2024" evalúa el comportamiento de los clientes adquiridos en septiembre de 2024.

![](https://nextscenario.com/wp-content/uploads/2023/11/Net-Mrr-Retention-Cohorts-2-1024x607.png)

Un estudio de cohortes es uno de las herramientas para calcular la retención más conocidas, pero no todo el mundo sabe cómo calcularlas adecuadamente. En este artículo explicaremos como implementar un estudio de cohortes para Saas, con cohortes de retención de clientes de usuarios y análisis de cohortes de clientes y trataremos el caso de uso específico para un Saas.

Estas cohortes, suelen medir el comportamiento de usuarios y clientes y que porcentaje de ellos, permanecen en los siguientes meses de vida.

Este análisis nos permite hacer “fácilmente” un benchmark con otras startup SaaS y ayuda a estimar el algunas métricas especificas del modelo de negocio, cñomo el LifetimeValue y otras unit economics, como el ratio LTV/CAC del que hemos hablado anteriormente.

### Usos comunes de un análisis de cohortes

Dentro de una análisis de cohortes podemos medir:

  * Cálculo del [Churn](https://nextscenario.com/old/es/analisis-churn/) por cohorte.
  * Cálculo de la retención bruta de MRR
  * Cálculo de la retención neta de MRR.
  * Tasa de retención de clientes. 

![](https://nextscenario.com/wp-content/uploads/2023/11/tipos-de-analisis-de-cohortes-1-834x1024.png)

Pero…

## ¿Por qué un análisis de cohortes puede ayudar a la retención?

Vamos con un ejemplo.

Suponemos que hemos cambiado el onboarding de nuestro software en enero y en febrero hemos visto un aumento de los usuarios inactivos.

¿Por qué el 70% de los usuarios adquiridos en febrero, se volvieron inactivos a la semana siguiente, mientras que en enero era sólo el 30%?

¿Estan dando problemas los nuevos cambios? 

Un análisis de cohortes puede ayudarnos a responder a estas preguntas y a reaccionar a tiempo, por lo que este análisis es super accionable y nos permite identifica un problema tomar acciones antes de que sea demasiado tarde.

## Ejemplo análisis de cohortes

Cuando un Saas esta en fase growth, , es fundamental identificar y dirigir los puntos problemáticos en el ciclo de vida del cliente. Los análisis de cohortes nos permiten hacer exactamente esto.

![](https://nextscenario.com/wp-content/uploads/2023/11/estudio-cohortes-Saas.webp)

En lugar de observar las métricas de alto nivel para la pérdida de clientes o la retención, es posible centrarse en los meses específicos y enfocar los esfuerzos de retención en consecuencia.

¿Cuál de estas afirmaciones es más “accionable”?

  * "Nuestro churn rate ha aumentado un 3%".
  * "El churn es significativamente mayor en el segundo mes de la vida del cliente".

En el segundo ejemplo, podemos centrar los esfuerzos en comprender lo que está sucediendo en el segundo mes, relacionándose con el cohorte de clientes en ese momento del ciclo y aplicar acciones adicionales para retenerlos en esta etapa.

_Nota: Las cohortes sólo funcionan realmente bien con suscripciones mensuales (o intervalos de tiempo más cortos) y es muy importante no mezclar las suscripciones anuales en sus cohortes mensuales._

Además de mirar el número de clientes, también podemos comprobar:

  1. La retención de MRR de un cohorte, para ver si los clientes que están haciendo churn, son clientes de planes grandes, principalmente cuentas pequeñas o una mezcla de ambas. Esto podría ayudarnos a reducir las causas de la aceleración de las cancelaciones.
  2. Además, podemos comparar las mismas cohortes por plan, para ver si los clientes se están adquiriendo a un ritmo más rápido en uno de ellos.
  3. También podemos comprobar si son más propensos a la cancelación en un plan específico. Esto podría ayudar al equipo de ventas y marketing a redoblar sus esfuerzos en la promoción del plan con mejor rendimiento.

Vale, vale Rubén… que todo esto esta muy bien, pero… ¿cómo lo hago?

Vamos a ello ;)

## **Cómo construir un análisis de cohortes de clientes**

Para el análisi de un cohorte necesitamos todos los registros de clientes con los siguientes campos:

  * Order id o Subscription id
  * User id o customer id.
  * Plan id.
  * Revenue plan.
  * Order date.

Es muy importante montar una buena organización en los planes pricing para tener la información unificada.

Si no disponemos de todos los campos preconfigurados, con subscription id, user id y order date ya podemos empezar un análisis de cohortes más simple.

## Cómo analizar un análisis de cohortes para el cálculo del churn

Vale, ahora que ya hemos visto como trabajar con los datos, vamos a ver como lo analizamos.

La forma más común de análisis de cohortes, se presenta en forma de tabla, con algunas características estándar:

![](https://nextscenario.com/wp-content/uploads/2023/11/Net-Mrr-Retention-Cohorts-2-1-1024x607.png)

  * Cada fila representa una cohorte de usuarios, con el nombre de la cohorte en la primera columna (por ejemplo, "Feb 2014")
  * Cada columna representa un mes después de la creación de la cohorte (siendo el mes cero el de la inscripción).
  * El valor de cada celda suele ser la tasa de abandono o de retención en relación con el mes anterior.

**¿Por qué algunas celdas del cohorte están en blanco?**

Porque estas celdas hacen referencia a un punto en el futuro. Este tipo de gráfico es extremadamente útil para identificar rápidamente los meses problemáticos, con respecto a la pérdida de clientes o la retención.

El sombreado de colores (verde = bajo churn, rojo = alto churn) nos hace ver inmediatamente las áreas problemáticas. En este ejemplo, el mes dos mostraba un pico de churn en cohortes anteriores, pero parece haber mejorado a partir de la cohorte de agosto de 2014.

### Otras formas de visualizar el análisis de cohortes

También es posible ver un análisis de cohortes como un gráfico de líneas apiladas:

![](https://nextscenario.com/wp-content/uploads/2023/09/visualizar-un-cohortes.webp)

Y, por último, un gráfico de líneas. Este tipo de gráfico, hace un gran trabajo para demostrar las características no lineales de la pérdida de clientes.

![](https://nextscenario.com/wp-content/uploads/2023/11/6ad46eec-d828-4cd1-8560-ca58ccbdca02_603x425.webp)

Espero te haya servido de ayuda este artículo de cómo construir un análisis de cohortes para un Saas. Si no sabes cómo implementarlo o quieres automatizarlo, puedes utilizar nuestra herramientas de análisis de suscripciones y métricas.

[Construye tu análisis de cohortes gratis](/es?page_id=12751)

## Cómo personalizar un cohorte

Siempre tendrás que hacer alguna personalización para que un análisis de cohortes se adapte perfectamente a tu negocio, hay varias de cuestiones y problemas que he visto, una y otra vez y que quiero compartir para que puedas evitarlos. 

Cómo por ejemplo, ¿Qué usuarios debo incluir en el número base de la cohorte? La respuesta tiene dos partes, ya que depende de lo que quieras medir.

  1. Si quieres averiguar tu retención de usuarios en general y tienes un plan gratuito, entonces debes incluir todas las inscripciones de un mes específico.
  2. Sin embargo, si lo que quieres es calcular LTV, sólo deberías fijarte en el número de clientes de pago. Sólo debemos contar una cuenta como de pago, cuando el usuario ha pagado. Así que si ofreces una prueba gratuita de 30 días, por ejemplo, espera a ver si el usuario se convierte en un plan de pago antes de incluirlo en la cohorte. De esta manera, los números no estarán sesgados con usuarios que en realidad nunca pagaron. Si es posible y sin demasiado esfuerzo, también deberías intentar eliminar todos los "planes de amigos" que hayas regalado a amigos, a tu equipo o a inversores. Si no pagan, no son representativos de las cohortes reales.

### ¿Cómo debo tratar la pérdida de clientes durante el primer mes?

Hay diferentes enfoques en este sentido, pero en mi opinión, tener en cuenta el churn dentro del primer mes es la representación más exacta de la realidad. Esto significa que en el primer mes la retención podría ser inferior al 100%, si la gente cancela su suscripción de pago dentro de ese mes. 

Sería algo así:

![Analisis de cohortes con el primer mes de churn](https://nextscenario.com/wp-content/uploads/2023/11/Analisis-de-cohortes-con-el-primer-mes-de-churn-1024x559.png)Analisis de cohortes con el primer mes de churn

Hago esto porque no quiero que el análisis exagere el churn en el segundo mes y lo subestime en el primer mes / base. Después de todo, las razones de la rotación en las primeras 1-4 semanas podrían ser muy diferentes a las de las 5-8 semanas

### ¿Debo tratar las cuentas de empresa y las individuales de forma diferente?

Si se encuentras en una fase muy temprana o vendes principalmente (más del 90%) planes individuales, probablemente sea suficiente con mezclarlos todos en el mismo análisis. Pero cuando los planes de empresa constituyen una parte importante de tus cuentas de pago, o tu producto tiene una experiencia de usuario muy diferente cuando lo utiliza todo un equipo, probablemente deberías analizar ambos tipos de cuentas por separado.

Los resultados podrían incluir que las cuentas de equipo son mucho más activas, tienen menos rotación y ven un menor churn en el primer mes que los planes individuales. O no. ..

### ¿Qué pasa con los planes anuales frente a los mensuales en un análisis de cohortes?

La eterna pregunta y la más repetida. De nuevo, si te centras en la actividad de tus usuarios a lo largo de su vida, está bien mezclar ambos planes. Si lo que quieres es ver cuántos de los usuarios que se registraron siguen volviendo después de X meses, no hay necesidad de dividirlos.

Sin embargo, si te centras en el churn, sólo debes mirar las cuentas de pago que podrían tener churn, y eso significa que debes excluir todos los planes anuales que no expiren en el mes correspondiente. Si se incluyen en el denominador, las cifras de rotación se verían afectadas.

### Conclusiones para realizar un Cohortes Saas

Ahora que ya he realizado el cohortes de clientes, ¿qué puedo sacar de él?

Las dos conclusiones más obvias se muestran en esta tabla de retención

![](https://nextscenario.com/wp-content/uploads/2023/11/implementacion-del-cohorts-1024x721.png)

  * **Desplazándose horizontalment** e se puede ver cómo la retención de una cohorte disminuye a lo largo de la vida de los usuarios.Es interesante ver dónde se producen las mayores caídas y si las cifras se estabilizan después de unos meses.
  * **Verticalmente** , puedes ver (idealmente) cómo cambia la retención de tus cohortes a lo largo de la vida del producto.

Suponiendo que no te dediques solo a ir a eventos ;), una vez lanzado el producto, deberías ver una mejora en la retención de usuarios con cohortes más jóvenes, a medida que el producto mejora.

Si no es así, deberías plantearte si las hipótesis o las características en las que estás trabajando son el enfoque adecuado.

Estos datos serán la base para calcular tu LTV.

  * Si se toman los datos de retención ponderados para el sexto o, idealmente, el duodécimo mes y se extrapolan, se obtendrá una aproximación de la vida media de los clientes.
  * Si lo multiplicas por los ingresos medios por cuenta (ARPA) o por el plan respectivo que estés considerando (por ejemplo, individual/equipo), obtendrás tu CLTV(Customer Life Time Value)

`El Customer Life Time Value es una métrica clave, la quinta esencia del análisis de cohortes, ya que te dará una idea muy aproximada sobre la rentabilidad de tu modelo de negocio.`

Posteriormente, también te indicará el precio más alto que puedes gastar en la adquisición de clientes para crecer de forma rentable. Es importante tener en cuenta aquí que, aunque es súper valioso, especialmente en las primeras etapas de una startup, este número siempre será una estimación y lo más probable es que no sea 100% exacto. Por lo tanto, debes de tener realizar un seguimiento continuo y el ajuste de sus cálculos de CLTV.

Finalmente ten en cuenta una última cosa, si contabilizas sólo las suscripciones de pago como se define en la primera pregunta anterior, entonces las tasas de base de cada mes también te darán un número más preciso para el crecimiento del número clientes de pago y, posteriormente, el crecimiento MRR.

Espero que te haya sido útil este post y si tienes dudas o quieres automatizar tus cohortes solo con tus datos de pago o facturación, puedes contactar conmigo.

[Conocer más para automatizar tu cohortes](/es?page_id=12751)
