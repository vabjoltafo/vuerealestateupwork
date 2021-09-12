<template>
  <div class="bg-lightGray rounded-t-3xl w-3/4 ml-64">
    <div class="flex flex-row mt-10 mx-6 justify-between">
      <h2 class="text-lg font-bold">Your previous homes</h2>
      <div class="flex gap-4">
        <button class="bg-dYellow px-4 rounded-full">
          <i class="fas fa-plus mr-2"></i>Add Build
        </button>
        <button>Favorites</button>
        <button>Compare</button>
        <button>Filter</button>
        <button><i class="fas fa-share-alt"></i></button>
      </div>
    </div>
    <div class="my-10 mx-6">
      <HomeInfo
        v-for="home in homes"
        :key="home.id"
        :home="home"
      />
    </div>
  </div>
</template>

<script>
import HomeInfo from "../components/HomeInfo.vue";
import homes from "../data/homes";
export default {
  components: {
    HomeInfo
  },
  data() {
    return {
      homes: homes,
    };
  },
};
</script>
