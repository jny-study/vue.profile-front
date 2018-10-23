<template>
  <div class='profile-modify'>
    <div class='new-container'>
      <form v-on:submit.prevent='modifyProfile'>
        <!-- basic-info -->
        <div class='profile-basic-container'>
          <!-- user-image -->
          <div class='profile-user-image'>
            <div class='image-box'>
              <img class='user-image' :src='user.image'>
            </div>
            <div class='image-upload-box'>
              <input class='upload-user-iamge' type='file' accept='image/*' @change='onChangeImage($event.target.files)'/>
            </div>
          </div>
          <!-- basic-info input box -->
          <div class='profile-basic-info'>
            <div class='info-left'>
              <div class='profile-category'>
                <div class='input-inline'>
                  <span>분류</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.category' />
                </div>
              </div>
              <div class='profile-name'>
                <div class='input-inline'>
                  <span>이름</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.name' />
                </div>
              </div>
              <div class='profile-phone'>
                <div class='input-inline'>
                  <span>핸드폰</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.mobile' />
                </div>
              </div>
              <div class='profile-email'>
                <div class='input-inline'>
                  <span>이메일</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.email' />
                </div>
              </div>
              <div class='profile-birth'>
                <div class='input-inline'>
                  <span>생년월일</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.birthDay' />
                </div>
              </div>
            </div>
            <div class='info-right'>
              <div class='profile-sex'>
                <div class='input-inline'>
                  <span>성별</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.sex'>
                </div>
              </div>
              <div class='profile-age'>
                <div class='input-inline'>
                  <span>나이</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.age'>
                </div>
              </div>
              <div class='profile-blood'>
                <div class='input-inline'>
                  <span>혈액형</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.blood'>
                </div>
              </div>
              <div class='profile-job'>
                <div class='input-inline'>
                  <span>직업</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.job'>
                </div>
              </div>
              <div class='profile-hobby'>
                <div class='input-inline'>
                  <span>취미</span>
                </div>
                <div class='input-inline'>
                  <input type='text' v-model='user.hobby'>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- detail-info -->
        <div class='profile-detail-container'>
          <button
            class='profile-detail-button'
            type='button'
            v-if='isOpen'
            @click='toggleDetailBox()'
          >상세 정보 닫기</button>
          <button
            class='profile-detail-button'
            type='button'
            v-else
            @click='toggleDetailBox()'
          >상세 정보 보기</button>
          <!-- detail-info input box -->
          <div v-show='isOpen' class='profile-detail-info'>
            <div class='profile-zipcode input-inline'>
              <div class='input-inline'>
                <span>우편변호</span>
              </div>
              <div class='input-inline'>
                <input type='text' v-model='user.userAddress.zipCode'>
              </div>
            </div>
            <div class='profile-nickname input-inline'>
              <div class='input-inline'>
                <span>별명</span>
              </div>
              <div class='input-inline'>
                <input type='text' v-model='user.nickName'>
              </div>
            </div>
            <div class='profile-religion input-inline'>
              <div class='input-inline'>
                <span>종교</span>
              </div>
              <div class='input-inline'>
                <input type='text' v-model='user.religion'>
              </div>
            </div>
            <div class='profile-address input-inline'>
              <div class='input-inline'>
                <span>주소</span>
              </div>
              <div class='address input-inline'>
                <input
                  class='address-input'
                  type='text'
                  v-model='user.userAddress.address'
                >
              </div>
              <div class='street input-inline'>
                <input
                  class='address-input'
                  type='text'
                  v-model='user.userAddress.street'
                >
              </div>
            </div>
            <div class='profile-company'>
              <div class='profile-company-now'>
                <div class='company-name input-inline'>
                  <div class='input-inline'>
                    <span>직장명</span>
                  </div>
                  <div class='input-inline'>
                    <input type='text' v-model='user.company.name'>
                  </div>
                </div>
                <div class='company-departments input-inline'>
                  <div class='input-inline'>
                    <span>부서</span>
                  </div>
                  <div class='input-inline'>
                    <input type='text' v-model='user.company.departments'>
                  </div>
                </div>
                <div class='company-position input-inline'>
                  <div class='input-inline'>
                    <span>직책</span>
                  </div>
                  <div class='input-inline'>
                    <input type='text' v-model='user.company.position'>
                  </div>
                </div>
              </div>
            </div>
            <div class='profile-character'>
              <div class='character-item'>
                <span>성격</span>
              </div>
              <div class='character-item'>
                <textarea v-model='user.character'></textarea>
              </div>
            </div>
          </div>
          <!-- detail-info input box -->
        </div>
        <!-- detail-info -->
        <div class='profile-submit-button'>
          <button>추가</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-modify',
  data: function() {
    return {
      isOpen: false,
      user: {
        "image": "",
        "category": "",
        "name" : "",
        "mobile" : "",
        "email" : "",
        "birthDay" : "",
        "sex" : "",
        "age" : "",
        "blood" : "",
        "job" : "",
        "hobby" : "",
        "nickName" : "",
        "religion" : "",
        "userAddress" : {
          "address" : "",
          "street" : "",
          "zipCode" : ""
        },
        "company" : {
          "name" : "",
          "departments" : "",
          "position" : ""
        },
        "character" : ""
      },
    }
  },
  methods: {
    modifyProfile() {
      console.log(this.user)
      this.$http.put(`http://127.0.0.1:3000/${this.user._id}`, this.user)
      .then(response => { if(response.data.ok) this.$router.replace({ name: 'profileDetail', params: { id: this.user._id }})})
    },
    toggleDetailBox() {
      this.isOpen = !this.isOpen;
    },
    onChangeImage(images) {
      if(!images.length) console.log('err')
      const userImage = images[0]
      this.createImage(userImage)
    },
    createImage(image) {
      console.log(image)
      const reader = new FileReader()
      // this 설명하기에 좋은 예제
      // reader.onload = (function(aImage) {
      //   return function(event) {
      //     this.$emit('getChangeImage', event.target.result)
      //   }
      // })(image)
      // reader.onload = (event) => this.$emit('getChangeImage', event.target.result)
      reader.onload = (event) => this.user.image = event.target.result
      reader.readAsDataURL(image)
    },
  },
  created() {
    this.$http.get(`http://127.0.0.1:3000/edit/${this.$route.params.id}`)
    .then(response => this.user = response.data)
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