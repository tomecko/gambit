var BbbPage = Vue.component('Bbb', {
  /*html*/
  template: `
<div>
  <p>Jesteś osobą {{ $root.person }}</p>
  <p>Wybrałeś b. Nie najlepiej.</p>
  <router-link to="/zzz">kończymy</router-link>
</div>
`,
  mounted: function() {
    this.$root.pushToHistory('bbb');
  },
});
