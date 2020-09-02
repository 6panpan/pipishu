<template>
  <div>
    <div>
      <div class="topbox">
        <span>TA共有关注了{{starLen}}人</span>
        <!-- <div><i class="el-icon-search"></i><input @click="serchAlb" class="searchinp"  placeholder="请搜索专辑"></div> -->
      </div>
      <hr />
      <div>
        <div class="AlbumLis" v-for="item in hisStar" :key="item.id">
          <img  @click="tohisMain(item)" :src="item.userimg" alt />
          <div class="albinf">
            <b>{{item.nickname}}</b>
           
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data:function () {
        return {
           alluser:[],
           hisStar:[],
           starLen:"",
           star:[]

        }
    },
    created(){
        this.getUserInf()
    },
    methods:{
    getStar() {
      this.$http
        .get("http://localhost:7001/getStar", {
          params: {
            ufans_id: this.$route.params.u_id,
          },
        })
        .then((res) => {
          // console.log(res.data);
          this.star = res.data;
          this.starLen=this.star.length
          console.log(this.star);
          for (let i = 0; i < this.star.length; i++) {
            for (let j = 0; j < this.alluser.length; j++) {
              if (this.star[i].ustar_id == this.alluser[j].user_id) {
                this.hisStar.push(this.alluser[j]);
              }
            }
          }
          console.log(this.hisStar);
        })
        .catch((err) => {
          console.log(222);
        });
    },
    getUserInf() {
      this.$http
        .get("http://localhost:7001/getUserInf", {})
        .then((res) => {
          this.alluser = res.data;
          console.log(this.alluser);
          this.getStar()
        })
        .catch((err) => {
          console.log(222);
        });
    },
    tohisMain(item){
         let path=`/zhubo/${item.user_id}/userindex`
       if (path) {
        this.$router.push(path);
        this.$router.go(0)
      }
    }
    }

}
</script>

<style scoped>
.searchinp {
  width: 110px;
  height: 30px;
  border-radius: 25px;
  border: 1px solid;
  outline: none;
}
.topbox {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.AlbumLis {
  margin-left: 10px;
  margin: 13px 0;
}
.AlbumLis img {
  height: 70px;
  width: 70px;
  border-radius: 5px;
  cursor: pointer;
}
.albinf p {
  padding-top: 27px;
}
.albinf b:hover {
  color: #3cced0;
  cursor: pointer;
}
.albinf {
  display: inline-block;
  /* width: 50px; */
  height: 27px;
  padding: 0 10px;
  /* line-height: 50px; */
}
</style>