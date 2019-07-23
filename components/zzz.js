var ZzzPage = Vue.component('Zzz', {
  /*html*/
  template: `
<div>
  <p>
    Byłeś osobą {{ $root.person }}.
    Byłeś na stronach: {{ JSON.stringify($root.history, null, 2) }}
  </p>
  <p>To już koniec.</p>
  <p v-if="$root.person === '1' && $root.history.includes('bbb')">
    Jako osoba 1 wybrałeś bbb? Tragicznie!
  </p>
  <p v-if="$root.history.includes('ccc')">
    A więc wybrałeś c? Ależ doskonały wybór!
  </p>
  <h2>Chcesz pozostać w kontakcie?</h2>
  <form v-on:submit.prevent="onSubmit">
    <input v-model="email" type="email" />
    <button type="submit">wyślij</button>
    <p v-if="pending">wysyłanie…</p>
  </form>
</div>
`,
  data: function() {
    return {
      email: '',
      pending: false,
    }
  },
  mounted: function() {
    this.$root.pushToHistory('zzz');
  },
  methods: {
    onSubmit: function() {
      this.pending = true;
      fetch('contact-form.php', {
        method: 'POST',
        body: JSON.stringify({
          email: this.email,
          history: this.$root.history,
          person: this.$root.person,
        }),
      }).then(
        () => {
          this.pending = false;
          this.email = '';
        },
        () => {
          this.pending = false;
        },
      );
    },
  }
});
