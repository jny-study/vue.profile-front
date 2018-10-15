<template>
  <div id='profile-detail'>
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
            <input type='text' v-model='detailInfo.userAddress.zipCode' />
            <button>찾기</button>
          </div>
        </div>
        <div class='profile-nickname input-inline'>
          <div class='input-inline'><span>별명</span></div>
          <div class='input-inline'><input type='text' v-model='detailInfo.nickName' /></div>
        </div>
        <div class='profile-religion input-inline'>
          <div class='input-inline'><span>종교</span></div>
          <div class='input-inline'><input type='text' v-model='detailInfo.religion' /></div>
        </div>
        <div class='profile-address input-inline'>
          <div class='input-inline'>
            <span>주소</span>
          </div>
          <div class='address input-inline'>
            <input class='address-input' type='text' v-model='detailInfo.userAddress.address' />
          </div>
          <div class='street input-inline'>
            <input class='address-input' type='text' v-model='detailInfo.userAddress.street' />
          </div>
        </div>
        <div class='profile-company'>
          <div class='profile-company-now'>
            <div class='company-name input-inline'>
              <div class='input-inline'><span>직장명</span></div>
              <div class='input-inline'><input type='text' v-model='detailInfo.company.name' /></div>
            </div>
            <div class='company-departments input-inline'>
              <div class='input-inline'><span>부서</span></div>
              <div class='input-inline'><input type='text' v-model='detailInfo.company.departments' /></div>
            </div>
            <div class='company-position input-inline'>
              <div class='input-inline'><span>직책</span></div>
              <div class='input-inline'><input type='text' v-model='detailInfo.company.position' /></div>
            </div>
          </div>
        </div>
        <div class='profile-character'>
          <div class='character-item'><span>성격</span></div>
          <div class='character-item'><textarea v-model='detailInfo.character'></textarea></div>
        </div>
      </div> <!-- detail-info input box -->
    </div> <!-- detail-info -->
  </div>
</template>
<script>
export default {
  name: 'profile-detail',
  data: function() {
    return {
      isOpen: false,
      detailInfo: {
        nickName: '',
        religion: '',
        userAddress: {
          address: '',
          street: '',
          zipCode: '',
        },
        company: {
          name: '',
          departments: '',
          position: '',
        },
        character: '',
      }
    }
  },
  props: {
    isSubmit: {
      type: Boolean,
    }
  },
  methods: {
    toggleDetailBox() {
      this.isOpen = !this.isOpen;
    },
    sendData(status) {
      if(!status) console.log('err')
      this.$emit('sendDetailInfo', this.detailInfo)
    }
  },
  created() {
    this.$EventBus.$on('nextStep', this.sendData)
  }
}
</script>
<style scoped>
  .input-inline { display: inline-block; margin: 0.5rem;}

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
</style>


