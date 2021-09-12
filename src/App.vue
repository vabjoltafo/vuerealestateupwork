<template>
  <div id="nav">
    <div class="bg-darkGray h-16"></div>
    <Sidebar />
  </div>
  <div class="">
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>

