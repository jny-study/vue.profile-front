<template>
  <div class='profile-new'>
    <div class='new-container'>
      <form v-on:submit.prevent='addProfile'>
        <!-- 앞: 보낼 데이터명, 뒤: 받는 props명 -->
        <!-- 앞: 보낼 데이터명, 뒤: 함수명 -->
        <profile-basic
          :image='image'
          v-on:getChangeImage='changeImage'></profile-basic>
        <!-- <profile-basic :basicInfo="basicInfo"></profile-basic> -->
        <!-- <profile-basic v-bind:basicInfo="basicInfo"></profile-basic> -->
        <!-- detail-info -->
        <div class='profile-detail-container'>
          <button class='profile-detail-button' type='button' v-if='isOpen' @click='toggleDetailBox()'>상세 정보 입력 닫기</button>
          <button class='profile-detail-button' type='button' v-else @click='toggleDetailBox()'>상세 정보 입력</button>
          <!-- detail-info input box -->
          <div v-show='isOpen' class='profile-detail-info'>
            <div class='profile-zipcode input-inline'>
              <div class='input-inline'>
                <span>우편변호</span>
              </div>
              <div class='input-inline'>
                <input type='text' />
                <button>찾기</button>
              </div>
            </div>
            <div class='profile-nickname input-inline'>
              <div class='input-inline'><span>별명</span></div>
              <div class='input-inline'><input type='text' /></div>
            </div>
            <div class='profile-religion input-inline'>
              <div class='input-inline'><span>종교</span></div>
              <div class='input-inline'><input type='text' /></div>
            </div>
            <div class='profile-address input-inline'>
              <div class='input-inline'>
                <span>주소</span>
              </div>
              <div class='address input-inline'>
                <input class='address-input' type='text' />
              </div>
              <div class='street input-inline'>
                <input class='address-input' type='text' />
              </div>
            </div>
            <div class='profile-company'>
              <div class='profile-company-now'>
                <div class='company-name input-inline'>
                  <div class='input-inline'><span>직장명</span></div>
                  <div class='input-inline'><input type='text' /></div>
                </div>
                <div class='company-departments input-inline'>
                  <div class='input-inline'><span>부서</span></div>
                  <div class='input-inline'><input type='text' /></div>
                </div>
                <div class='company-position input-inline'>
                  <div class='input-inline'><span>직책</span></div>
                  <div class='input-inline'><input type='text' /></div>
                </div>
              </div>
            </div>
            <div class='profile-character'>
              <div class='character-item'><span>성격</span></div>
              <div class='character-item'><textarea></textarea></div>
            </div>
          </div> <!-- detail-info input box -->
        </div> <!-- detail-info -->
        <div class='profile-submit-button'>
          <button>추가</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ProfileBaisc from '@/shared-components/ProfileBasic.vue'
export default {
  name: 'profile-new',
  components: {
    'profile-basic': ProfileBaisc

  },
  data: function() {
    return {
      isOpen: false,
      image: 'https://steemitimages.com/0x0/https://media.giphy.com/media/l2QEfVTjzpZqQF6ik/giphy.gif',
      category: '',
      name: '',
      mobile: '',
      email: '',
      birthDay: '',
      sex: '',
      age: '',
      blood: '',
      job: '',
      hobby: '',
      nickName: '',
      religion: '',
      zipCode: '',
      address: '',
      street: '',
      companyName: '',
      companyDepartments: '',
      companyPosition: '',
      character: '',
    }
  },
  methods: {
    toggleDetailBox() {
      this.isOpen = !this.isOpen;
    },
    addProfile() {
      console.log(this.image);
      return alert('hh');
    },
    changeImage(value) {
      this.image = value
      console.log(value, 'hello test');

    }
    
  }
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
  .input-inline { display: inline-block; margin: 0.5rem;}
  /* .profile-basic-info {
    background-color: #f8f8f7;
    border-top: solid 2px #000000;
    padding: 6% 4%;
    width: 50%;
    margin: 0 auto;
  } */

  /* profile-datail-container css start */
  .profile-detail-container { margin-top: 2rem; }
  .profile-detail-container .profile-detail-button {
    cursor: pointer;
    background-color: #f8f8f7;
    border: 0;
  }
  .profile-detail-container .profile-address span { display: inline-block; min-width: 3.4rem; }
  .profile-detail-container .profile-zipcode span { display: inline-block; min-width: 3.4rem; }
  .profile-detail-container .profile-company .company-name span { display: inline-block; min-width: 3.4rem; }
  .profile-detail-container .profile-company .company-name input { margin-right: 2.7rem; }
  .profile-detail-container .profile-address .address-input { min-width: 20rem; }
  .profile-detail-container .profile-character .character-item { margin: 1rem; }
  .profile-detail-container .profile-character .character-item textarea { min-width: 100%; height: 6.25rem; }
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