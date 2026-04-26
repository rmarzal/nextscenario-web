---
title: 'Cómo funciona Google Analytics 4'
description: 'Google Analytics 4 es una versión completamente nueva de la herramienta que se ha construido sobre tres servicios en los que Google ha estado trabajando durante…'
slug: 'google-analytics-4-para-saas'
pubDate: '2023-04-27T13:01:38Z'
updatedDate: '2025-04-25T07:30:26Z'
lang: 'es'
tags: []
heroImage: 'https://nextscenario.com/wp-content/uploads/2023/04/image-5-1.png'
heroAlt: 'Cómo funciona Google Analytics 4'
translationOf: ""
author: 'Ruben'
migratedFrom: 'https://nextscenario.com/es/google-analytics-4-para-saas/'
needsReview: false
draft: false
businessModel: 'general'
---

Google Analytics 4 es una versión completamente nueva de la herramienta que se ha construido sobre tres servicios en los que Google ha estado trabajando durante los últimos años: Firebase Analytics, Google Site Tag y Google Signals. 

## Firebase Analytics

Firebase Analytics introduce el nuevo modelo de datos orientado a los eventos (event-driven data model), que mide de una manera mucho más granular y detallada el comportamiento de los usuarios entre web y app. Firebase es el cerebro GA4, comparte la arquitectura interna de Firebase Analytics y simplifica el concepto de páginas/pantallas vistas a través de un sistema de eventos y parámetros, mucho más flexible.

