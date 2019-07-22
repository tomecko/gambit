var routes = [
  { path: '/',         component: StartPage },
  { path: '/aaa',      component: AaaPage },
  { path: '/bbb',      component: BbbPage },
  { path: '/ccc',      component: CccPage },
  { path: '/zzz',      component: ZzzPage },
  { path: '*', redirect: '/' },
];

var router = new VueRouter({ routes: routes });

var STORAGE_KEY = 'data';

var app = new Vue({
  data: {
    store: {
      history: [],
      person: undefined,
    },
  },
  computed: {
    history: function() {
      return this.$data.store.history;
    },
    person: function() {
      return this.$data.store.person;
    },
  },
  el: '#app',
  mode: 'history',
  router: router,
  methods: {
    dataIsEmpty: function() {
      return !this.$data.store.history && !this.$data.store.person;
    },
    persist: function() {
      if (!this.dataIsEmpty()) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.$data.store));
      }
    },
    clearHistory: function() {
      this.$root.$data.store = { ...this.$root.$data.store, history: [] };
    },
    pushToHistory: function(value) {
      if (this.$root.$data.store.history) {
        this.$root.$data.store = {
          ...this.$root.$data.store,
          history: this.$root.$data.store.history.concat(value),
        };
      }
    },
  },
  mounted: function() {
    var storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      var parsed = JSON.parse(storedData);
      this.$data.store = parsed;
    }
  },
  watch: {
    store: function(h) {
      this.persist();
    },
  },
});
