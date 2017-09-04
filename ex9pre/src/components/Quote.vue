<template lang="html">
<div class="col-sm-6 col-md-4 col-lg-3">
  <div class="card">
    <div class="card-block quote">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.card {
  margin: 10px;
}
.card-block {
  padding: 30px;
  font-family: Arizonia, cursive;
  font-size: 24px;
  color: #6e6e6e;
}
.quote {
  cursor: pointer;
}
.quote:hover {
  background-color: #ffe2e2;
}
</style>
