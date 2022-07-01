<template>
  <div class="hello">
    <el-button @click="submit500">500错误</el-button>
    <el-button @click="submit200">200正常</el-button>
    <el-button @click="submit404">404NotFound</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    submit500() {
      this.$axios({
        method: 'get',
        url: 'http://127.0.0.1:8082/hello/test50x',
        params: {},
      }).then(function (response) {
        console.log(response)
      })
    },
    submit200() {
      this.$axios({
        method: 'get',
        url: 'http://127.0.0.1:8082/hello/test20x',
        params: {},
      }).then(function (response) {
        console.log(response)
      })
    },
    submit404() {
      this.$axios({
        method: 'get',
        url: 'http://127.0.0.1:8082/hello/test40x',
        params: {},
      }).then(function (response) {
        console.log(response)
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
