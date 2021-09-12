<template>
  <div class="border border-black mb-4 flex flex-row">
    <button class="absolute">
      <i class="fas fa-times m-1 text-lg"></i>
    </button>
    <img :src="home.image" class="max-h-40 lg:w-1/4 2xl:w-1/3" />
    <div class="flex flex-row">
      <div class="mt-2 ml-4">
        <div class="flex flex-row gap-4">
          <h2 class="text-lg font-bold">{{ home.name }}</h2>
          <button
            class="uppercase font-bold border border-darkGray px-2  rounded-full"
          >
            <i class="fas fa-not-equal"></i> Compare
          </button>
        </div>
        <p class="font-semibold">{{ home.homeType }}</p>
        <p>{{ home.surface }}</p>
        <p>
          {{ home.beds }}<i class="fas fa-bed ml-3 mr-4"></i> {{ home.baths
          }}<i class="fas fa-bath ml-3"></i>
        </p>
        <div class="flex gap-4">
          <button
            class="uppercase font-bold text-dYellow bg-darkGray px-2  rounded-full"
          >
            <i class="fas fa-dollar-sign"></i> Make an offer
          </button>
          <button
            class="uppercase font-bold border border-darkGray px-2  rounded-full"
          >
            <i class="fas fa-dollar-sign"></i> Place a deposit
          </button>
          <button
            class="uppercase font-bold border border-darkGray px-2  rounded-full"
          >
            <i class="fas fa-dollar-sign"></i> Buy now
          </button>
        </div>
      </div>
      <div class="flex flex-col ml-12">
        <div class="flex flex-row gap-12">
          <p class="text-lg font-bold">{{ home.price }}</p>
          <button v-if="!isFav || !isFavorite" @click="updateFavorite()">
            <i class="far fa-heart text-red-600 text-xl"></i>
          </button>
          <button v-if="isFav && isFavorite" @click="updateFavorite()">
            <i class="fas fa-heart text-red-600 text-xl"></i>
          </button>
        </div>
        <p class="text-sm">Quote until {{ home.quote }}</p>
        <div class="flex flex-row mt-4 gap-8">
          <p class="uppercase text-md font-bold">Download</p>
          <button>
            <i class="fas fa-arrow-circle-down text-dYellow text-xl"></i>
          </button>
        </div>
        <div class="flex flex-row mt-4 gap-4">
          <p class="uppercase text-md font-bold">Get in touch</p>
          <button><i class="far fa-envelope text-dYellow text-xl"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["home"],
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    updateFavorite() {
      this.isFavorite = !this.isFavorite;
      this.$store.commit("updateFavorite", this.home);
    },
  },
  computed: {
    isFav() {
      return this.$store.getters.isFavorite
    }
  }
};
</script>
