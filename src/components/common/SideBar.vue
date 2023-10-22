<template>
  <div class="nav_bar">
    <ul class="nav_list">
      <li class="nav_item" v-for="item in items" :key="item.seq">
        <a :href="'/index/' + item.seq">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetchData_indexList();
  },
  methods: {
    fetchData_indexList() {
      axios.get('http://localhost:8080/api/v1/index/index_list')
        .then(response => {
          // 요청이 성공하면 데이터를 저장
          this.items = response.data;
        })
        .catch(error => {
          // 요청이 실패하면 에러를 처리
          console.error(error);
        });
    },
  },
};
</script>

<style>
.nav_bar {
    position: fixed;
    top: 3rem;
    left: 0;
    bottom: 3rem;
    width: 150px;
    height: 85%;
    border-right: 1px solid black;
    display: flex;
    justify-content: center;
}
.nav_bar ul li:hover a {
  padding-top: 10px;
}

.nav_bar ul li{
    margin-top: 40px;
}

</style>
