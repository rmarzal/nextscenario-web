---
title: 'Cómo categorizar los gastos en un Saas'
description: 'Las principales ventajas de categorizar los gastos de su empresa SaaS son unas métricas y previsiones más precisas y una mejor comprensión del gasto global de su…'
slug: 'como-categorizar-los-gastos-en-un-saas'
pubDate: '2024-01-15T10:48:54Z'
updatedDate: '2025-04-25T07:30:09Z'
lang: 'es'
tags: []
heroImage: ""
heroAlt: 'Cómo categorizar los gastos en un Saas'
translationOf: ""
author: 'Ruben'
migratedFrom: 'https://nextscenario.com/es/como-categorizar-los-gastos-en-un-saas/'
needsReview: false
draft: false
---

Las principales ventajas de categorizar los gastos de su empresa SaaS son unas métricas y previsiones más precisas y una mejor comprensión del gasto global de su empresa.

Este post pretende dar consejos prácticos a los directores generales y fundadores de SaaS sobre cómo organizar y automatizar su backend financiero, dándoles libertad para dedicar tiempo a partes de su negocio que aportan más valor, como la planificación financiera.

Después de leer cada entrada, debería poder añadir sus propios comentarios y reenviar el artículo a su Contable o Director de Operaciones para su aplicación.

Los gráficos de donuts -aunque a menudo mal vistos- resultan útiles para presentar rápidamente el desglose de gastos de su empresa. Utilice gráficos de áreas para obtener más detalles.

He aquí un resumen de la serie:

Parte 1: Cómo clasificar los gastos en una startup SaaS v2.0

Parte 2: Cómo automatizar sus gastos SaaS - Nómina con Gusto y QuickBooks

Parte 3: Cómo automatizar sus gastos de SaaS - QuickBooks Bank Rules

Parte 4: Cómo elegir un software de facturación SaaS

Este post - Parte 1 - se centra en cómo categorizar sus gastos SaaS correctamente mediante el uso de QuickBooks o Xero, y cuáles son los beneficios de hacerlo.

Ventajas de utilizar categorías de gastos en SaaS

Las principales categorías de gastos para cualquier empresa SaaS son:

Coste de los ingresos

Investigación y desarrollo

Ventas y marketing

General y Administración

Estas cuatro categorías son el estándar para describir los costes y gastos de cualquier empresa SaaS, desde Salesforce hasta Zoom o tu startup. Sin embargo, nunca deja de sorprenderme por qué tantos contables insisten en crear su propio conjunto de categorías, dejándote para averiguar cómo calcular tu Margen Bruto o CAC - sin saber cuáles son tus Costes de Ingresos o costes de Ventas y Marketing para empezar.

Para ilustrar esto mejor, eche un vistazo al desglose de gastos a continuación para una empresa SaaS de $6MM ARR inventada.

La empresa aumentó su gasto total de $390k/mes a $750k/mes durante 2018. Incluso sin ningún desglose, obviamente el CEO era plenamente consciente del aumento del gasto de la compañía en ventas y marketing. De hecho, si amplías su gasto en Ventas y Marketing a continuación, puedes ver cómo su gasto en S&M estaba impulsando la mitad del crecimiento del gasto.

Lo que quizá no haya quedado tan claro para el Director General es si este gasto ha sido sostenible. ¿Cuál es su nuevo CAC Payback Time? ¿CAC:LTV? ¿Nuevos márgenes brutos? Personalmente, me parece sorprendente que las previsiones de una empresa de SaaS incluyan a menudo este desglose de gastos, como debería ser, pero los datos reales de la empresa sean una mera caja negra.

Coste de los ingresos

Empecemos por el coste de los ingresos.

De alguna manera siempre existe la "pregunta" de qué entra en el Coste de los Bienes Vendidos SaaS, como si hubiera mucho espacio para la interpretación. Jason Cohen analiza la cuestión en su entrada de Quora. El quid de la cuestión es que el coste de los ingresos incluye los costes que conlleva proporcionar el software como servicio.

Aunque no es una métrica GAAP, es ampliamente adoptada y entendida (ejemplos aquí, aquí y aquí). Necesitarás el Coste de los Ingresos para calcular tu Margen Bruto, que a su vez necesitas para calcular el Valor de Vida del Cliente (LTV), el Coste de Adquisición del Cliente (CAC), el Tiempo de Retorno y para entender la economía unitaria de tu empresa en general.

Ejemplos de coste de los ingresos

Alojamiento

AWS / Google Cloud / Azure

Nómina - Atención al cliente

Costes de prestación de servicios

Twilio, Sendgrid

Tasas comerciales

Stripe, Braintree

