var AaaPage = Vue.component('Aaa', {
  /*html*/
  template: `
<div>
  <p>Jesteś osobą {{ $root.person }}</p>
  <p>Przyszły ciężkie czasy. Musisz podjąć decyzję. Co wybierasz?</p>
  <router-link to="/bbb">wybieram b</router-link>
  <router-link to="/ccc">wybieram c</router-link>
</div>
`,
  mounted: function() {
    this.$root.pushToHistory('aaa');
  },
});
