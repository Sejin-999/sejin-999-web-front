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
          <div v-for="intro in data.introList" :key="intro.introSeq" class="horizontal-item">
            <a :href="'/intro/' + intro.introSeq">
                <p>{{ intro.introSeq }}</p>
                <h3>{{ intro.introTitle }}</h3>
                <p>{{ formattedDate2[intro.introSeq] }}</p>
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
    const numberValue = this.$route.params.Index;
    const apiUrl = `http://localhost:8080/api/v1/index/index_detail/${numberValue}`;

    axios.get(apiUrl)
      .then(response => {
        this.data = response.data;
        this.formattedDate = new Date(this.data.lastUpdate).toLocaleDateString();
        
        // introList 내의 각 항목에 대해 formattedDate2 설정
        this.formattedDate2 = {};
        this.data.introList.forEach(intro => {
          this.formattedDate2[intro.introSeq] = new Date(intro.lastUpdate).toLocaleDateString();
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

<style>
  #main_Index {
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  text-align: center;
}
#main_Index {
  display: flex;
  flex-direction: column;
}

.box {
  flex: 2;
   width: 100%;
   height: 100%;
}

.box > div:nth-child(1) {
  flex: 2;
  height: 10%;
  border-bottom:1px solid black ;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  padding-bottom: 1rem;
}
.box > div:nth-child(1) > :first-child{
    margin-right: 3rem;
}


.box > div:nth-child(2) {
  flex: 3;
  height: 40%;
  width: 100%;
  border-bottom:1px solid black ;
  display: flex;
}
.box > div:nth-child(2) > :first-child{
    flex:2;
    border-right: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box > div:nth-child(2) > div:nth-child(2){
    flex:3;
}


.box > div:nth-child(3) {
  flex: 4;
  height: 40%;
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.horizontal-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; 
}

.horizontal-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  margin: 0 20px; 
  text-align: center; 
  border : 1px solid rgba(0, 0, 0, 0.3);
  width: 10rem;
  height: 12rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.horizontal-item:hover{
    margin-top: 2rem;
}

.box_container_img {
  flex: 1;
  width: 100%;
  height: 100%; /* 박스 크기와 같게 설정하여 이미지가 꽉 차도록 함 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  background-image: url('C:\Users\SeJin\Desktop\sejin-999-web\sejin-999-web-front-vue\sejin-999-web-front\src\assets\blossom.png');
}
</style>