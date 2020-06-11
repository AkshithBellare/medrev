<template>
  <div class="bmi-calculator">
    <h1>BMI calculator</h1>
    <div class="bmi-input">
      <input
        type="text"
        name="weight-input"
        placeholder="Enter weight in Kgs"
        v-model.lazy="weightinput"
      />
    </div>

    <div class="bmi-input">
      <input
        type="text"
        name="height-input"
        placeholder="Enter height in metres"
        v-model.lazy="heightinput"
      />
    </div>

    <button @click="result = calculateBMI(heightinput, weightinput)">BMI</button>

    <div class="bmi-output">{{result}}</div>
  </div>
</template>

<script>
export default {
  name: "MedRevBMIcalculator",
  data() {
    return {
      heightinput: "",
      weightinput: "",
      result: 0.0
    };
  },
  methods: {
    calculateBMI: (heightinput, weightinput) => {
      return weightinput / (heightinput * heightinput);
    }
  }
};
</script>

<style scoped>
.bmi-calculator {
  text-align: center;
  width: 400px;
  margin: 4em auto;
  background: #ffd7c7;
  border-radius: 4px;
}

.bmi-calculator > h1 {
  font-family: "sans-serif";
}

.bmi-calculator > button {
  width: 200px;
}
.bmi-input > input {
  padding: 10px;
  margin-bottom: 10px;
}

.bmi-input {
  padding: 10px;
}
</style>