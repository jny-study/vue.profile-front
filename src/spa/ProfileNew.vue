<template>
  <div class='profile-new'>
    <div class='new-container'>
      <form v-on:submit.prevent=''>
        <!-- basic-info -->
        <div class='profile-basic-container'>
          <!-- user-image -->
          <div class='profile-user-image'>
            <div class='image-box'>
              <img class='user-image' src='https://images.unsplash.com/photo-1538374045472-8e749da1ab4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e395cd8c36f1f30d67bf62ab65f899ee&auto=format&fit=crop&w=634&q=80' />
            </div>
            <div class='image-upload-box'>
              <input class='upload-user-iamge' type='file' accept='image/*'/>
            </div>
          </div>
          <!-- basic-info input box -->
          <div class='profile-basic-info'>
            <div class='info-left'>
              <div class='profile-category'><div class='input-inline'><span>분류</span></div><div class='input-inline'><input type='text' /></div></div>
              <div class='profile-name'><div class='input-inline'><span>이름</span></div><div class='input-inline'><input type='text' /></div></div>
              <div class='profile-phone'><div class='input-inline'><span>핸드폰</span></div><div class='input-inline'><input type='text' /></div></div>
              <div class='profile-email'><div class='input-inline'><span>이메일</span></div><div class='input-inline'><input type='text' /></div></div>
              <div class='profile-birth'><div class='input-inline'><span>생년월일</span></div><div class='input-inline'><input type='text' /></div></div>
            </div>
            <div class='info-right'>
              <div class='profile-sex'><div class='input-inline'><span>성별</span></div><div class='input-inline'><input type='text' /></div></div>
              <div class='profile-age'><div class='input-inline'><span>나이</span></div><div class='input-inline'><input type='text' /></div></div>
              <div class='profile-blood'><div class='input-inline'><span>혈액형</span></div><div class='input-inline'><input type='text' /></div></div>
              <div class='profile-job'><div class='input-inline'><span>직업</span></div><div class='input-inline'><input type='text' /></div></div>
              <div class='profile-hobby'><div class='input-inline'><span>취미</span></div><div class='input-inline'><input type='text' /></div></div>
            </div>
          </div>
        </div>
        <!-- detail-info -->
        <div class='profile-detail-container'>
          <button class='profile-detail-button' type='button' v-if='isOpen' @click='what'>상세 정보 입력 닫기</button>
          <button class='profile-detail-button' type='button' v-else @click='what'>상세 정보 입력</button>
          <!-- detail-info input box -->
          <div v-show='isOpen' class='profile-detail-info'>
            <div class='profile-zipcode input-inline'>
              <div class='input-inline'><span>우편변호</span></div><div class='input-inline'><input type='text' /><button>찾기</button></div>
            </div>
            <div class='profile-nickname input-inline'>
              <div class='input-inline'><span>별명</span></div><div class='input-inline'><input type='text' /></div>
            </div>
            <div class='profile-religion input-inline'>
              <div class='input-inline'><span>종교</span></div><div class='input-inline'><input type='text' /></div>
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
                  <div class='input-inline'><span>직장명</span></div><div class='input-inline'><input type='text' /></div>
                </div>
                <div class='company-departments input-inline'>
                  <div class='input-inline'><span>부서</span></div><div class='input-inline'><input type='text' /></div>
                </div>
                <div class='company-position input-inline'>
                  <div class='input-inline'><span>직책</span></div><div class='input-inline'><input type='text' /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'profile-new',
  data: function() {
    return {
      isOpen: true,
    }
  },
  methods: {
    hello: function() {
      let x = document.getElementById('profile-detail-container');
      if(x.style.display === 'none') { return x.style.display = 'block'; }
      else { return x.style.display = 'none'; }
    },
    what: function() {
      console.log(this.isOpen);
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    }
  }
}
</script>
<style scoped>
  .new-container {
    background-color: #f8f8f7;
    border-top: solid 2px #000000;
    padding: 6% 4%;
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
  .profile-user-image {
    position: relative;
    float: left;
    width: 12rem;
    height: 15rem;
  }
  .profile-user-image .image-box {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .profile-user-image .image-upload-box {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .profile-user-image .image-upload-box .upload-user-iamge {
    width: 100%;
    height: 100%;
    text-decoration-style: none;
    border: solid 1px black;
    cursor: pointer;
    /* opacity: 0; */
  }
  .user-image {
    max-width:100%;
    max-height:100%;
  }
  .profile-basic-info { margin-left: 13rem; font-size: 24px; }
  .profile-basic-info .info-left { float: left; }
  .profile-basic-info .info-left .input-inline span{ display: inline-block; min-width: 6vw; }
  .profile-basic-info .info-right .input-inline span{ display: inline-block; min-width: 4vw; }
  .profile-basic-info .info-right .input-inline input { width: 8rem; }

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
  .button {
    text-decoration: none;
    height: 2.4rem;
    background-color: #727171;
    color: white;
    border: solid 1px #727171;
    padding: 0.3rem 1.3rem;
  }
</style>