<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Desarrollo de la ética

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-3.col-8.col-sm-5
        img.mb-3(src='@/assets/curso/temas/Tema1/img1.png', alt='')
      .col-lg-9
        p.mb-4 El desarrollo de la ética abarca diferentes dimensiones que orientan las decisiones y comportamientos tanto en la vida personal como laboral. Estas decisiones se fundamentan en reglas básicas que permiten reflexionar y abordar tanto problemas internos como externos. En este contexto, la ética actúa como un marco para gestionar situaciones complejas con base en principios sólidos.
        .cajon.color-primario.p-4.mb-4
          p La función de la ética se refleja en su compromiso con la comunidad y el medio ambiente, promoviendo una calidad de vida laboral adecuada y prácticas responsables en el comercio y el marketing; en el ámbito profesional, se establecen criterios generales que incluyen la comprensión del entorno individual y colectivo, la defensa de valores y conocimientos, y el reconocimiento de las limitaciones personales y profesionales. También se destaca la importancia de promover la utilidad a través de canales responsables, denunciar conductas inadecuadas y proteger a los colegas frente a injusticias.
      p En los ámbitos humanos, la ética enfatiza el respeto a la autonomía y la protección de las personas como principios esenciales. Este reconocimiento promueve una convivencia basada en la dignidad y los derechos individuales. Finalmente, para fomentar el desarrollo ético en el entorno laboral, es fundamental fortalecer competencias específicas, como conocimientos, habilidades y actitudes, que permitan una actuación profesional basada en la integridad y la responsabilidad. En conjunto, estos elementos consolidan la ética como un pilar esencial para el desarrollo humano y profesional.

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1  Evaluar los lineamientos organizacionales para fomentar la ética laboral

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 En la vida personal

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-12
        SlyderF.custom.mb-5(columnas="col-lg-4 col-xl-4 col-md-6")
            .tarjeta.tarjeta--slyder.bg2.p-4.shadow
              .row.justify-content-center.mb-3
                .col-6
                  img.img-a.img-t(src="@/assets/curso/temas/Tema1/img1.svg", alt="alt").img100.m-auto(data-aos="zoom-in")
              .row.justify-content-center.mb-3
                .col-10.mb-4
        
                    h4.text-center.mb-0 Guía para la toma de decisiones
                p.mb-0.text-center La ética ayuda a distinguir entre lo correcto y lo incorrecto, permitiendo actuar conforme a principios y valores como la honestidad, la justicia y la responsabilidad.
            .tarjeta.tarjeta--slyder.bg2.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img.img-a.img-t(src="@/assets/curso/temas/Tema1/img2.svg", alt="alt").img100.m-auto(data-aos="zoom-in")
              .row.justify-content-center.mb-3
                .col-10.mb-4
    
                    h4.text-center.mb-0 Construcción de la integridad
                p.mb-0.text-center Fortalece el carácter personal al promover coherencia entre los pensamientos, palabras y acciones, generando confianza y respeto en las relaciones interpersonales.
            .tarjeta.tarjeta--slyder.bg2.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img.img-a.img-t(src="@/assets/curso/temas/Tema1/img3.svg", alt="alt").img100.m-auto(data-aos="zoom-in")
              .row.justify-content-center.mb-3
                .col-10.mb-4
          
                    h4.text-center.mb-0 Fomento del bienestar
                p.mb-0.text-center Actuar éticamente contribuye a una vida más satisfactoria y en paz, ya que minimiza los conflictos internos y externos.
            .tarjeta.tarjeta--slyder.bg2.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img.img-a.img-t(src="@/assets/curso/temas/Tema1/img4.svg", alt="alt").img100.m-auto(data-aos="zoom-in")
              .row.justify-content-center.mb-3
                .col-10.mb-4
                    h4.text-center.mb-0 Impacto en la comunidad 
                p.mb-0.text-center Las acciones éticas generan un efecto positivo en el entorno, influyendo en el desarrollo de una sociedad más justa y equitativa.
           

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 En la vida laboral

    .cont_5_1.mb-4(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/temas/Tema1/01.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Promoción de la confianza
              p.mt-4.mb-0.text-center La ética en el trabajo fomenta la confianza entre colaboradores, líderes y clientes, esencial para construir relaciones duraderas.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/temas/Tema1/02.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Mejora del clima laboral
              p.mt-4.mb-0.text-center Un entorno ético reduce conflictos y promueve un ambiente de respeto y cooperación, aumentando la productividad.
        
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/temas/Tema1/03.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Fortalecimiento de la reputación
              p.mt-4.mb-0.text-center Las empresas y los profesionales con altos estándares éticos gozan de una mejor imagen y credibilidad en el mercado.

    .cont_5_1.mb-4
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/temas/Tema1/07.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Prevención de conductas inapropiadas
              p.mt-4.mb-0.text-center La ética establece límites claros frente a conductas como la corrupción, el abuso de poder o la discriminación, protegiendo tanto a las personas como a las organizaciones.
        
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/temas/Tema1/08.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Impacto en la sostenibilidad
              p.mt-4.mb-0.text-center Promueve prácticas responsables en términos sociales, económicos y ambientales, alineándose con objetivos de desarrollo sostenible.
      


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2  Función de la ética en la vida personal y laboral

    p.mb-5 Guía las acciones y decisiones basadas en valores como la integridad, la responsabilidad y el respeto hacia los demás; en el ámbito personal, promueve el desarrollo de una convivencia armoniosa y una vida coherente con los principios individuales; mientras que, en el ámbito laboral, fomenta la confianza, el compromiso y un entorno profesional justo y transparente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1. 
          span Función de la ética social
        figure
          img(src='@/assets/curso/temas/Tema1/figura1.svg', alt='La figura presenta un esquema relacionado con la ética personal, dividido en varias categorías. El concepto central es la ética personal, que se vincula al desarrollo de los valores y la moral. Este desarrollo se aborda a través de tres aspectos principales: la manera en que la persona se define a sí misma, sus actuaciones y la valoración del progreso de su dignidad personal. Estos elementos están organizados de manera jerárquica y conectados mediante líneas que estructuran las relaciones entre las ideas. ')
        figcaption Fuente: SENA


    p.mb-5 El ser humano, por su naturaleza social, necesita la interacción con individuos, grupos o comunidades para lograr una convivencia armónica, regida por normas que protegen la dignidad, integridad y cohesión social. En el ámbito empresarial, la ética actúa como una guía práctica y teórica que orienta la toma de decisiones estratégicas, promoviendo la responsabilidad económica, social y ambiental, así como comportamientos coherentes con los valores y objetivos de la organización.


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span  Función de la ética empresarial
        figure
          img(src='@/assets/curso/temas/Tema1/figura2.svg', alt='La imagen representa un esquema sobre la función de la ética empresarial, estructurado en cuatro áreas principales: compromiso con la comunidad, medio ambiente, calidad de la vida laboral y comercio y marketing responsable. Estos elementos están organizados alrededor del concepto central, destacando los pilares fundamentales que orientan las prácticas éticas en el ámbito corporativo. ')
        figcaption Fuente: SENA


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-f.bgverde.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.text-center La ética empresarial se define como el conjunto de valores, principios y normas que rigen las organizaciones para garantizar comportamientos responsables y generar una buena reputación frente a la sociedad. Estas directrices se reflejan en las acciones de la empresa durante sus procesos productivos, contribuyendo a la confianza y credibilidad en su entorno.
          .bloque-texto-f__autor.mb-0
            h3.mb-0 - Cortina (1994)
        


    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Origen de la ética empresarial 

    p.mb-5 Surge como una respuesta a los desafíos éticos que enfrentan las organizaciones en sus interacciones con empleados, clientes, socios y la sociedad. Tiene sus raíces en la filosofía ética y la responsabilidad social corporativa, buscando equilibrar los intereses económicos con los valores éticos y la sostenibilidad; su desarrollo ha sido impulsado por la necesidad de generar confianza, cumplir con normas legales y promover prácticas responsables en un entorno globalizado y competitivo.

    
    .tarjeta.fondo-slyder.p-4(data-aos="fade-left")
      LineaTiempoC.fondoblanco(text-small).p-4
        .row.align-items-center.justify-content-center(titulo="1970").p-4
          .col-md-6.mb-4.mb-md-0
            h4.mb-5 Década de 1970
            p Surge el concepto de business ethics (ética empresarial) en los Estados Unidos como respuesta a la crisis de confianza generada por el caso Watergate y otros escándalos relacionados con la corrupción política y empresarial. Este contexto llevó a una mayor preocupación por la transparencia y la responsabilidad corporativa, sentando las bases para un enfoque más ético en los negocios.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/fon1.png', alt='Texto que describa la imagen')
        
        .row.align-items-center.justify-content-center(titulo="1980").p-4
          .col-md-6.mb-4.mb-md-0
            h4.mb-5 Década de 1980
            p Durante esta década, las empresas priorizan la obtención de beneficios como objetivo principal, a menudo dejando en segundo plano los aspectos éticos. Sin embargo, comienzan a surgir instituciones, investigaciones académicas y publicaciones especializadas que destacan la importancia de la ética empresarial como un componente esencial para el desarrollo sostenible de las organizaciones. Este período marcó el inicio de un interés formal por integrar la ética en la toma de decisiones corporativas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/fon2.png', alt='Texto que describa la imagen')

        .row.align-items-center.justify-content-center(titulo="1990").p-4
          .col-md-6.mb-4.mb-md-0
            h4.mb-5 Década de 1990
            p Se producen grandes escándalos financieros e inmobiliarios a nivel global, como el caso Enron, que evidencian la necesidad urgente de un enfoque más robusto y estructurado hacia la ética empresarial. Estos eventos generan un resurgimiento del interés en la ética, con un énfasis renovado en la creación de códigos de conducta, la promoción de la gobernanza corporativa y la regulación más estricta para prevenir malas prácticas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/fon3.png', alt='Texto que describa la imagen')

        .row.align-items-center.justify-content-center(titulo="Siglo XXI").p-4
          .col-md-6.mb-4.mb-md-0
            h4.mb-5 Siglo XXI
            p La ética empresarial evoluciona hasta convertirse en un tema central y relevante, no solo en las empresas sino también en la academia y la sociedad en general. Las organizaciones integran la ética en su estrategia corporativa, impulsadas por la globalización, la digitalización y las demandas de consumidores y accionistas por mayor transparencia y sostenibilidad. La ética empresarial se centra en investigaciones, publicaciones y buenas prácticas que abordan temas como el cambio climático, la equidad social y la responsabilidad social corporativa, promoviendo una visión holística y sostenible de los negocios.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/fon4.png', alt='Texto que describa la imagen')    

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3  Situaciones que generan reflexión y decisiones fundamentadas en la ética

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-9
        p.mb-4 Las normas morales, presentes desde la infancia, han generado preocupaciones a lo largo del tiempo, ya que su existencia influye en las decisiones humanas al limitar o regular deseos y acciones. Estas reglas, reforzadas por los consejos de los adultos, buscan orientar y formar a las personas según los comportamientos aceptados dentro de una comunidad.
          .cajon.color-primario.p-4.mb-4
            p Un ejemplo claro de situaciones que invitan a la reflexión es la discriminación étnica o racial en colegios y espacios públicos, un problema que resalta la necesidad de abordar las desigualdades en la sociedad. Los desafíos socioculturales, relacionados con la migración, la interculturalidad y la convivencia, se dividen en factores internos y externos:
      .col-lg-3.col-8.col-sm-5
        img(src='@/assets/curso/temas/Tema1/img2.png', alt='Texto que describa la imagen')    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5
        .row
          .col-lg-2.col-3.col-sm-2
            img.mb-3(src='@/assets/curso/temas/Tema1/img3.png', alt='Texto que describa la imagen') 
          .col-lg-11
            p #[b 1. Factores internos:] discriminación, acoso laboral, retribución justa, confidencialidad y privacidad de la información.  
      .col-lg-5
        .row
          .col-lg-2.col-3.col-sm-2
            img.mb-3(src='@/assets/curso/temas/Tema1/img4.png', alt='Texto que describa la imagen') 
          .col-lg-11
            p #[b 2. Factores externos:] falta de veracidad y transparencia, publicidad engañosa, falta de respeto al medio ambiente, corrupción y calidad insuficiente de los productos.


    p.mb-5 Frente a estas situaciones, es fundamental adoptar enfoques éticos que permitan resolver los problemas de manera responsable y justa, tomando decisiones que respeten los valores morales y promuevan el bienestar colectivo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3. 
          span  Problemas de la ética
        figure
          img.mb-3(src='@/assets/curso/temas/Tema1/figura3.svg', alt='La imagen presenta una estructura conceptual sobre los problemas de la ética. En el centro se encuentra el núcleo titulado "Problemas de la ética", del cual se desprenden cinco categorías principales. Estas incluyen: la diferencia entre ética y moral, problemas de la obligación moral, la diversidad de sistemas morales, problemas de la libertad humana y problemas de valores. Cada categoría está representada en círculos de colores distintivos, conectados por una circunferencia gris que unifica el esquema, reflejando la relación entre estos aspectos en el ámbito ético. ')
        figcaption Fuente: SENA

    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4  Criterios generales de ética profesional y laboral

    .cajon.color-primario.p-4.mb-4(data-aos='fade-right')
      p.mb-5 El ser humano actúa influido por sus necesidades, intereses y preferencias, tomando decisiones basadas en sus propias ideas y criterios, los cuales configuran su ética personal, no obstante, para desenvolverse de manera adecuada en la sociedad, resulta fundamental establecer criterios generales que permitan resolver conflictos cotidianos y orientar los proyectos de vida hacia una convivencia armónica e integral.

    p.mb-5 En el ámbito profesional y laboral, algunos ejemplos de conductas éticas generales incluyen:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.col-sm-6
        img.mb-3(src='@/assets/curso/temas/Tema1/img5.png', alt='Texto que describa la imagen') 
      .col-lg-9
        SlyderF.custom.mb-5(columnas="col-lg-3 col-xl-3 col-md-5")
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.mb-5
              .col-7
                figure
                  img.mb-3(src='@/assets/curso/temas/Tema1/1.svg', alt='Texto que describa la imagen')
              p.text-small.text-center Comprender a los clientes de manera individual y contextual, teniendo en cuenta su entorno.
          
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.mb-2
              .col-7
                figure
                  img.mb-3(src='@/assets/curso/temas/Tema1/2.svg', alt='Texto que describa la imagen')
              p.text-small.text-center Defender los conocimientos adquiridos, las metodologías implementadas y los valores inherentes a la profesión.
          
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.mb-4
              .col-7
                figure
                  img.mb-3(src='@/assets/curso/temas/Tema1/3.svg', alt='Texto que describa la imagen')
              p.text-small.text-center Reconocer las limitaciones tanto personales como profesionales, fomentando un aprendizaje continuo.
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.mb-4
              .col-7
                figure
                  img.mb-4(src='@/assets/curso/temas/Tema1/4.svg', alt='Texto que describa la imagen')
              p.text-small.text-center Promover la utilidad mediante el uso de canales adecuados y actuando de manera responsable.
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.mb-5
              .col-7
                figure
                  img.mb-5(src='@/assets/curso/temas/Tema1/5.svg', alt='Texto que describa la imagen')
              p.text-small.text-center Facilitar y distribuir oportunidades de conocimiento de forma equitativa.
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.mb-1
              .col-7
                figure
                  img.mb-3(src='@/assets/curso/temas/Tema1/6.svg', alt='Texto que describa la imagen')
              p.text-small.text-center Alertar a los organismos correspondientes, tanto dentro como fuera del entorno profesional, cuando sea necesario para garantizar el cumplimiento ético.
          .tarjeta--boton.color-primario.p-4.tb
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img.mb-3(src='@/assets/curso/temas/Tema1/7.svg', alt='Texto que describa la imagen')
              p.text-small.text-center Proteger y apoyar a los colegas en situaciones de injusticia o trato desigual.
      .py-4  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 4.
            span Criterios generales de la ética laboral
          figure
            img.mb-3(src='@/assets/curso/temas/Tema1/figura4.svg', alt='La figura describe los criterios generales de la ética profesional, organizados en tres secciones interrelacionadas. En la primera, se resalta la importancia de comprender a cada cliente y su entorno, preservar los valores y conocimientos de la profesión, y atender las necesidades sociales. La segunda se enfoca en reconocer las propias limitaciones, fomentar el uso adecuado de técnicas y conocimientos, y emplear métodos válidos para el desarrollo profesional. La tercera aborda la contribución a políticas y programas sociales, la interpretación de problemáticas sociales desde diversas perspectivas, y la claridad en las declaraciones públicas o en las actuaciones profesionales, ya sea de manera individual o en representación de una organización. ')
          figcaption Fuente: SENA

    separador
    #t_1_5.titulo-segundo.mb-5
      h2 1.5  Consideraciones y reconocimiento de la ética en los ámbitos humanos

    p.mb-5 Los seres humanos necesitan normas y principios que orienten su conducta para poder convivir en sociedad, de igual forma, la sociedad requiere un conjunto mínimo de reglas que permitan fomentar una convivencia armónica, tanto en el ámbito familiar como en el laboral.
    .cajon.color-primario.p-4.mb-4
      p Por naturaleza, los individuos pueden cometer errores, mostrar debilidades de carácter, enfrentar frustraciones y fracasos, e incluso dejarse llevar por actitudes egoístas que les impiden actuar con empatía y solidaridad hacia los demás. Es en este contexto donde la ética desempeña un papel fundamental, proporcionando reflexiones y principios que buscan orientar el comportamiento humano hacia valores más elevados, como la responsabilidad, la justicia y el respeto mutuo.

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Consideraciones éticas fundamentales


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.tarjeta1.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-12
            p.mb-0 El respeto a la autonomía, exige que a quienes tienen la capacidad de considerar detenidamente los pro y contra de sus decisiones, se les debe tratar con el debido respeto por su capacidad de autodeterminación.
      
      .col-md.tarjeta.tarjeta2.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-12
            p.mb-0.text-white La protección de las personas con autonomía disminuida, exige que quienes sean dependientes o vulnerables reciban resguardo contra el daño o el abuso.
      .py-2
      figcaption Fuente: SENA

    separador
    #t_1_6.titulo-segundo.mb-5
      h2 1.6  Competencias éticas en lo laboral y su desarrollo

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .cajon.fondo-puntos.p-4.mb-5
          br
          p Las competencias pueden definirse como el conjunto integrado de capacidades, actitudes y conocimientos adquiridos para ejecutar de manera eficaz una actividad laboral. Estas competencias representan repertorios de comportamientos que algunas personas logran dominar con mayor destreza que otras, permitiéndoles actuar con mayor eficacia en situaciones específicas.
          .bloque-texto-d__autor.mb-2
            p - Levy-Leboyer, 1997.
    
    p.mb-5 En el ámbito laboral, las competencias éticas son fundamentales, ya que no solo garantizan la calidad y efectividad en las tareas, sino que también promueven la integridad, el respeto y la responsabilidad, valores esenciales para el desarrollo sostenible y la convivencia en el entorno profesional.
    
    ImagenInfografica.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/Tema1/info.png', alt='Texto que describa la imagen')
       

      .tarjeta.color-primario.p-3(x="17%" y="50%" numero="1")
        h5.mb-2 Conocimientos
        p Los conocimientos teórico-prácticos y la experiencia adquirida a lo largo de la trayectoria profesional son necesarios para el desempeño en el puesto de trabajo.

      .tarjeta.color-primario.p-3(x="50%" y="50%" numero="2")
        h5.mb-2 Habilidades
        p Capacidades y destrezas genéricas y específicas, que permiten garantizar el éxito en el desempeño del puesto de trabajo.

      .tarjeta.color-primario.p-3(x="83%" y="50%" numero="3")
        h5.mb-2 Actitudes
        p Características o rasgos de la personalidad de un sujeto que determinan su correcta actuación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p.mb-2 La competencia implica desarrollar capacidades que trascienden la mera calificación, pues no se limita al saber hacer técnico, sino que integra habilidades sociales y personales. 
          span - Bazdresch (1998).
        
    p.mb-5 Una competencia combina destrezas prácticas con comportamientos como trabajar en equipo, asumir riesgos y demostrar iniciativa, estas no solo se adquieren en el ámbito académico, sino también a través del esfuerzo y la experiencia laboral, donde se integran conocimientos teóricos y prácticos con cualidades innatas o adquiridas, favoreciendo habilidades como la comunicación, la resolución de conflictos y las relaciones interpersonales.
    .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
      p Las competencias van más allá de las habilidades, ya que suponen el dominio de procesos y métodos que permiten aprender de la práctica, la experiencia y las interacciones humanas. A través de capacitaciones, es posible desarrollar estas competencias, lo que no solo facilita alcanzar metas académicas y profesionales, sino que también mejora la calidad de vida.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
