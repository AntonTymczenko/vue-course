<template lang="html">
<div>
  <p class="left">Server status: <span class='badge' :class="badgeType">{{ status }}</span> </p>
  <button class="right btn" :class="btnType" v-if="status != 'Normal'" @click="changeStatus">Reanimate</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      status: 'Critical'
    }
  },
  computed : {
    badgeType() {
      return {
        'badge-danger': this.status == 'Critical' ? true : false,
        'badge-success': this.status == 'Normal' ? true : false,
      }
    },
    btnType() {
      return {
        'btn-danger': this.status == 'Critical' ? true : false
      }
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>

<style lang="css">
.left {
  display: block;
  float: left;
}
.right {
  display: block;
  float: right;
}
</style>
