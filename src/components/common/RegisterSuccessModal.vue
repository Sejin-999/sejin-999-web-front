<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal-container">
      
      <!-- 모달 내용 및 회원가입 성공 메시지 표시 -->
      <div class="modal-content">
        <p>회원가입이 성공적으로 완료되었습니다!</p>
        <button @click="redirectToLogin">로그인 화면으로 이동</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showSuccessModal() {
      this.showModal = true;
    },
    redirectToLogin() {
      this.showModal = false;
      this.$router.push({ name: 'LoginPage' });
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.modal-content {
  text-align: center;
}

</style>
