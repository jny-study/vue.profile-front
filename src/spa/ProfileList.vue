<template>
  <div class="profile-list">
    <div class='list-container'>
      <div class='list-header'>
        <div class='list-sex'>성별</div>
        <div class='list-group'>분류</div>
        <div class='list-age'>나이</div>
        <div class='list-name'>이름</div>
        <div class='list-phone'>핸드폰</div>
        <div class='list-email'>이메일</div>
        <div class='list-birth'>생일</div>
      </div>
      <div class='list-row' v-for='(user, index) in users' :key='index' v-on:click='goToDetail(user._id)'>
        <div class='list-sex'><span>{{ user.sex }}</span></div>
        <div class='list-group'><span>{{ user.category }}</span></div>
        <div class='list-age'>{{ user.age }}</div>
        <div class='list-name'>{{ user.name }}</div>
        <div class='list-phone'>{{ user.mobile }}</div>
        <div class='list-email'>{{ user.email }}</div>
        <div class='list-birth'>{{ user.birthDay }}</div>
      </div>
      <div class='list-button'>
        <button>등록</button>
      </div>
    </div>
    <div class='bottom-bar'>
      <!-- https://www.w3schools.com/Css/css3_pagination.asp# -->
      <div class='pagenation'>
        <a href='#'>&lt; 이전</a>
        <a href='#'>1</a>
        <a href='#'>2</a>
        <a href='#'>3</a>
        <a href='#'>4</a>
        <a href='#'>5</a>
        <a href='#'>다음 &gt;</a>
      </div>
      <div class='list-search'>
        <div>
          <input type='text' />
          <button>검색</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'profile-list',
  data() {
    return {
      users: []
    }
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'profileDetail', params: { id: id }})
    }
  },
  created() {
      this.$http.get('http://127.0.0.1:3000')
      .then(response => {
        this.users = response.data
        console.log(this.users)
      })
  }
}
</script>


<style scoped>
  .bottom-bar {
    margin: 2.5rem auto;
    width: 70%;
    background-color: #f8f8f7;
    text-align: center;
  }
  .pagenation { 
    display: inline-block;
    vertical-align: middle;
  }
  .pagenation a {
    color: black;
    float: left;
    padding: 1vw 1vw;
    text-decoration: none;
    transition: background-color .3s;
    border: solid 0.07rem #f8f8f7;
  }
  .pagenation a:active {
    border: solid 0.07rem #ddd;
    background-color: white;
  }
  .pagination a:hover:not(.active) {background-color: #ffffff;}
  .list-search {
    border-top: solid 0.07rem #e2e1e1;

  }
  .list-search div {
    padding: 0.5rem;
  }
  .list-search div input {
    height: 2rem;
  }
  .list-search div button {
    text-decoration: none;
    height: 2.4rem;
    background-color: #727171;
    color: white;
    border: solid 1px #727171;
    padding: 0.3rem 1.3rem;
  }
  .list-button {
    text-align: right;
  }
  .list-button button{
    text-decoration: none;
    height: 2.4rem;
    border: solid 1px #cbcbcb;
    padding: 0.3rem 1.3rem;
    margin: 0.4rem;
  }
  .list-container {
    margin: auto;
    width: 70%;
    min-height: 50vh;
    
  }
  .list-header {
    display: flex;
    text-align: center;
    border-top: solid 0.1rem;
    border-bottom: solid 0.05rem #ECECEC;
    padding: 0.5vw;
  }
  .list-row {
    display: flex;
    text-align: center;
    padding: 0.5vw;
    border-top: solid 0.05rem #ECECEC;
    border-bottom: solid 0.05rem #ECECEC;
    cursor: pointer
  }
  .list-sex { flex-basis: 4vw; }
  .list-group { flex-basis: 8vw; }
  .list-age { flex-basis: 8vw; }
  .list-name { flex-basis: 8vw; }
  .list-phone { flex-basis: 12vw; }
  .list-email { flex-basis: 19vw; }
  .list-birth { flex-basis: 8vw; }
</style>

