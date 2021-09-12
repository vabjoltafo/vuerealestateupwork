<template>
  <div class="z-50 fixed inset-0 flex justify-center items-center">
    <div class="bg-white px-4 py-4 w-2/4">
      <button @click="modal" class="float-right mb-4">
        <i class="fas fa-times"></i>
      </button>
      <br />
      <h2 class="text-xl font-bold text-center">
        <i class="fas fa-home mr-4 text-center text-dYellow text-3xl"></i
        >Mortgage Calculator
      </h2>
      <div class="mt-8">
        <h2
          class="bg-darkGray text-dYellow text-center text-md font-bold rounded-t-lg py-3"
        >
          Payment Plan
        </h2>
        <div class="border-2 border-darkGray pt-4">
          <form @submit.prevent="calculate" class="mx-4">
            <div class="flex flex-row justify-between mb-4">
              <div class="flex flex-col gap-2">
                <label for="homePrice" class="font-bold">Home Price</label>
                <div>
                  <i
                    class="fas fa-dollar-sign absolute px-2 py-1.5 bg-darkGray text-dYellow"
                  ></i>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="border-2 border-darkGray text-center"
                    v-model.number="homePrice"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label for="interestRate" class="font-bold"
                  >Interest Rate</label
                >
                <div>
                  <i
                    class="fas fa-percent absolute px-2 py-1.5 bg-darkGray text-dYellow"
                  ></i>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="border-2 border-darkGray text-center"
                    v-model.number="interestRate"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-row justify-between mb-4">
              <div class="flex flex-col gap-2">
                <label for="amortRate" class="font-bold"
                  >Amortization Rate</label
                >
                <div>
                  <span class="absolute px-2 py-0.5 bg-darkGray text-dYellow"
                    >Years</span
                  >
                  <input
                    type="text"
                    name=""
                    id=""
                    class="border-2 border-darkGray text-center"
                    v-model.number="amortRate"
                  />
                </div>
              </div>
              <input
                type="range"
                name=""
                id=""
                class="mt-6"
                min="1"
                max="30"
                step="1"
                v-model="amortRate"
              />
            </div>
            <div class="flex flex-row justify-between mb-4">
              <div class="flex flex-col gap-2">
                <label for="downPay" class="font-bold">Down Payment</label>
                <div>
                  <i
                    class="fas fa-dollar-sign absolute px-2 py-1.5 bg-darkGray text-dYellow"
                  ></i>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="border-2 border-darkGray text-center"
                    v-model.number="downPay"
                  />
                </div>
              </div>    
            </div>
            <div class="text-center mb-4">
              <input
                type="submit"
                value="Calculate"
                class=" bg-darkGray text-dYellow px-3 py-1 rounded-md"
              />
            </div>
          </form>
        </div>
        <div class="flex flex-row justify-evenly mt-4">
          <h2 v-if="this.princip > 0" class="text-lg font-bold">Mortgage amount: {{this.princip}}</h2>
          <h2 v-if="this.monthlyPay > 0" class="text-lg font-bold">Monthly payment: {{this.monthlyPay.toFixed(2)}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homePrice: 0,
      interestRate: 0,
      amortRate: 0,
      monthlyPayment: 0,
      downPay: 0,
      princip: 0,
      monthlyPay: 0
    };
  },
  methods: {
    modal() {
      this.$emit("modal");
    },
    calculate() {
      if (!this.formValid) {
        return;
      }
      this.monthlyPay = this.payment
      this.princip = this.principal
    }
  },
  computed: {
    formValid() {
      const { homePrice, interestRate, amortRate, downPay} = this;
      return (
        +homePrice >= 0 &&
        0 <= +interestRate &&
        +interestRate <= 100 &&
        +amortRate > 0 && 
        +downPay > 0
        )
    },
    principal() {
      return this.homePrice - this.downPay;
    },
    numPayments() {
      return this.amortRate * 12
    },
    interestPerPay() {
      return this.interestRate/100 / 12
    },
    payment() {
      let temp = Math.pow(1 + this.interestPerPay, this.numPayments)
      let p = this.principal * this.interestPerPay * temp / (temp - 1)
      return p
    },
    amortPay() {
      var yearEndPrincipal = []
      var principal = this.principal
      var interestPortion
      for (var y = 0; y < this.amortization; y++){
        for (var p = 0; p < this.numPaymentsPerYear; p++){
          interestPortion = principal * this.interestPerPayment // portion of payment paying down interest
          principal = principal - (this.payment - interestPortion)
        }
        principal = principal > 0 ? principal : 0
        yearEndPrincipal.push({
          principal,
          interestPortion
        })
      }
      return yearEndPrincipal
    },
    totalCostOfMortgage() {
      return this.payment * this.numPayments
    },
    interestPaid() {
      return this.totalCostOfMortgage - this.principal
    }
  },
};
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  background: #212529;
  border-radius: 50px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 30px;
  background: #fca311;
  border-radius: 50px;
  cursor: pointer;
  margin-top: -3px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}

input[type="range"]::-moz-range-thumb {
  background: #fca311;
  height: 15px;
  width: 30px;
  cursor: pointer;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: #212529;
  border-radius: 50px;
}
</style>
