<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Animations</h1>
      <hr>
      <button @click="showAlert = !showAlert" class="btn btn-primary">Show alert</button>
      <br><br>
      <select v-model="alertAnimation">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </select>
      <br><br>
      <transition :name="alertAnimation">
        <!-- you can show only one at the time -->
        <div v-if="showAlert" class="alert alert-success">This is some info</div>
      </transition>
      <transition name="slide" appear>
        <!-- on page load == appear -->
        <div v-if="!showAlert" class="alert alert-info">This is some info</div>
      </transition>

      <!-- to use Animate.css do that: -->
      <transition
        appear
        enter-active-class="animated bounce"
        leave-active-class="animated shake">

        <div v-if="!showAlert" class="alert alert-info">This is some info</div>
      </transition>


      <!-- switch between the two -->
      <transition name="fade" mode="out-in">
        <div
          v-if="showAlert"
          key="info"
          class="alert alert-info">SWITCH: This is some info</div>
        <div
          v-else
          key="warning"
          class="alert alert-warning">SWITCH: This is some warning</div>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      showAlert: false,
      alertAnimation: 'fade'
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

</style>
