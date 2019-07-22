var CccPage = Vue.component('Ccc', {
  /*html*/
  template: `
<div>
  <p>Jesteś osobą {{ $root.person }}</p>
  <p>Wybrałeś c. Świetnie.</p>
  <router-link to="/zzz">kończymy</router-link>
</div>
`,
  mounted: function() {
    this.$root.pushToHistory('ccc');
  },
});
