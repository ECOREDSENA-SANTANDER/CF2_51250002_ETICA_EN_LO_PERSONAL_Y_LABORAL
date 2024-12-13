<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La ética desempeña un papel esencial tanto en la vida personal como en la laboral, regulando comportamientos y promoviendo una convivencia armónica basada en valores fundamentales, este marco ético abarca desde la promoción de la integridad individual hasta el fortalecimiento de la sostenibilidad y la transparencia en las organizaciones. Al integrarse en los ámbitos personales y empresariales, fomenta un impacto positivo en la sociedad, estableciendo criterios para la toma de decisiones responsables y el desarrollo de relaciones interpersonales y profesionales sólidas.
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La figura organiza los principales conceptos de la ética en cuatro secciones clave: la relevancia de la ética en la vida personal y laboral, sus ámbitos de aplicación, el desarrollo histórico de la ética empresarial y los criterios generales que guían la ética profesional. Cada sección detalla cómo estas áreas contribuyen al éxito, a través de la promoción de valores como la confianza, la sostenibilidad, el bienestar colectivo y la responsabilidad social.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