También debería incluir software que ayude a su equipo de soporte, como Help Scout, o a sus Devops, como CircleCI. Depende de ti si quieres agrupar todo el software en una categoría bajo Coste de Ingresos, o varias categorías de software bajo alojamiento, soporte y prestación de servicios.

Coste de los ingresos - Configuración de QuickBooks

Ahora tienes que pasar del nivel alto a la acción.

Abra QuickBooks Online y vaya a Contabilidad en la barra lateral izquierda. Se abrirá el Plan de Cuentas de su empresa, que no es más que un nombre elegante para una lista de todas sus categorías de gastos (=cuentas).

Estamos utilizando un término específico de SaaS Coste de Ingresos, pero QuickBooks y muchas empresas tradicionales llaman a esta categoría Coste de Bienes Vendidos. Mantenga un ojo en la columna Tipo, y desplácese hacia abajo para ver lo que tiene actualmente guardado allí.

Empiece por crear una nueva cuenta haciendo clic en el botón Nuevo de la parte superior derecha.

Establezca el Tipo de Categoría como Costo de Bienes Vendidos y asigne un nombre a la cuenta. Comencemos con Nómina - Soporte. También tendrá que seleccionar un Tipo de Detalle, pero no he encontrado que este ajuste sea particularmente útil. Podría establecer el Tipo de Detalle como Costo de Mano de Obra para los gastos de nómina, y Otros para cualquier otra cosa.

Como último paso para añadir una cuenta, asegúrese de marcar la casilla de verificación para que esta cuenta sea una subcuenta de la categoría mayor Soporte al cliente, ya que el uso de la estructura cuenta -> subcuenta dará a sus libros un aspecto más limpio.

A continuación, repita este proceso para los Salarios, Impuestos de Nómina y Beneficios de Empleados, y asegúrese de que todos ellos son subcuentas de Nómina - Soporte. Después de esto, puede añadir cualquier otra subcuenta de Soporte al cliente, antes de pasar a crear otra categoría principal como Tasas de vendedor.

Como resultado, debería ver algo como esto en su QuickBooks:

Ejemplo de plan contable de SaaS para el coste de los ingresos

Ventas y marketing

El objetivo de separar las ventas y el marketing de otros gastos es permitir el cálculo del CAC, pero también utilizar el gasto en ventas y marketing como motor para prever los ingresos.

Por ejemplo, si sabe que su gasto en publicidad es de 20.000 $ al mes y da lugar a 200 nuevos clientes, su CAC es de 100 $. Ahora bien, si también sabe que su coste por clic (CPC) es de 1 $, y que la conversión a prueba tiene una media del 10% y que la conversión posterior a pago es del 10%, puede utilizar la inversión publicitaria como motor para prever los ingresos futuros.

Si gastar 20.000 dólares significaba 200 nuevos clientes, gastar 25.000 dólares resultaría en 250. Aunque las tasas de conversión disminuirían con el tiempo, ya que llegarían a su sitio clientes potenciales de menor calidad, podría tenerlo en cuenta en su previsión. Al final, el objetivo aquí es obtener una previsión más precisa que poner un dedo en el aire y declarar un crecimiento intermensual del 10% ad infinitum.

Para ello, debe dividir las secciones de Ventas y Marketing en Ventas y Marketing, respectivamente. Estas secciones se clasifican a su vez en subcuentas.

Gastos de ventas - Configuración de QuickBooks

Estas son algunas de las categorías típicas que se incluyen en Ventas:

Nómina

Programas y herramientas

Salesforce, Pipedrive, otros CRM

Viajes - Ventas

Gastos de desplazamiento de los comerciales para visitar a los clientes

Si su equipo de ventas es totalmente receptivo, probablemente no necesitará una categoría separada de viajes de ventas, sino que puede combinarla con la de General y Administración. Además, si su equipo de ventas es bastante grande e incluye representantes entrantes y salientes y SDR, probablemente valga la pena dividirlos como subcuentas separadas en Nómina - Ventas.

En QuickBooks, comience por crear una cuenta de nivel superior llamada Ventas y Marketing con un tipo de categoría Gastos. Añada Ventas como una de las subcuentas. A continuación, añada Nómina - Ventas como una subcuenta de Ventas, y añada sus subcuentas de Salarios, Impuestos de Nómina, Beneficios y Comisiones. Siga el proceso para el resto de las categorías como Software y Herramientas - Ventas.

Ejemplo de plan de cuentas SaaS para gastos de ventas

Gastos de marketing - Configuración de QuickBooks

Estas son algunas de las categorías típicas del marketing:

Publicidad

Adwords, Facebook, Otros anuncios digitales

Conferencias

Nómina

Promocional

Swag, tarjetas de visita, carteles

Software y herramientas - Marketing

Hubspot, Intercom (si se utiliza para la adquisición), Mailchimp

