<template>
  <div id='profile-basic'>
    <!-- basic-info -->
    <div class='profile-basic-container'>
      <!-- user-image -->
      <div class='profile-user-image'>
        <div class='image-box'>
          <img class='user-image' :src='image' />
        </div>
        <div class='image-upload-box'>
          <!-- <input class='upload-user-iamge' v-bind:name='image' type='file' accept='image/*'/> -->
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
              <input type='text' />
            </div>
          </div>
          <div class='profile-name'>
            <div class='input-inline'>
              <span>이름</span>
            </div>
            <div class='input-inline'>
              <input type='text' />
            </div>
          </div>
          <div class='profile-phone'>
            <div class='input-inline'>
              <span>핸드폰</span>
            </div>
            <div class='input-inline'>
              <input type='text' />
            </div>
          </div>
          <div class='profile-email'>
            <div class='input-inline'>
              <span>이메일</span>
            </div>
            <div class='input-inline'>
              <input type='text' />
            </div>
          </div>
          <div class='profile-birth'>
            <div class='input-inline'>
              <span>생년월일</span>
            </div>
            <div class='input-inline'>
              <input type='text' />
            </div>
          </div>
        </div>
        <div class='info-right'>
          <div class='profile-sex'>
            <div class='input-inline'>
              <span>성별</span>
            </div>
            <div class='input-inline'>
              <input type='text' />
            </div>
          </div>
          <div class='profile-age'>
            <div class='input-inline'>
              <span>나이</span>
            </div>
            <div class='input-inline'>
              <input type='text' number />
            </div>
          </div>
          <div class='profile-blood'>
            <div class='input-inline'>
              <span>혈액형</span>
            </div>
            <div class='input-inline'>
              <input type='text' />
            </div>
          </div>
          <div class='profile-job'>
            <div class='input-inline'>
              <span>직업</span>
            </div>
            <div class='input-inline'>
              <input type='text' />
            </div>
          </div>
          <div class='profile-hobby'>
            <div class='input-inline'>
              <span>취미</span>
            </div>
            <div class='input-inline'>
              <input type='text' />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { upload } from '@/commons/functions/upload'
export default {
  name: 'profile-basic',
  // props: ['image']
  props: {
    image: {
      type: String,
    }
  },
  methods: {
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
      reader.onload = (event) => this.$emit('getChangeImage', event.target.result)
      reader.readAsDataURL(image)
    }
  }
}
</script>
<style scoped>
  .input-inline { display: inline-block; margin: 0.5rem;}
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
</style>

