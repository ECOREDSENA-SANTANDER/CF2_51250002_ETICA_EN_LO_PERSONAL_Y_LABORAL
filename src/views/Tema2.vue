<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La comunicación ética

    p.mb-5(data-aos="fade-left") Este proceso permite a las organizaciones construir un marco moral y ético interno, se estructura en temas como la teoría de la comunicación, sus etapas y modelos; los propósitos y motivaciones en la comunicación; los factores que influyen, como el asertividad y los errores; las propiedades esenciales que incluyen la interactividad y la digitalización; y los elementos organizativos, como los roles de emisor, receptor y retroalimentación. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5.
          span La comunicación ética
        figure
          img.mb-3(data-aos='fade-right')(src='@/assets/curso/temas/Tema2/figura5.svg', alt='La figura presenta un esquema que organiza conceptos clave sobre la comunicación ética en las organizaciones, estructurados en ramas temáticas. Se abordan aspectos como los fundamentos de la comunicación, los modelos de la teoría comunicativa y las etapas que van desde el conocimiento hasta la internalización. También se destacan los propósitos comunicativos y específicos, vinculados a la motivación y objetivos como informar, persuadir o actuar. Incluye factores esenciales para la comunicación efectiva, como la asertividad y el entendimiento del proceso, junto con las propiedades inherentes, entre las que sobresalen su inevitabilidad y la dualidad entre contenido y relación. Finalmente, se exploran los elementos y características de la comunicación organizacional, enfatizando su importancia en la estructura y el flujo para alcanzar una interacción efectiva en las organizaciones. ')
        figcaption Fuente: SENA

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 El proceso comunicativo
    p.mb-5 Es un conjunto de actividades que intervienen en el intercambio de datos e información entre dos o más parte, este proceso requiere, al menos, la presencia de un emisor y un receptor. El emisor envía señales que el receptor capta, descodifica y analiza, respondiendo posteriormente mediante la emisión de un mensaje, lo que completa el ciclo de la comunicación, este intercambio implica una retroalimentación continua de la información, garantizando su efectividad.
    
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Entonces, ¿Qué es la comunicación?
    p.mb-5 Etimológicamente, el término "comunicación" proviene del latín communicare, que significa "compartir algo" o "poner en común". Este concepto resalta que la comunicación es un fenómeno esencial en las relaciones humanas, especialmente dentro de grupos sociales. A través de la comunicación, las personas obtienen información de su entorno y la comparten con los demás integrantes de su comunidad.

    .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
      p El proceso comunicativo incluye la transmisión de señales como gestos, sonidos, palabras, códigos y otros símbolos con el propósito de transmitir un mensaje. La eficacia de la comunicación depende de que el receptor posea las competencias necesarias para descodificar el mensaje, interpretarlo y analizarlo de forma adecuada. Solo así se logra el éxito en la transmisión y recepción del contenido.

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1  Teoría de la comunicación

    p.mb-5 La teoría de la comunicación es un campo interdisciplinario que estudia los procesos mediante los cuales las personas transmiten, reciben e interpretan mensajes en diferentes contextos. Su propósito principal es comprender cómo se desarrolla la comunicación, sus componentes, funciones y los efectos que tiene en los individuos y las sociedades.

    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-7.col-7.mb-4(data-aos="fade-left" data-aos-delay="500")
        img(data-aos="zoom-in-left")(src="@/assets/curso/temas/Tema2/img001.png", alt='Imagen decorativa.')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="1. Fundamentación de la ética empresarial")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 La ética empresarial es un conjunto de principios que orientan las acciones de las empresas hacia prácticas responsables y sostenibles. Surge como respuesta a desafíos sociales, económicos y ambientales.
          
          .row.col-xl-11.m-auto(titulo="2. Aspectos Claves de la ética empresarial")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Se encarga de analizar la estructura de los datos y que se cumpla con los requisitos del negocio, modelo de negocio o problema. Las actividades a desarrollar, son:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 #[b Responsabilidad Social Corporativa (RSC):] promueve el compromiso de las empresas con el bienestar social y la protección del medio ambiente.
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 #[b Transparencia:]  se refiere a la claridad y honestidad en las operaciones empresariales y la comunicación con los #[em stakeholders].
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 #[b Cumplimiento legal:] la observancia de las leyes y regulaciones vigentes es fundamental para evitar conflictos y sanciones.
          
          
          .row.col-xl-11.m-auto(titulo="3. Escenarios y Retos Éticos")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 #[b Corrupción:] la lucha contra la corrupción es un pilar esencial para mantener la confianza de los clientes, empleados y accionistas.
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 #[b Equidad:] garantizar igualdad de oportunidades y trato justo a los empleados, independientemente de su género, raza o posición.
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 #[b Sostenibilidad:] impulsar prácticas que reduzcan el impacto ambiental y aseguren recursos para futuras generaciones.
          
          .row.col-xl-11.m-auto(titulo="4. Impacto de la Ética Empresarial")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 #[b Reputación:] una conducta ética mejora la imagen de la empresa ante la sociedad.
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 #[b Fidelización:] la ética fortalece las relaciones con clientes y socios comerciales.
                  li.d-flex 
                    i.fas.fa-angle-right
                    p.mb-0 #[b Innovación:] promueve el desarrollo de soluciones responsables que beneficien tanto a la empresa como a la comunidad.
          
          .row.col-xl-11.m-auto(titulo="5. Elementos de un Código de Ética Empresarial")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 Declaración de principios fundamentales.
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 Normas de conducta esperadas en el ámbito laboral.
                  li.d-flex
                    i.fas.fa-angle-right
                    p.mb-0 Mecanismos para reportar y gestionar casos de incumplimiento.

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Propósito de la comunicación
    p.mb-5 La comunicación tiene propósitos que varían según el contexto y el medio empleado, como la comunicación oral, escrita y lectora.
    
    .row.justify-content-center.mb-3
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg3.p-4(data-aos="fade-right")
          img.img-a.img-t.mb-4.my-3(data-aos="zoom-in-left")(src='@/assets/curso/temas/Tema2/1.svg', alt='tema1')
          h4.mb-4.text-center Comunicación oral
          p.text-center Se basa en el arte del lenguaje hablado, facilitando la transmisión de ideas, emociones y conocimientos de manera directa y espontánea.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg3.p-4(data-aos="fade-right")
          img.img-a.img-t.mb-4.my-3(data-aos="zoom-in-left")(src='@/assets/curso/temas/Tema2/2.svg', alt='tema1')
          h4.mb-4.text-center Comunicación escrita
          p.text-center Está condicionada por los elementos lingüísticos, permitiendo estructurar mensajes claros y duraderos que trascienden el tiempo y el espacio.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg3.p-4(data-aos="fade-right")
          img.img-a.img-t.mb-4.my-3(data-aos="zoom-in-left")(src='@/assets/curso/temas/Tema2/3.svg', alt='tema1')
          h4.mb-4.text-center Comunicación lectora
          p.text-center Consiste en interpretar y analizar textos literarios e informativos, con el objetivo de verificar, comprender, ordenar y calcular la información, fomentando el desarrollo del pensamiento crítico.
      
      p.mb-2 Además, los propósitos de la comunicación se pueden clasificar en:

    .row.align-items-center.mb-5(data-aos="fade-left").p-4
      .col-lg-6
        .row
          .col-lg-2.col-3.col-sm-2
            img.mb-3(src='@/assets/curso/temas/Tema2/img3.png', alt='Texto que describa la imagen') 
          .col-lg-11
            p #[b 1. Generales:] relacionados con la transmisión de ideas o información de forma clara y efectiva.
      .col-lg-6
        .row
          .col-lg-2.col-3.col-sm-2
            img.mb-3(src='@/assets/curso/temas/Tema2/img4.png', alt='Texto que describa la imagen') 
          .col-lg-11
            p #[b 3. De persuación:] orientados a influir en las ideas, decisiones o comportamientos de los receptores.

      .col-lg-6
        .row
          .col-lg-2.col-3.col-sm-2
            img.mb-3(src='@/assets/curso/temas/Tema2/img5.png', alt='Texto que describa la imagen') 
          .col-lg-11
            p #[b 2. Específicos:] enfocados en alcanzar objetivos concretos, como educar, informar o entretener.


    p.mb-5 Estos propósitos son la base de los procesos comunicativos, los cuales deben seguir pasos bien definidos para lograr una comunicación efectiva y alcanzar los objetivos planteados.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6.
          span  La comunicación ética
        SlyderF.custom.mb-5(columnas="col-lg-4 col-xl-4 col-md-5")
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.align-items-center.mb-5
              .col-5
                figure
                  img.mb-3(src='@/assets/curso/temas/Tema2/1.png', alt='Texto que describa la imagen')
              h5.text-center Propósito comunicativo
              p.text-small.text-center.mb-0   - Informar
              p.text-small.text-center.mb-0   - Entretener
              p.text-small.text-center.mb-0   - Persuadir
              p.text-small.text-center.mb-0   - Actuar
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.align-items-center.mb-2
              .col-5
                figure
                  img.mb-3(src='@/assets/curso/temas/Tema2/2.png', alt='Texto que describa la imagen')
              h5.text-center Propósito específico
              p.text-small.text-center.mb-0   - Explicar
              p.text-small.text-center.mb-0   - Describir
              p.text-small.text-center.mb-0   - Definir
              p.text-small.text-center.mb-0   - Exponer
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.align-items-center.mb-4
              .col-5
                figure
                  img.mb-3(src='@/assets/curso/temas/Tema2/3.png', alt='Texto que describa la imagen')
              h5.text-center Propósito específico de persuación
              p.text-small.text-center.mb-0   - Motivar a la acción
              p.text-small.text-center.mb-0   - Convencer o formar
              p.text-small.text-center.mb-0   - Convencer reformar
              p.text-small.text-center.mb-0   - Convencer cambiar
      
      .col-lg-3.col-8.col-sm-6
        img.mb-3(src='@/assets/curso/temas/Tema2/img6.png', alt='Texto que describa la imagen') 

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Propiedad de la comunicación
    p.mb-5 La comunicación permite la transmisión de mensajes e información entre entidades, siendo esencial en las relaciones sociales que se desarrollan en diversos contextos de la vida cotidiana. Este proceso interactivo entre individuos establece propiedades comunicativas que emergen del desarrollo de estas relaciones e interacciones dentro de una sociedad; dichas propiedades son fundamentales para entender cómo se construyen y fortalecen los vínculos entre las personas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.col-sm-6
        img.mb-3(src='@/assets/curso/temas/Tema2/img005.png', alt='Texto que describa la imagen') 
      .col-lg-8
        SlyderF.custom.mb-5(columnas="col-lg-4 col-xl-4 col-md-5")
          .tarjeta--boton.color-primario.p-4.tb2
            .row.justify-content-center.align-items-center.mb-5
              p.text-small.text-center Es imposible no comunicarse
          
          .tarjeta--boton.color-primario.p-4.tb2
            .row.justify-content-center.align-items-center.mb-2
              p.text-small.text-center Toda comunicación tiene un aspecto de contenido y un aspecto relacional.
          
          .tarjeta--boton.color-primario.p-4.tb2
            .row.justify-content-center.align-items-center.mb-2
              p.text-small.text-center La naturaleza de una relación depende de la puntuación de las secuencias de la comunicación entre los comunicantes.

          .tarjeta--boton.color-primario.p-4.tb2
            .row.justify-content-center.align-items-center.mb-2
              p.text-small.text-center Toda comunicación es digital y analógica.
          
          .tarjeta--boton.color-primario.p-4.tb2
            .row.justify-content-center.align-items-center.mb-2
              p.text-small.text-center Todos los intercambios comunicacionales son simétricos o complementarios.
    
    .etiqueta.p-2.d-flex.mb-3(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 La comunicación en el contexto psicosocial
    p.mb-3 En el contexto psicosocial, la comunicación desempeña un papel crucial al generar dos posibles efectos. Por un lado, la falta de comunicación puede provocar estrés en los individuos, quienes experimentan insatisfacción en los entornos en los que interactúan. Por otro lado, una comunicación ineficaz o mal gestionada puede conducir a la difusión de información errónea, agravando los problemas existentes.
      .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
        p La comunicación es una necesidad esencial para los seres humanos, ya que favorece el desarrollo personal y empresarial, fortaleciendo las relaciones y el bienestar en diversos contextos. Para mejorar la gestión de la comunicación en los riesgos psicosociales, es fundamental seguir una serie de pasos clave, los cuales se ilustran en la figura 7.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7.
          span   Pasos para mejorar la comunicación en los riesgos psicosociales
        img.mb-3(src='@/assets/curso/temas/Tema2/figura7.svg', alt='La figura expone tres pasos esenciales para prevenir problemas derivados de la falta de comunicación en contextos psicosociales. El primer paso consiste en establecer canales de comunicación claros y accesibles. El segundo paso implica informar sobre la existencia de estos canales y su funcionamiento, asegurando que todos los involucrados los conozcan y puedan utilizarlos adecuadamente. Finalmente, el tercer paso se centra en determinar las necesidades de información de cada puesto, verificando que las personas reciban la información necesaria de manera oportuna y precisa, con el fin de evitar malentendidos y promover una comunicación efectiva.') 
        figcaption Fuente: SENA
    
    .etiqueta.p-2.d-flex.mb-3(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Factores que intervienen en la comunicación
    p.mb-3 La comunicación, al ser un proceso dinámico, puede estimular o no la generación de un efecto deseado, para lograr una comunicación efectiva que cumpla con sus objetivos, es fundamental considerar los elementos que la componen. Estos elementos son esenciales para garantizar que el mensaje sea transmitido y comprendido de manera adecuada, facilitando el desarrollo de competencias comunicativas en los individuos. La comprensión y manejo adecuado de estos factores contribuyen a optimizar el proceso comunicativo y alcanzar los resultados esperados. 
    p.mb-3 A continuación, se presenta una gráfica que detalla los elementos esenciales de la comunicación.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 8.
          span  Elementos de la comunicación
        img.mb-3(src='@/assets/curso/temas/Tema2/figura8.svg', alt='La figura expone tres pasos esenciales para prevenir problemas derivados de la falta de comunicación en contextos psicosociales. El primer paso consiste en establecer canales de comunicación claros y accesibles. El segundo paso implica informar sobre la existencia de estos canales y su funcionamiento, asegurando que todos los involucrados los conozcan y puedan utilizarlos adecuadamente. Finalmente, el tercer paso se centra en determinar las necesidades de información de cada puesto, verificando que las personas reciban la información necesaria de manera oportuna y precisa, con el fin de evitar malentendidos y promover una comunicación efectiva.') 
        figcaption Fuente: SENA

    .etiqueta.p-2.d-flex.mb-3(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Condiciones para la comunicación efectiva

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.fondoamarillo
        .row.align-items-center.justify-content-center.mb-5(data-aos="fade-left").p-4
          .col-lg-6
            .row
              .col-lg-2.col-3.col-sm-2
                img.mb-3(src='@/assets/curso/temas/Tema2/img3.png', alt='Texto que describa la imagen') 
              .col-lg-12
                p #[b 1. Generales:] relacionados con la transmisión de ideas o información de forma clara y efectiva.
          .col-lg-6
            .row
              .col-lg-2.col-3.col-sm-2
                img.mb-3(src='@/assets/curso/temas/Tema2/img4.png', alt='Texto que describa la imagen') 
              .col-lg-12
                p #[b 3. De persuación:] orientados a influir en las ideas, decisiones o comportamientos de los receptores.

          .col-lg-6
            .row
              .col-lg-2.col-3.col-sm-2
                img.mb-3(src='@/assets/curso/temas/Tema2/img5.png', alt='Texto que describa la imagen') 
              .col-lg-12
                p #[b 2. Específicos:] enfocados en alcanzar objetivos concretos, como educar, informar o entretener.
          
          .col-lg-6
            .row
              .col-lg-2.col-3.col-sm-2
                img.mb-3(src='@/assets/curso/temas/Tema2/img5.png', alt='Texto que describa la imagen') 
              .col-lg-12
                p #[b 2. Específicos:] enfocados en alcanzar objetivos concretos, como educar, informar o entretener.
          
          .col-lg-6
            .row
              .col-lg-2.col-3.col-sm-2
                img.mb-3(src='@/assets/curso/temas/Tema2/img5.png', alt='Texto que describa la imagen') 
              .col-lg-12
                p #[b 2. Específicos:] enfocados en alcanzar objetivos concretos, como educar, informar o entretener.
          
          .col-lg-6
            .row
              .col-lg-2.col-3.col-sm-2
                img.mb-3(src='@/assets/curso/temas/Tema2/img5.png', alt='Texto que describa la imagen') 
              .col-lg-12
                p #[b 2. Específicos:] enfocados en alcanzar objetivos concretos, como educar, informar o entretener.
          
          .col-lg-6
            .row
              .col-lg-2.col-3.col-sm-2
                img.mb-3(src='@/assets/curso/temas/Tema2/img5.png', alt='Texto que describa la imagen') 
              .col-lg-12
                p #[b 2. Específicos:] enfocados en alcanzar objetivos concretos, como educar, informar o entretener.
          
          .col-lg-6
            .row
              .col-lg-2.col-3.col-sm-2
                img.mb-3(src='@/assets/curso/temas/Tema2/img5.png', alt='Texto que describa la imagen') 
              .col-lg-12
                p #[b 2. Específicos:] enfocados en alcanzar objetivos concretos, como educar, informar o entretener.





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
