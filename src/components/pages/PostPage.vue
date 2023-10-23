<template>
    <div id="main_Post">
        <div class="postbox">
            <div class="postbox_title">
                <h2>{{data.title}}</h2>
                <div class="postbox_title_timeStamp">
                    <span>생성일 : {{formattedDate_create}}</span>
                    <span>수정일 : {{formattedDate_update}}</span>
                </div>
            </div>

            <div class="postbox_container">
                    <div class="postbox_container_detail">
                        <div class="postbox_container_detail_img">
            
                        </div>
                        <div class="postbox_container_detail_content">

                        </div>
                    </div>
            </div>
                        
        </div>
        <button @click="plusNum">plusNum 실행</button>
        <button @click="plusNum">minusNum 실행</button>
    </div>
</template>

<script>
import axios from 'axios';
var numberPost = 0;

export default {
      data() {
    return {
      data: {},
      formattedDate_update: '',
      formattedDate_create: '',
    };
  },
  mounted() {
    const numberValue = this.$route.params.Post;

    const apiUrl = `http://localhost:8080/api/v1/post/${numberValue}`;

    axios.get(apiUrl)
      .then(response => {
        this.data = response.data;
        this.formattedDate_update = new Date(this.data.lastUpdateTime).toLocaleDateString();
        this.formattedDate_create = new Date(this.data.createTime).toLocaleDateString();

        console.log("요청 성공:", this.data);
        this.makeIndex();
      })
      .catch(error => {
        console.error("요청 실패:", error);
      });
  },
   methods: {
        makeIndex(){
            const selectedDetail = this.data.postDetailListDAO[numberPost];

            const contentElement = document.querySelector(".postbox_container_detail_content");
            const imgElement = document.querySelector(".postbox_container_detail_img")
            contentElement.textContent = selectedDetail.content;
            imgElement.style.backgroundImage = `url(https://image.ytn.co.kr/osen/2023/01/4934c786-1e08-4f52-aca2-a600838e5655.jpg)`;
            //imgElement.style.backgroundImage = `url('${selectedDetail.imageUrl}')`;
            console.log(this.data.postDetailListDAO[numberPost]);
        },
        plusNum(){
            if(numberPost < this.data.postDetailListDAO.length-1){
                numberPost++;
                console.log(numberPost)
            }else{
                numberPost=0;
                console.log(numberPost)
            }

            this.makeIndex();
        },
        minusNum(){
            if(numberPost == 0){
                numberPost = this.data.postDetailListDAO.length-1
                console.log(numberPost)
            }else{
                numberPost--;
                console.log(numberPost)
            }

            this.makeIndex();
        },
   },
    name: "PostPage",
}
</script>


<style>
  #main_Post {
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 80%;
  text-align: center;
}
.postbox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.postbox_title{
    flex:1;
    border-bottom: 1px solid black;
    display: flex;
     justify-content: space-between;
}
.postbox_title :first-child{
    margin-left: 3rem;
}
.postbox_title :nth-child(2){
    margin-right: 3rem;
}

.postbox_title_timeStamp{
    display: flex;
    flex-direction: column;
}
.postbox_title_timeStamp :nth-child(2){
    padding-top: 1rem;
    padding-bottom:1rem ;
    margin-right: -3rem;
}

.postbox_container{
    flex:10;
    width: 100%;
    height: 100%;
}

.postbox_container_detail{
    width: 100%;
    display: flex;
    height: 100%;
    border-bottom: 1px solid black;
}

.postbox_container_detail_img{
  width: 40%;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url("@/assets/logo.png");
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}
.postbox_container_detail_content{
    width: 60%;
    height: 100%;
    border-right: 1px solid black;
}


</style>