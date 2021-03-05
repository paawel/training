<template>
  <ol>
     <li v-for="(item, key, index) in list" :key="index">
       Валюта
       <strong>{{item.Cur_Name}}:</strong>
       Код валюты:
       <strong>{{item.Cur_Code}}</strong>
     </li>
  </ol>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  name: "Currency",
  data() {
   return {
     url: 'https://www.nbrb.by/api/exrates/currencies',
     list: []
   }
  },
  mounted() {
    Vue.axios.get(this.url).then(res => {
      this.list = res.data;
    });
  }
}
</script>

<style scoped>
  ol {
    float: left;
    text-align: initial;
    color: #2c3e50;
    font-style: italic;
  }
</style>
