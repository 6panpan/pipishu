<template>
  <div>收藏</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getByKey(key) {
      let name = key + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return null;
    },
  },
  mounted() {
    console.log(this.getByKey("user_id"));
    this.$http
      .get("http://127.0.0.1:7001/getAllUserCollect", {
        params: {
          us_id: this.getByKey("user_id"),
        },
      })
      .then((res) => {
        console.log(res.data);
        let arr = [];
        for (let i = 0; i < res.data.length; i++) {
          arr[i] = res.data[i].al_id;
        }
        console.log(arr.toString());
        this.$http
          .get("http://127.0.0.1:7001/getAlbumByCollect", {
            params: {
              al_id:arr.toString()
            },
          })
          .then((res) => {
            console.log(res.data);

          });
      });
  },
  beforeRouteEnter(to, from, next) {
    if (from.path != "/my/subscribed") {
      next();
    }
  },
};
</script>