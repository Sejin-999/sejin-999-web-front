<template>
  <div id="main">
      <h1 class="intro_title">Sejin 999 개발&공부 기록</h1>
      <div class="intro_box">
        <div class="intro_box_content">
          <span>만드는게 재밌어서 개발 공부를 시작한 세진입니다</span>
          <div class="intro_box_content_link">
          <span><a href="https://github.com/Sejin-999">GitHub</a></span>
          <span><a href="https://github.com/Sejin-999">Portfolio</a></span>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
</script>

<style>
#main {
  position: absolute;
  top: 50%; 
  left: 150px;
  transform: translateY(-50%); 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}

.intro_title {
  margin-bottom: 2rem;
  font-size: 2rem;
  margin-top: 3rem;
}

.intro_box {
  display: flex;
  width: 100%;
  height: 500px;
}
.intro_box_content_link :first-child{
  margin-right: 1rem;
}
.intro_box:first-child {
  border-right: 1px solid black;
}
.intro_box_content_link{
  margin-top:2rem;
}
.intro_box_content {
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px; 
}


.intro_box_content a {
  color: #0078d4;
  text-decoration: none;
  font-weight: bold;
}


</style>