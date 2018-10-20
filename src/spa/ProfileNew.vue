<template>
  <div class='profile-new'>
    <div class='new-container'>
      <form v-on:submit.prevent='addProfile'>
        <!-- 앞: 보낼 데이터명, 뒤: 받는 props명 -->
        <!-- 앞: 보낼 데이터명, 뒤: 함수명 -->
        <profile-basic
          :isSubmit='isSubmit'
          v-on:sendBasicInfo='getBasicInfo'></profile-basic>
        <!-- <profile-basic :basicInfo="basicInfo"></profile-basic> -->
        <!-- <profile-basic v-bind:basicInfo="basicInfo"></profile-basic> -->
        <profile-detail
          @sendDetailInfo='getDetailInfo'></profile-detail>
        <div class='profile-submit-button'>
          <button>추가</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ProfileBasic from '@/shared-components/ProfileBasic.vue'
import ProfileDetail from '@/shared-components/ProfileDetail.vue'
export default {
  name: 'profile-new',
  components: {
    'profile-basic': ProfileBasic,
    'profile-detail': ProfileDetail
  },
  data: function() {
    return {
      isSubmit: false,
      profileInfo: [],
    }
  },
  methods: {
    addProfile() {
      if(this.isSubmit) alert('잘못된 접근')
      this.isSubmit = true
    },
    getBasicInfo(basicInfo) {
      this.profileInfo = Object.assign({}, basicInfo)
    },
    getDetailInfo(detailInfo) {
      Object.assign(this.profileInfo, detailInfo)
      this.$http.post('http://127.0.0.1:3000', this.profileInfo)
      .then(response => this.$router.push('/profile'))
    },
  },
}
</script>
<style scoped>
  .new-container {
    background-color: #f8f8f7;
    border-top: solid 2px #000000;
    padding: 6% 4% 4% 4%;
    width: 50%;
    margin: 0 auto;
  }
  /* .profile-basic-info {
    background-color: #f8f8f7;
    border-top: solid 2px #000000;
    padding: 6% 4%;
    width: 50%;
    margin: 0 auto;
  } */

  .new-container .profile-submit-button { text-align: center; margin-top: 3rem; }
  .new-container .profile-submit-button button{
    cursor: pointer;
    text-decoration: none;
    height: 2.4rem;
    background-color: #727171;
    color: white;
    border: solid 1px #727171;
    padding: 0.7rem 5.3rem;
  }
</style>