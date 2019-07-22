var StartPage = Vue.component('Start', {
  /*html*/
  template: `
<div>
  <h2>Podtytuł</h2>
  <p>Wyjaśnienia. Wprowadzenie. Wyjaśnienia. Wprowadzenie.</p>
  <p>Pytanie: czy chcesz być osobą 1 czy 2?</p>
  <button @click="$root.store.person = '1'">chcę być 1</button>
  <button @click="$root.store.person = '2'">chcę być 2</button>
  <p v-if="$root.$data.store.person">
    Jesteś osobą {{ $root.store.person }}
    <router-link to="/aaa">Idziemy dalej?</router-link>
  </p>
</div>
`,
  beforeRouteLeave: function(to, from, next) {
    this.$root.clearHistory();
    next();
  },
});
