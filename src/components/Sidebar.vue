<template>
  <div
    class="float-left fixed z-10 top-0 left-0 bottom-0 flex flex-col bg-white w-64 uppercase"
  >
    <div class="flex items-center justify-center mt-14 mb-6">
      <img
        src="data:image/png;base64,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"
        alt=""
        class="w-56 "
      />
    </div>

    <hr class="border border-lightGray opacity-25 mb-2" />
    <router-link
      to="/"
      class="text-black ml-4 text-md py-4 px-2 flex flex-row gap-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <polyline points="9 11 12 14 20 6"></polyline>
        <path
          d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"
        ></path>
      </svg>
      My Dashboard</router-link
    >
    <hr class="border border-lightGray opacity-25 mb-2" />
    <button @click="toggleMod" class="text-black text-md py-4 px-2 uppercase">
      <i class="fas fa-calculator mr-4 rounded-full border-8"></i>Mortgage
      Calculator
    </button>
    <hr class="border border-lightGray opacity-25 mb-2" />
  </div>
  <MortgageCalculator v-if="toggleModal" @modal="toggleMod" />
  <div
    v-if="toggleModal"
    class="absolute z-20 inset-0 opacity-25 bg-black"
  ></div>
</template>

<script>
import MortgageCalculator from "../components/MortgageCalculator.vue";
export default {
  components: {
    MortgageCalculator,
  },
  data() {
    return {
      toggleModal: false,
    };
  },
  methods: {
    toggleMod() {
      this.toggleModal = !this.toggleModal;
    },
  },
};
</script>

<style scoped>
.router-link-active {
  background-color: #eeecff;
  border-left: 2px solid #4361ee;
}

.fa-calculator {
  background-color: #eeecff;
}
</style>
