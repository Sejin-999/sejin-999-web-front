<template>
   <div id="main_Index">
    <div class="box">
      <div class="box_title">
        <h2>{{ data.title }}</h2>
        <span>{{ formattedDate }}</span>
      </div>

      <div class="box_container">
        <div class="box_container_content">
          <span>{{ data.content }}</span>
        </div>
        <div class="box_container_img">
        </div>
      </div>

      <div class="indexList">
        <div class="horizontal-container">
          <div v-for="post in data.postList" :key="post.postSeq" class="horizontal-item">
            <a :href="data.introSeq+'/post/' + post.postSeq">
                <p>{{ post.postSeq }}</p>
                <h3>{{ post.title }}</h3>
                <p>{{ formattedDate2[post.postSeq] }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: {},
      formattedDate: '',
      formattedDate2: {}, // 객체로 변경
    };
  },
  mounted() {
    const numberValue = this.$route.params.Intro;
    const apiUrl = `http://localhost:8080/api/v1/intro/intro_list?introSeq=${numberValue}`;

    axios.get(apiUrl)
      .then(response => {
        this.data = response.data;
        this.formattedDate = new Date(this.data.lastUpdateTime).toLocaleDateString();
        
        this.formattedDate2 = {};
        this.data.postList.forEach(post => {
          this.formattedDate2[post.postSeq] = new Date(post.lastUpdateTime).toLocaleDateString();
        });
        
        console.log("요청 성공:", this.data);
      })
      .catch(error => {
        console.error("요청 실패:", error);
      });
  },
  name: "IndexListPage",
};
</script>
