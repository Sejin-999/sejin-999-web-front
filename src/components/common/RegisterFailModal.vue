<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal-container">
      <div class="modal-content">
        <p>회원가입이 실패 -- </p>
        <button @click="redirectToRegister">재시도</button>
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
    showFailModal() {
      this.showModal = true;
    },
    redirectToRegister() {
      this.showModal = false;
      this.$router.push({ name: 'RegisterPage' });
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
