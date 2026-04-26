---
title: 'The b2b Saas Metrics Journey'
description: 'Existen muchos modelos para explicar el ciclo de vida de un cliente, pero hasta ahora no había encontrado ninguno que aplicara completamente a un modelo Saas …'
slug: 'saas-metrics-journey-framework'
pubDate: '2023-11-07T12:51:36Z'
updatedDate: '2025-04-25T07:30:18Z'
lang: 'es'
tags: []
heroImage: 'https://nextscenario.com/wp-content/uploads/2023/11/111.jpeg'
heroAlt: 'The b2b Saas Metrics Journey'
translationOf: ""
author: 'Ruben'
migratedFrom: 'https://nextscenario.com/es/saas-metrics-journey-framework/'
needsReview: false
draft: false
businessModel: 'saas'
---

Existen muchos modelos para explicar el ciclo de vida de un cliente, pero hasta ahora no había encontrado ninguno que aplicara completamente a un **modelo Saas** , abarcando todas sus peculiaridades y fases.

Después de haber trabajado con más de 100 plataformas Saas e iterar varios modelos, diseñé este framework propio, con el feedbkack de muchas de ellas, para la medición de las métricas más importantes de un servicio Saas: “** The B2B Saas Metrics Journey Framework** ”.

![](https://nextscenario.com/wp-content/uploads/2023/11/111.jpeg)

Este modelo, intenta explicar **la evolución que tienen las métricas de usuario y negocio, desde que se capta un usuario en la plataforma saas.**

El B2b Saas metrics journey framework, está representado por:

  * Un eje horizontal, que **representa el paso del tiempo.**
  * Un eje vertical que **representa el engagement que tiene el usuario con nuestro negocio** , por lo tanto podemos afirmar, que cuando más arriba se encuentra una métrica, (menos la unit economics que se encuentran fuera de esta representación), mayor engagement representa.

Este “framework” puede tener pequeñas variaciones, en función de las peculiaridades de las soluciones sass específicas, por ejemplo, si contamos con usuarios freemium o una etapa de demo de acceso a nuestra plataforma saas, pero es fácilmente adaptable.

Para poder analizar el comportamiento, dividimos el ciclo de vida de un cliente en varias etapas, hay otras maneras más complejas de hacerlo, pero he hecho esta adaptación en el framework, para poder explicar mejor cada fase:

  * Saas **Growth **. Donde encontramos las métricas de captación y activación.
  * **Retention & monetization.**
  * **Unit Economics.**

Ahora vamos a entrar en detalle en cada una de las fases, explicando en profundidad sus métricas y como calcularlas.

Este post sobre una business plan para saas te puede ayudar en la parte práctica:

[Plantilla plan de negocio Saas](https://nextscenario.com/old/es/plantilla-business-plan-saas/)

## Métricas de Growth Saas: Captación y Activación.

En este apartado entraremos en detalle sobre las etapas de growth en un modelo saas.

Sin tener esos primeros usuarios que pasen a convertirse en clientes, no podemos decir que hemos empezado a validar nuestra solución.

En post anteriores definimos los objetos de negocio de esta fase, donde hablamos sobre los leads y los diferentes tipos de usuarios.

Partiendo desde la esquina inferior izquierda, que representa los potenciales clientes que llevan menos tiempo con nosotros y por lo tanto tienen menos engagement, encontramos las siguientes métricas:

### Visitantes únicos:

Humanos que han visitado nuestra web, pero no han realizado ningún evento relevante.

  * Nuevos Visitantes únicos web

**Fuentes de datos:** [Google Analytics](https://marketingplatform.google.com/about/) o herramientas de métricas similares.

### Leads cualificados.

Humanos que han dejado sus datos por que han mostrado interés en nuestro contenido o solución saas.

  * Nuevos Leads.

*Podemos profundizar segmentado en la cualificación de leads que necesitemos, como ya vimos en el el artículo anterior.

**Fuentes de datos:** Excel y CRM: Hubspot, Sales Force, Mailchimp…

### Usuarios (Signups)

Usuarios que se registran por primera vez en nuestro servicio.

  * **Nuevos usuarios.**

**Fuentes de datos:** Base de datos propia, Stripe, Excel…

### Clientes Saas

Usuarios que pasan alguno de nuestros planes y se convierten en clientes.

Nota: Podemos profundizar un paso más en el caso que tengamos usuarios fremium o queramos añadir una fase más del funnel.

Métricas sobre cliente:

  * **Nuevos clientes.**
  * **Clientes perdidos** durante el periodo.
  * **Nuevos clientes netos(Net new customers):** Clientes nuevos — clientes perdidos + clientes reactivados.
  * Esta métrica nos indicara el grado de crecimiento de nuestra startup.

**Fuentes de datos:** Base de datos propia, Stripe, Excel…

![](https://nextscenario.com/wp-content/uploads/2023/11/1_bp-upO0-SY8fbbRYUUkV4Q-1-1.jpeg)

### CAC (Customer Acquisition Cost)

El coste de adquisición de cliente determina cuánto nos cuesta conseguir un cliente.

Para calcularlo podemos hacerlo a través de la siguiente fórmula:
    
    
                             `CAC = Inversión Marketing o ventas /Número Nuevos Clientes`

Donde en la inversión en marketing debemos imputar todos los gastos de marketing: personal, ads, herramientas…

> _💡Es aconsejable en fases iniciales, no imputar los gastos de personal, ya que pueden desvirtuar esta métrica, al no captar grandes masas de clientes. En esto caso, podemos calcular un “blended Cac” con los costes de los equipos marketing y ventas, si disponemos estrategias de inbound y outbound y calcular el Cac solo de las campañas de marketing. Esto no aplicaría si solo tenemos equipos de ventas._

Es recomendable calcular el coste de captación de leads y usuarios, para saber el coste en cada etapa:

![](https://nextscenario.com/wp-content/uploads/2023/11/3.png)
    
    
                             Coste Adquisición `Leads = Inversión Marketing o sales /Número Leads Totales`
    
    
                             Coste Adquisición `Usuario = Inversión Marketing o sales /Número nuevos usuarios`

**Fuentes de datos:** Excel, Base de datos, G.Analytics, CRM: Hubspot, Sales Force, Mailchimp…

### Tiempo de Ciclo de Ventas:

El tiempo de ciclo de ventas es el tiempo en que tarda un usuario en convertirse en cliente o el tiempo que tarda nuestro equipo de ventas en cerrar el contrato, contado desde el primer contacto con el cliente.

![](https://nextscenario.com/wp-content/uploads/2023/11/4-1.png)

Los ciclos de venta de software tienden en acortarse. Como vemos en este gráfico, el proceso de venta tradicional, era vender por adelantado el software, pagando toda la cantidad antes de empezar a usarlo. Esto nos llevaba a ciclos de venta de 9 a 18 meses, que se van acortando incluso a pocos días, dependiendo del modelo de negocio.

Tras estudiar varios casos reales, cuando los planes de renovación son mensuales, existen más usuarios activos, es decir, gente que realmente usa nuestro producto, por lo tanto aportamos más valor al cliente. Cabe destacar que también se necesita un periodo inicial, para que se implante el uso de nuestro servicio, donde si puede haber más churn. Pero esto da para un capítulo entero ;).

**Fuentes de datos:** Excel o CRM: Hubspot, Sales Force, Mailchimp…

## Retención y monetización Saas

### Usuarios activos

Ya vimos en post anteriores, la relevancia para nuestro negocio de la definición adecuada de active user para medir la evolución del producto.

Puedes revisarla aquí: [** Users, Activer users, Subscribers **](https://rmarzal.substack.com/p/users-active-users-and-subscribers)

Un usuario activo es alguien que demuestra cierto engament en nuestro producto, es decir un usuario que realizar x acciones en un determinado tiempo. En este anterior post también entramos en detalle en como debemos calcularlos para medirlos adecuadamente.

Después de esta pequeña explicación, podemos dividir los usuarios activos en:

  * **Dau (Daily Active Users)**

Total de usuarios activos en una ventana temporal de un día.

  * **Wau (Weakly Active Users)**

Total usuarios activos en una ventana temporal de una semana.

  * **Mau (Monthly Active Users)**

Total usuarios activos en una ventana temporal de un mes.

![](https://nextscenario.com/wp-content/uploads/2023/11/5-1024x425.png)

**Fuentes de datos:** Excel Bases de datos propio y/o herramientas de analítica.

### Dau/Mau Ratio(Stickness)

La relación de usuarios activos diarios (DAU) a usuarios activos mensuales (MAU) mide, “la stickness de un producto”, es decir, la frecuencia con la que las personas interactúan con el.

Como hemos visto anteriormente, el DAU, es la cantidad de usuarios únicos que interactúan con el producto en una ventana de un día, MAU es la cantidad de usuarios únicos que interactúan con el producto durante un período de 30 días (generalmente 30 días consecutivos).

Por lo tanto el ratio DAU MAU, es la proporción de usuarios activos mensuales, que interactúan con su producto, en un día.

> _“Si hay una métrica que todo fundador debería saber siempre, es la tasa de crecimiento de la empresa. Esa es la medida de una startup. Si no conoces ese número, ni siquiera sabes si lo estás haciendo bien o mal. Lo mejor para medir la tasa de crecimiento son los ingresos. La segunda mejor opción, para las nuevas empresas que no cobran inicialmente, son los usuarios activos. Ese es un indicador razonable del crecimiento de los ingresos porque siempre que la startup comienza a intentar ganar dinero, sus ingresos probablemente serán un múltiplo constante de usuarios activos “. –_

> _Paul Graham, VC y cofundador de Y Combinator._
    
    
                             Stickines= Daily Active Users /  Monthly Active `Users = DAU/MAU Ratio`

Como es una métrica más especifica y en algunos casos menos conocida, voy con algunos consejos sobre el cálculo del DAU / MAU:

**Pros:**

El uso del ratio DAU/MAU, en lugar de cada una de estás métricas en solitario, brinda el contexto necesario para comprender el nivel real de implicación de un usuario.

**Contras** : Una desventaja de la relación DAU / MAU es que no puede ver qué usuarios se retienen y qué usuarios causan churn. Aquí es donde resulta útil un análisis de retención de cohortes, que explicaremos men otra ocasión.

**Benchmark:** Un ratio de aceptable en SaaS, es el 40% de DAU/MAU durante los días laborables no festivos, lo que significa que el usuario mensual típico visita el sitio al menos dos días laborables por semana u 8 veces al mes.

### Net Promoter Scores(NPS)

El NPS es un sistema y un indicador para medir la lealtad y la satisfacción del cliente. NPS tiene un objetivo, descubrir la probabilidad de que una persona recomiende una marca, una empresa, un producto o un servicio a otra persona.

Para lograrlo, el Net Promoter Score se basa en la realización de una serie de preguntas al cliente, que puede variar en estilo y en formulación, pero siempre manteniendo la misma esencia.

Por ejemplo:

  * ¿Cómo de posible es que recomiendes el producto a un conocido?
  * ¿Cuál es la probabilidad de que recomiendes nuestro servicio a un amigo o familiar?
  * ¿Cómo de dispuesto estás a recomendar nuestro evento a un colega? ¿
  * Cuánto recomendarías la marca a otra persona?

Este tipo de encuesta también da para profundizar en detalle en otro cartículo.

## Métricas de monetización en un Saas

Empezamos con la parte más atractiva, “els billets💸💸💸”, pero antes vamos a hacer una pequeña introducción al pricing en modelos Saas.

### Estructura de pricing Saas

Antes de hablar sobre monetización y pricing, es necesario explicar algunos conceptos de negocio.

La primera diferenciación que debemos hacer en nuestros planes de pricing, es según al tipo de cliente al que nos dirigimos:

  * B2C (Business to customer).
  * B2B (Business to Business).
  * B2BtoC: El cliente que nos paga es un negocio, pero quien utiliza nuestro servicio es un cliente final.

La siguiente diferenciación, serían los diferentes planes que ofrecemos:

  * Plan A: Funcionalidades A y pricing A
  * Plan B: Funcionalidades B y pricing B
  * …

Finalmente, dentro de nuestra estructura de pricing, debemos de tener en cuenta los periodos de renovación que pueden ser:

  * Mensual
  * Trimestral
  * Semestral
  * Anual
  * Lifetime: Usuarios que contratan los servicios de por vida, gracias a un privilegio determinado, como pueden ser un gran descuento o unas funcionalidades exclusivas. Este tipo de subscriptores nos ayudan a financiarnos, ya que recibimos el pago de una sola vez, proporcionando un Lifetime Value mayor al que tenemos.

> _💡 Contabilizar los usuarios LifeTime para calcular el LTV puede desvirtuar nuestro Churn. Es aconsejable no tener en cuenta a estos usuarios para el cálculo del Churn operativo._

Dentro del pricing hay miles de literaturas, que darían para un artículo individual, que dejaremos para otras ocasiones.

Una vez identificada la casuística de nuestro negocio ,vamos a ver que métricas son las más importantes para identificar nuestros crecimiento.

Puedes usar nuestra herramientas gratuita de data analysis para Saas para calcular el SaaS Retention Rate y otras métricas gratis.

### MRR (Monthly Recurrent Revenue)

El MRR son los ingresos mensuales recurrentes correspondientes a los subscriptores de alguno de nuestros planes.

![](https://nextscenario.com/wp-content/uploads/2023/11/6.png)

El MRR puede tener los siguientes movimientos:

  * **New sales:** MRR de nuevos clientes que pasan de ser un usuario freemium/trial a un plan de pago.
  * **Expansion MRR:** Los usuarios cambian a un plan superior (Upgrate) + Crosselling de servicios
  * **Contraction MRR:** MRR perdido por los clientes existentes que bajan a un plan inferior. (Downgrade).
  * **Retained:** MRR retenido por los clientes existentes.
  * **Resurrected:** MRR de clientes que hicieron churn.
  * **Contraction:** MRR perdido por los clientes existentes que bajan a un plan inferior.
  * **Churned:** MRR perdido por clientes que se dan de baja.

![](https://nextscenario.com/wp-content/uploads/2023/11/1_GknN6QQnLAgBmLfqQpgHVQ-1.jpeg)

Una métrica clave para ver el crecimiento es el Nuevo MRR Neto.
    
    
                             Nuevo Mrr Neto `Mes = Mrr Nuevo Mes + Mrr Expansión + MRR Resurrected - Churn Mrr - Contraction Mrr`

El resultado nos indica cuanto MRR estás ganando o perdiendo cada periodo.

💡 Si la suma del nuevo MRR y del MRR en expansión es menor al Churn, estarás perdiendo dinero.

💡 En algunas startups el MRR en expansión compensa la salida de ingresos de Churn, es decir tienen un churn negativo.

Este sería un gráfico tipo para representar los movimientos de MRR:

![](https://nextscenario.com/wp-content/uploads/2023/11/0_BI2rKArJLHPQF-aF.png)

**¿Por qué el MRR es una de las métricas clave de un Saas?**

El MRR nos permite medir con precisión el crecimiento y el momentum. En un SaaS se pueden hacer proyecciones financieras precisas, gracias a las suscripciones, puesto que MRR es relativamente consistente y predecible. Conforme va pasando el tiempo y van pagando los suscriptores, se pueden empezar a modelar estimaciones de donde nos encontraremos de aquí a un tiempo.

> _No te ralles con el MRR en etapas iniciales, es normal que no sea estable y tengas más una hoja de sierra, que un stick de hockey._

**Medición:**

  * Pasarelas de pago: Stripe, Paypal, etc..
  * Database propia.
  * Eventos en el propio software gracias a herramientas como Segment.

💡Hay que tener cuidado con subscribers que hacen un downgrade o upgrade. Es complicado medirlo.

### Annualized Run Rate ARR

El ARR nos indica los ingresos que tenemos anualmente.
    
    
                             `ARR= 12 * MRR`

Cuando no tenemos un MRR mensual en constante crecimiento, es decir, si nuestro gráfico no es un palo de hockey, sino es más un sierra :(, es interesante mostrar el ARR en algunos informes, en lugar del MRR, ya que ayuda a “maquillar” nuestros números.

💡Benchmark: Para las startups que buscan una ronda serie A, el punto de referencia solía ser entorno al millón dólares de ARR. Pero recientemente, los fondos se están fijando en etapas más tempranas y este umbral puede reducirse.

### ARPU o ARPA (Average Recurring Per User/ Acount)

Es el pago medio entre todos los usuarios o cuentas de clientes.
    
    
                             `ARPU= Total Revenue/ Total user`
    
    
                             `ARPA= Total Revenue/ Total amounts o customers`

![](https://nextscenario.com/wp-content/uploads/2023/11/8.png)

### Churn rate

_El churn es el grado en que estamos perdiendo, usuarios, clientes o ingresos._

¿Cómo calcularlo?
    
    
                             Customer Churn `Rate= Número Clientes Baja /Total Clientes Inicio Periodo`

Hay 2 maneras de identificar el churn, las empresas lo suelen ofrecer diferentes acciones:

  * Cancelar inmediatamente.
  * Cancelar al final del mes.

Es mejor reconocer el churn al final del periodo de prueba.

> _Un Churn por debajo del 5% mensual es positivo, lo que supere el 5% mensual implica que un 60% de los subscriptores se dan de baja al año._

Es muy aconsejable poder calcular el user Churn y el MRR Churn.
    
    
                             User `Churn= Num Usuarios Baja/ UsuariosTotalesInicioPeriodo`

El User Churn nos indica el porcentaje de usuarios que perdemos.

#### Revenue churn

Nos indica cuanto dinero dejamos de ingresar debido a la baja de clientes.

Es relevante calcular el revenue churn, porque hay distintos niveles de pricing y depende mucho de sí se ha dado de baja alguien con un plan superior o un básico.
    
    
                             Revenue `Churn = (Mrr Perdido – Mrr Obtenido Por Expansión) / Mrr Inicial * 100`

### Revenue Growth Rate:

La tasa de crecimiento de ingresos es una de las métricas principales que indican tracción y una métrica donde los ventures capitals hacen foco.

La podemos calcular con la siguiente formula:
    
    
                             Mrr Growth `Rate = [Net Mrr Month B - Net Mrr Month A ]/Net Mrr Month A* 100`
    
    
                             También se puede calcular a través del ARPU

![](https://nextscenario.com/wp-content/uploads/2023/11/9.png)

Puedes usar nuestra herramientas gratuita de data analysis para Saas para calcular el SaaS Retention Rate y otras métricas gratis.

### Customer Retention Rate

La tasa de retención de usuarios, es una métrica clave para indicar el valor que aportamos a nuestros clientes. Esta métrica nos indica que porcentaje de clientes a los que les corresponde renovar su plan, lo acaba haciendo.
    
    
                             Customer Retention `Rate= 
    Num Usuarios Renuevan / Num Usuarios Totales Que Tienen Que Renovar`

Retención de clientes alta = baja tasa de churn → churn y fidelización altamente relacionados

Lo que es la ecuación de retención es simple de aplicar, lo complicado es definir y evaluar de forma comparativa la retención.

### Net Retention Rate
    
    
                             Net Retention `Rate = Gross Retention + Upsell`

### Gross Margin

Es es el beneficio bruto que nos deja cada transacción, en el caso de modelos de negocio Saas, suele ser bastante alto.

En el caso de las empresas de SaaS, los costes suelen estar distribuidos en:

  * Servidores y servicios asociados: Almacenamiento, datos, algoritmos…
  * Costes de desarrollo software y equipo.
  * Marketing y ventas.
  * Customer service.
  * Costes operativos.
  * Costes generales.

Existen buenas razones para que los márgenes brutos sean más bajos al inicio del ciclo de vida de una empresa, pero a largo plazo, las empresas de SaaS deberían tener un margen bruto de al menos el 75%.

> _En un Saas, los márgenes brutos persistentemente bajos pueden ser evidencia de un problema porque la empresa está utilizando humanos, para realizar las capacidades del producto (es decir, no es una empresa de software puro)._

### Unit Economics And Efficiency

Las unit economics son los ingresos directos y los costos asociados con un modelo de negocio particular expresados por unidad (cliente, producto,…).

Para un Saas, estas son las más relevantes:

  * **Lifetime Value (LTV)**
  * **CAC Payback**
  * **LTV/CAC Ratio**

Además de estas economics, para que la startup tenga un crecimiento sostenible, también es necesario el análisis de eficiencia y caja a través del:

  * **Cashflow**
  * **Eficiencia de ventas**

Que estudiaremos en futuros post.

### Life Time Value

El LTV es el valor que nos dejan nuestros clientes durante todo su ciclo de vida.

Se puede calcular con las siguientes fórmulas.
    
    
                             `LTV = ARPA x Average Customer Lifetime x Gross Margin`

Donde,
    
    
                             Average Customer Lifetime = 1/ Churn Rate

Por lo tanto se puede calcular directamente desde esta fórmula:
    
    
                             `LTV = ARPA x Gross Margin/Churn Rate`

### CAC Payback

Es el tiempo necesario para recuperar el coste de adquirir un cliente.
    
    
                             CAC / [ ARPA X (%) Gross Margin ] = (#) Months to Recover CAC

### LTV / CAC ratio

Un ratio importante a comprobar es la proporción entre el valor total que nos deja un cliente y el coste de adquirirlo. Este ratio mezcla aspectos de venta, marketing, retención en nuestra solución saas.

Los VCs esperan que al menos generes 3 veces el precio que te cuesta de adquirir un cliente.

![](https://nextscenario.com/wp-content/uploads/2023/11/111-1.jpeg)

**Espero que el “B2B Saas metrics journey” te sea útil en tu estrategía saas y para poner foco en las métricas** importantes en función de la etapa en la que te encuentras.

Si te ha gustado este framework, no te olvides de dar al like y de compartirla por email o redes sociales con otras personas a las que les pueda ayudar.

Conocer las métricas es importante, pero calcularlas no estas fácil.

Llevo más de 5 años trabajando en startups Saas, y ahora puedes aprovecharte de esta experiencia, gracias a la herramienta de medición de métricas Saas de Next Scenario:

![](https://nextscenario.com/wp-content/uploads/2023/11/aaa.png)

uedes usar nuestra herramientas gratuita de data analysis para Saas para calcular el SaaS Retention Rate y otras métricas gratis.
