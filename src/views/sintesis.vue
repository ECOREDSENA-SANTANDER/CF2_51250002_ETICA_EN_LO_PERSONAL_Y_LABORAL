<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La ética desempeña un papel esencial tanto en la vida personal como en la laboral, regulando comportamientos y promoviendo una convivencia armónica basada en valores fundamentales, este marco ético abarca desde la promoción de la integridad individual hasta el fortalecimiento de la sostenibilidad y la transparencia en las organizaciones. Al integrarse en los ámbitos personales y empresariales, fomenta un impacto positivo en la sociedad, estableciendo criterios para la toma de decisiones responsables y el desarrollo de relaciones interpersonales y profesionales sólidas.
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama presenta las cuatro prendas que se trabajaron en el componente y los diferentes procesos que se deben llevar a cabo para su confección: falda, blusa, camisa y pantalón.")
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