![](https://nextscenario.com/wp-content/uploads/2023/04/image-5-1.png)

## Google Signals

Google Signals mide el journey entre dispositivos de todos los usuarios que naveguen logueados con su cuenta de Google. Google Signals proporciona medición de usuarios entre dispositivos (Cross-device User tracking) Gracias a la integración de Google Signals en Google Analytics 4, todos los informes de GA4 pueden aprovecharse de la capacidad de Google para identificar a nuestros usuarios a través de múltiples dispositivos de acceso, aunque no hayan hecho login en nuestra web/app.

## Google Site Tag (GTAG)

GTAG una librería unificada que funciona como una especie de contenedor de Google Tag Manager y que nos permite personalizar la medición desde la propia interfaz de Google sin necesidad de modificar el código de seguimiento de nuestros activos digitales.

![Acerca de la etiqueta de Google | Etiqueta de Google \(gtag.js\) | Google  Developers](https://developers.google.com/tag-platform/images/googletag.gif?hl=es)

Hasta ahora podías trabajar con sesiones, atribución, dimensiones y conversión de objetivos desde su propia herramienta. Pero ahora todo este se complica, y será necesario preparar estos datos para consumirlo según tus necesidades.

Pero, no preocupes, en este post intentaremos dar un poco de luz, y darte posibles soluciones y set ups.

Google aplica técnicas de machine learning aplicadas a las tecnologías descritas anteriormente. Gracias a esta nueva arquitectura podremos tener una visión mucho más precisa de nuestra audiencia y de sus patrones de navegación y comportamiento en nuestro negocio a lo largo de múltiples visitas.

Aunque nos va a trastocar la manera en la que estábamos acostumbrados a medir desde Universal Analytics. En esta guía vamos a conocer algunos cambios y como poder adaptarnos a ellos.

## Google analytics 4 vs universal analytics: sesion vs eventos 

Uno de los principales cambios en Google Analytics 4 respecto a Universal Analytics es su enfoque en usuario.

Anteriormente estábamos familiarizados con las sesiones ya que en Universal Analytics, la mayoría de los informes se centraban en la visita y y nos empujaban a analizar entorno a ella. Sin embargo, una sesión es algo que alguien decidió introducir en las métricas, y sin darnos cuenta, llegó a dominar el análisis de datos, sin tener del todo sentido.

En cambio, mientras el modelo de eventos de Google Analytics Universal se basa en la sesión, el modelo de datos de Google Analytics 4 se basa en los eventos de las acciones que realiza un usuario, algo a lo que la gente de producto vemos como más normalizado y que utilizan la mayoria de herramientas de medición.

## Gestión de sesión en GA

Hagamos un repaso de cómo se ha gestionado la sesión en las diferentes versiones de Google Analytics.

  * Google Analytics Classic gestionaba originariamente las sesiones utilizando cookies.
  * Con Universal Analytics se comenzó a hacer a nivel de servidor ([](http://www.google.com/patents/US20130297778)<http://www.google.com/patents/US20130297778>).

Pero ¿Cómo se gestiona ahora una sesión en Google Analytics 4?

GA4 cada vez que inicia una sesión genera un ID y un número de sesión. El evento session_start genera automáticamente el ID de sesión para que pueda identificar la sesión de la que procede un evento. Por ejemplo, se generan dos ID de sesión diferentes cuando un usuario tiene dos sesiones distintas en su sitio web.

  * El número de sesión identifica el número de sesiones que un usuario ha tenido hasta la sesión actual (por ejemplo, la tercera o quinta sesión de un usuario en su sitio web).
  * Tanto el ID de sesión como el número de sesión se asocian a cada evento de una sesión automáticamente mediante gtag.js y el SDK de Google Analytics for Firebase.

## Cookies GA4 vs Eventos

Pero las cookies no se han acabado en GA4, sigue utilizándose la cookie (_ga) para almacenar un ID único de usuario llamado Client ID. Esta cookie es del tipo First-party, es decir, se asocia en exclusiva al dominio que la creó y no puede compartirse con otros proveedores, su duración es por defecto de dos años, pero esta caducidad se actualiza con cada visita para prolongarse otros dos años.

El ID de cliente (Client ID) de Universal Analytics y Google Analytics 4 se generan de manera análoga, comparten la misma semántica y se utilizan con el mismo propósito: proporcionar un identificador pseudoanónimo para la medición de usuarios.

![Web Design Meets Google Analytics 4: The Death of Cookies and Google's Plan  | Chromatix](https://www.chromatix.com.au/assets/uploads/2020/11/GA4-_-Accuracy-vs-Privacy-Copyrighted.png?x63394)

## Clasificación de las cookies disponibles en GA4

Las cookies quedarán categorizadas según su función, siendo las siguientes las que más nos pueden afectar:

### Cookies analíticas en GA4

  * **Analíticas:** Su finalidad es medir la actividad de los usuarios y elaborar estadísticas de navegación.
  * **De seguimiento:** Permiten guardar información sobre la navegación de los usuarios para mostrarles publicidad personalizada
  * **Obligatorias o necesarias:** Son aquellas necesarias para el buen funcionamiento del sitio web. No están sujetas a aceptación
  * **La arquitectura interna de GA4 es diferente:** las vistas han desaparecido y dado paso a los flujos de datos, los filtros se han limitado casi a la nada, y muchas de las opciones de configuración habituales todavía no están disponibles o simplemente son distintas.

La sesión duraba 30 minutos, la sesión moría a medianoche, la sesión moría con el cambio de campaña. ¿Pero quién decidió eso? ¿Qué tipo de inteligencia malvada nos hizo creer que la sesión era una unidad válida de medida?

## Definición de eventos en GA4 

Global site tag (gtag.js) es la última versión de la librería de Google Analytics para la medición de eventos. Es un framework JavaScript para el etiquetado de nuestros proyectos de medición, y un API gracias al que se manda información a los productos de medición de Google. El código de seguimiento que se ofrece por defecto en GA4 está basado en gtag.js y puede obtenerse directamente en la consola de administración de la herramienta. También podemos implementarlo desde Google Tag Manager.

![](https://nextscenario.com/wp-content/uploads/2023/04/Ga4-events-vs-Universal-Analytics.jpg)

Por ejemplo, si un usuario utiliza dos navegadores para acceder a una misma página web, GA4 identificará dos usuarios diferentes.

Por tanto, no es posible realizar una medición entre dispositivos en base al Client ID. El user ID es una funcionalidad que podemos activar de manera programática (requiere una integración por programación) en aquellas webs y apps que incluyan un sistema de registro de usuario o login.

En estos casos podemos mandar el ID único del usuario a GA siempre que no sea una información personal identificable, y esto permitirá identificar a un mismo usuario independientemente del dispositivo y navegador que esté utilizando. Google Signals: Esta funcionalidad se encuentra habilitada por defecto en GA4 y permite identificar a los visitantes que naveguen por internet logueados en su cuenta de Google y tengan habilitada la opción de personalización de la publicidad.

Todas las técnicas de medición de Universal Analytics se mezclan en GA4 para traspasar las limitaciones de la medición con cookies.

Tradicionalmente en Universal Analytics existían cuatro ámbitos:

  * ▶ Evento o hit: El valor de la dimensión o métrica se asocia exclusivamente a un evento.
  * ▶ Sesión: El valor de la dimensión o métrica se asocia a todos los hits de una sesión determinada. 
  * ▶ Usuario: El valor de la dimensión o métrica se asocia a todos los hits en las sesiones actuales y futuras, hasta que cambie el valor o hasta que la dimensión personalizada pase a estar inactiva.

## Dimensiones en GA4

Las dimensiones, son un conjunto de información asociada a un evento medible, a una sesión o a un usuario, y nos permiten agrupar los datos y se pueden utilizar para segmentar los datos dentro de un análisis. En GA4, las dimensiones de adquisición de tráfico se desdoblan para ofrecer una visión dual del origen de nuestro tráfico: la primera nos hablará sobre cómo nos descubrió el usuario, y la segunda sobre el origen de cada una de sus sesiones.

![](https://nextscenario.com/wp-content/uploads/2023/04/Untitled-8-1024x425-1.png)

Las dimensiones nos permiten agrupar los datos y se pueden utilizar para segmentar los datos dentro de un análisis. Algunas dimensiones nos hablarán de países, edades…

Lo que no podremos crear en GA4 son dimensiones personalizadas de ámbito sesión. Esto tampoco representa un gran problema porque podemos sustituirlas por dimensiones de otro ámbito.

En Universal Analytics, estábamos acostumbrados a trabajar con dimensiones de ámbito sesión: como el medio, el canal, la fuente o la campaña. Habíamos interiorizado que estas dimensiones nos permitían conocer el origen de nuestras sesiones.

Ahora nos indican el origen de los nuevos usuarios, es decir, el origen de nuestros usuarios cuando nos visitaron por primera vez. En las sucesivas sesiones del usuario, el valor de la dimensión no cambiará. Un ejemplo puede ser la dimensión primer medio del usuario (First user medium).

(Podemos verlo en la imagen anterior)

En GA4 es posible optar por analizar una u otra dimensión en función de nuestras necesidades. First **User Medium será nuestra dimensión** cuando busquemos analizar nuestras acciones a partir del descubrimiento de marca.

**Session Medium** será la dimensión que elegiremos cuando queramos analizar el volumen total de tráfico que nos genera cada canal.

## Atribución en Google Analytics 4

En cuanto a las métricas de atribución, GA4 nos ayuda a entender la capacidad de captar nuevos clientes potenciales y la efectividad de nuestras acciones de fidelización. La métrica de usuarios nuevos refleja el número de usuarios que han interactuado con nuestra página web o han iniciado nuestra aplicación por primera vez, mientras que la métrica de usuarios recurrentes indica los usuarios que vuelven a nuestra página web o app, es decir, ya han iniciado al menos una sesión antes de esta visita.

![](https://nextscenario.com/wp-content/uploads/2023/04/image-4-1.png)

GA4 también ofrece la visión dual usuario/sesión en sus dimensiones de fuente:

▶ Primera fuente del usuario (First User Source): Fuente de captación del usuario en su primera visita.

▶ Fuente de la sesión (Session Source): Fuente de captación de la sesión.

Las métricas de adquisición nos ayudan a entender la capacidad de captar nuevos clientes potenciales y la efectividad de nuestras acciones de fidelización:

  * **Usuarios nuevos (New Users):** Refleja el número de usuarios que han interactuado con nuestra página web o han iniciado nuestra aplicación por primera vez. Para calcular esta métrica GA4 tiene presente el nombre de evento first_open o first_visit, que se genera únicamente en la primera interacción de un usuario con un activo digital. Estos eventos pertenecen a la familia de eventos automáticos de GA4 que se recogen automáticamente por la herramienta.
  * **Usuarios recurrentes (Returning Users)** : Indica los usuarios que vuelven a nuestra página web o app, es decir, ya han iniciado al menos una sesión antes de esta visita. Si no encuentras esta métrica en los informes de ciclo de vida, no te ofusques, no están ahí. Podrás activarla y utilizarla dentro de Explorador.
  * **Usuarios (Users):** Número de usuarios únicos que han interactuado con nuestro sitio web o aplicación durante un periodo de tiempo cuyo valor sea superior a cero segundos. En este punto deberíamos tener presente cómo estamos midiendo a nuestros usuarios en GA4.

Vamos a plantear una paradoja ,si probamos a sumar los visitantes nuevos y los visitantes recurrentes de un periodo de tiempo, comprobaremos que su suma es siempre superior a la del número de usuarios del período.

¿Cómo es posible?

La explicación es sencilla. Un mismo usuario puede comportarse como un visitante nuevo y recurrente.

Esto es parte del milagro de la analítica donde no siempre uno y uno suman dos.

En GA4 ya no existen visualizaciones de páginas, todas las interacciones de usuario se traducen en eventos. En este caso contamos con un evento page_view que se lanza a través de la función config de gtag, mediante la etiqueta de configuración de Google Analytics 4 en Google Tag Manager o a través de Firebase para aplicaciones móviles.

Algunos atributos de vistas de página de Universal Analytics tienen sus equivalentes en Google Analytics 4:

▶ Page_title: Título de la página.

▶ Page_location: URL completa de la página, incluyendo el dominio. Por ejemplo: «[](https://example.com/hellogoogle/%C2%BB)[https://example.com/hellogoogle/»](https://example.com/hellogoogle/%C2%BB).

▶ Page_referer: URL de la página de la página anterior. Por ejemplo:

En una aplicación no tenemos páginas, sino pantallas. En las propiedades Google Analytics 4, se activa un evento screen_view cada vez que un usuario ve una pantalla.

Cada herramienta de analítica define de manera particular una sesión. De hecho, las sesiones en UA y GA4 se calculan de manera ligeramente diferente, por lo que no debería resultarnos extraño que nuestras métricas de adquisición varíen respecto a nuestro histórico de datos. En GA4 la

otra nueva.

▶ Regla del cambio de origen: Al contrario de lo que sucede en Universal Analytics, donde el cambio del origen de un usuario genera una nueva sesión, en GA4 esto no llega a ocurrir en ninguna circunstancia. Es decir, cuando la campaña o la fuente cambia en mitad de la sesión, no se inicia una sesión nueva.

En este documento hemos explicado cómo funciona Google Analytics 4, una versión completamente nueva de la herramienta que se ha construido sobre tres servicios en los que Google ha estado trabajando durante los últimos años: Firebase Analytics, Google Signals y Global site tag (gtag).

También hemos hablado sobre la atribución en GA4, que nos ayuda a entender la capacidad de captar nuevos clientes potenciales y la efectividad de nuestras acciones de fidelización.

Sin duda es un cambio de paradigma en la medición, que puede que nos lleve a perder cierta información de la que ya disponíamos sobre nuestros usuarios. Ahora va a ser necesaria una migración de esos datos a GA4 y construir tus propios informes, en la que tenemos diferentes opciones:

  * Seguir utilizando GoogleA4 y que ellos nos realicen la migración.
  * Pasar a otras herramientas y/o perder los datos.
  * Migrar los datos en bruto a nuestra propia base de datos o data lake.

En este post puedes ver como hacer esta migración:

[**[Cómo exportar los datos de Google analytics](https://nextscenario.com/es/como-exportar-google-analytics-data/)**](/es?p=10209)

In addition, you will need to make a set up to build your dimension and attribution models, something we can help you with at **Next Scenario.**

[Learn more about Nextscenario Business data Tool](https://nextscenario.com/)
