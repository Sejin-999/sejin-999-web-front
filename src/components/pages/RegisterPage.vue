<template>
  <div id="main_register">
    <div class="box_register">
      <form>
        <span class="text-center">회원가입</span>
        <div class="input-container">
          <input type="text" required=""  ref="userIdInput"/>
          <label>ID</label>
        </div>
        
        <div class="input-container">
          <input type="password" required="" ref="userPasswordInput"/>
          <label>PassWord</label>
        </div>
        
        <div class="input-container">
          <input type="text" required="" ref="userNickNameInput"/>
          <label>NickName</label>
        </div>
        
        <button type="button" class="btn" @click="submitForm">submit</button>
        <router-link to="/" class="btn-home">Home</router-link>
      </form>
    </div>
  </div>
    <!-- 모달 컴포넌트 사용 -->
    <register-success-modal ref="successModal"></register-success-modal>
    <register-fail-modal ref="failModal"></register-fail-modal>
</template>
<script>
import RegisterSuccessModal from '@/components/common/RegisterSuccessModal.vue';
import RegisterFailModal from '@/components/common/RegisterFailModal.vue';

import axios from 'axios';

export default {
    components: {
    'register-success-modal': RegisterSuccessModal, 
    "register-fail-modal" : RegisterFailModal,
  },

  methods: {
    async submitForm() {
      const userId = this.$refs.userIdInput.value;
      const userPassword = this.$refs.userPasswordInput.value;
      const userNickName = this.$refs.userNickNameInput.value;

      const data = {
        userId: userId,
        userPassword: userPassword,
        userNickName: userNickName,
      };

      try {
        const response = await axios.post('http://localhost:8080/api/v1/user/register', data);

        if (response.status === 200) {
          // 회원가입 성공 시 모달 표시
          this.$refs.successModal.showSuccessModal();
        } else {
          // 회원가입 실패 모달 표시
          this.$refs.failModal.showFailModal();
      }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');

#main_register {
  background-position: center;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  font-family: 'Noto Sans', sans-serif;
}

.text-center {
  color: #fff;
  text-transform: uppercase;
  font-size: 23px;
  margin-top: 3rem;
  display: block;
  text-align: center;
}

.box_register {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.89);
  border-radius: 3px;
  padding: 70px 100px;
}

.input-container {
  position: relative;
  margin-bottom: 25px;
  margin: 4rem 3rem;
}

.input-container label {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 16px;
  color: #fff;
  transition: all 0.5s ease-in-out;
}

.input-container input {
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: #fff;
}

.input-container input:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid #e74c3c;
}

.btn {
  color: #fff;
  background-color: #e74c3c;
  outline: none;
  border: 0;
  color: #fff;
  display: flex;
  padding: 10px 20px;
  margin-left: 6rem;
  text-transform: uppercase;
  margin-top: 50px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}
.btn-home{
  color: #fff;
  background-color: #1dce58;
  outline: none;
  border: 0;
  color: #fff;
  display: flex;
  padding: 10px 25px;
  margin-left: 6rem;
  width: 48px;
  text-transform: uppercase;
  margin-top: 50px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}

.input-container input:focus ~ label,
.input-container input:valid ~ label {
  top: -12px;
  font-size: 12px;
}
</style>