Si los viajes a conferencias o eventos suponen una parte importante de los gastos de su equipo de marketing, puede que merezca la pena dividirlos.

En QuickBooks, añada la cuenta "Marketing" como subcuenta de Ventas y Marketing. Como siempre, añada Nómina - Marketing como subcuenta de Marketing, y no olvide las subcuentas de nómina. ¡Subcuentas para todos! Siga el proceso para el resto de las categorías como Software y Herramientas - Marketing.

Ejemplo de plan de cuentas SaaS para gastos de marketing

Investigación y Desarrollo (Ingeniería)

Separar el equipo técnico del resto de los gastos tiene menos beneficios directos, pero sigo recomendando hacerlo.

En primer lugar, debe comparar su gasto actual en ingeniería y compararlo con sus previsiones. Una buena forma de hacerlo es analizar el gasto en I+D como porcentaje de los ingresos. Es una buena forma de comprobar si está gastando lo suficiente en tecnología en sus previsiones e incluso le permite compararse con otras empresas de SaaS. Por ejemplo, un hecho poco conocido sobre la tecnología de videollamadas de Zoom, obviamente superior, es que invierten menos de la mitad que una empresa SaaS media en I+D, dado que sus oficinas de ingeniería se encuentran en países de bajo coste.

Gastos de I+D - Configuración de QuickBooks

Estas son las categorías típicas de I+D:

Contratistas

Nómina

Programas y herramientas

Github, Jira, incluso software como Bugsnag que te ayuda a construir un producto mejor.

Si tienes un equipo de I+D más grande, yo separaría el equipo de ingeniería de los equipos de producto y diseño en la sección de nóminas.

En QuickBooks, empieza por crear una cuenta de gastos de nivel superior llamada Investigación y Desarrollo, y añade Nómina - I+D como una de las subcuentas. (No olvides las subcuentas de la nómina). Probablemente querrás incluir Trabajo contratado - I+D para cualquier contratista relacionado con el producto con el que trabajes. Por último, añade la cuenta de software.

I+D suele ser una sección bastante concisa que consiste sobre todo en nóminas de ingeniería, así que no se sorprenda si sólo suma unas pocas cuentas aquí.

Ejemplo de plan contable SaaS para gastos de investigación y desarrollo

General y Administración

En cuanto a los gastos, casi todo lo demás puede clasificarse en la categoría de Gastos Generales y Administrativos. Esto incluye gastos como el alquiler o los honorarios del contable, pero también a los directivos y sus asistentes.

Si tu equipo es pequeño, te recomiendo que no clasifiques a tu director de tecnología o al jefe de ventas en gastos generales y administrativos hasta que tengan al menos unas cuantas personas en sus equipos. De lo contrario, parecerá que tienes unos gastos generales enormes y pocos o ningún gasto en ventas o ingeniería, lo que contradice el objetivo de este ejercicio.

Estas son algunas de las categorías típicas que se incluyen en General y Administración:

Seguros

Comidas

Gastos de oficina

Equipamiento, suministros, franqueo

Nómina

Servicios profesionales

Contabilidad, coach ejecutivo, jurídico

Alquiler

Programas y herramientas

Hellosign, Chargebee, Slack, etc.

Viajar

Servicios

Gastos generales y administrativos - Configuración de QuickBooks

En QuickBooks, añada la cuenta de gastos "General & Admin". Ahora, la configuración de G&A es un poco diferente de las secciones anteriores. Dado que probablemente esté trabajando con un negocio que ya tiene un Plan de Cuentas, necesitará mover algunas de sus cuentas existentes como subcuentas bajo G&A. Probablemente la mayoría de ellas.

Normalmente recomiendo renombrar las cuentas de nómina existentes como Nómina - G&A, y añadir las subcuentas típicas de impuestos y beneficios si no existen ya. Aunque podría crear un conjunto de cuentas completamente nuevo para G&A, rara vez hay beneficios de hacerlo.

En lugar de añadir una captura de pantalla de una lista bastante larga de cuentas, aquí tienes una plantilla de Plan de Cuentas SaaS. No tendrá todas las cuentas que necesitas, pero debería darte un comienzo sólido que luego puedes modificar según tus necesidades.

Para llevar

Estos cambios deberían mejorar la visibilidad de sus resultados pasados, pero también hacer más precisas sus previsiones futuras. Conseguirás unos libros con un aspecto más limpio, más fáciles de entender y de compartir con tu consejo de administración o tus inversores.

Y recuerde. Coste de ingresos `SaaS = alojamiento y soporte.`

Nota: Esto no es un asesoramiento fiscal ni contable. No soy un CPA o un abogado, y usted debe consultar con la suya antes de hacer cualquier cambio permanente en sus libros.
