<template>
  <div class='profile-new'>
    <div class='new-container'>
      <form>
        <div class='profile-basic-info'>
          <div class='profile-user-image'>
            <div class='image-box'>
              <img class='user-image' src='https://images.unsplash.com/photo-1538374045472-8e749da1ab4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e395cd8c36f1f30d67bf62ab65f899ee&auto=format&fit=crop&w=634&q=80' />
            </div>
            <div class='image-upload-box'>
              <input class='upload-user-iamge' type='file' accept='image/*'/>
            </div>
          </div>
          <div class='profile-user-info'>
            <div class='profile-category'><div><span>분류</span></div><div><input type='text' /></div></div>
            <div class='profile-sex'><div><span>성별</span></div><div><input type='text' /></div></div>
            <div class='profile-name'><div><span>이름</span></div><div><input type='text' /></div></div>
            <div class='profile-age'><div><span>나이</span></div><div><input type='text' /></div></div>
            <div class='profile-phone'><div><span>핸드폰</span></div><div><input type='text' /></div></div>
            <div class='profile-blood'><div><span>혈액형</span></div><div><input type='text' /></div></div>
            <div class='profile-email'><div><span>이메일</span></div><div><input type='text' /></div></div>
            <div class='profile-job'><div><span>직업</span></div><div><input type='text' /></div></div>
            <div class='profile-birth'><div><span>생년월일</span></div><div><input type='text' /></div></div>
            <div class='profile-hobby'><div><span>취미</span></div><div><input type='text' /></div></div>
          </div>
        </div>
        <div class='profile-detail-info'>

        </div>
        <button v-on:click = 'hello'>button</button>
        <button v-on:click = 'what'>What?</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'profile-new',
  methods: {
    hello() {
      return alert('1');
    },
    what: function() {
      return alert('what the fuck');
    }
  }
}
</script>
<style scoped>
  .profile-user-image {
    position: relative;
    width: 11rem;
    height: 13rem;

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
  .profile-user-image {
    float: left;

  }
  .profile-user-info .profile-category { float: left; }
  .profile-user-info .profile-name { float: left; }
  .profile-user-info .profile-phone { float: left; }
  .profile-user-info .profile-email { float: left; }
  .profile-user-info .profile-birth { float: left; }

</style>