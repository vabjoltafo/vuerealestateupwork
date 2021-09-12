<template>
  <div class="dashboard flex flex-col justify-center items-center">
    <h1 class="text-2xl text-dYellow font-bold mt-10 mb-6 lg:-ml-28 2xl:-ml-56 mr-96">Welcome back Luis!</h1>
    <PrevHomes />
  </div>
</template>

<script>
import PrevHomes from '../components/PrevHomes.vue'

export default {
  name: "Home",
  components: {
    PrevHomes
  },
};
</script>
