const app = Vue.createApp({
  data() {
    return {
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
})

app.mount('#editor')