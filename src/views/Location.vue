<template>
  <div class="location">
    <div class="cape-may-title">Cape May, New Jersey</div>
    <div class="cape-may-description">Cape May is often described as a gingerbread-house style, idyllic New Jersey beach town. It is recognized as the country's oldest seaside resort, and is noted for a large number of Victorian houses due to recosntruction efforts post a 1878 five-day-long fire in additional to recent preservation efforts. The entire city was officially designated a National Historic Landmark in 1976, being the only city in the United States whollly designated as such. Christina's family has been vacationing in Cape May since her mother was a young child, and Thomas has joined in on the legacy. This beach town is very important to the couple, and we are excited for you to enjoy it with us!</div>
    <button @click="togglePlacesToStay">Places to Stay</button>
    <button @click="toggleThingsToDo">Things to Do</button>
    <button @click="toggleFoodAndDrink">Food and Drink</button>
    <div class="location-subview-section">
      <places-to-stay
          v-if="showPlacesToStay"
      />
      <things-to-do 
          v-if="showThingsToDo"
      />
      <food-and-drink 
          v-if="showFoodAndDrink"
      />
    </div>
  </div>
</template>

<script>
import PlacesToStay from '@/components/PlacesToStay.vue'
import ThingsToDo from '@/components/ThingsToDo.vue'
import FoodAndDrink from '@/components/FoodAndDrink.vue'
export default {
  name: "Home",
  components: {
    PlacesToStay,
    ThingsToDo,
    FoodAndDrink
  },
  data() {
    return {
      showPlacesToStay: false,
      showThingsToDo: false,
      showFoodAndDrink: false
    };
  },
  methods: {
    togglePlacesToStay () {
      if (this.showPlacesToStay) {
        this.showPlacesToStay = false;
      } else {
        this.showPlacesToStay = true;
        this.showThingsToDo = false;
        this.showFoodAndDrink = false;
      }
    },
    toggleThingsToDo () {
      if (this.showThingsToDo) {
        this.showThingsToDo = false;
      } else {
        this.showThingsToDo = true;
        this.showPlacesToStay = false;
        this.showFoodAndDrink = false;
      }
    },
    toggleFoodAndDrink () {
      if (this.showFoodAndDrink) {
        this.showFoodAndDrink = false;
      } else {
        this.showFoodAndDrink = true;
        this.showPlacesToStay = false;
        this.showThingsToDo = false;
      }
    }
  }
};
</script>

<style>
.location-subview-section {
  padding-top: 20px;
  background-color:rgba(255, 255, 255, 0.80);
}

button {
  box-shadow: 0px 10px 14px -7px rgb(52,95,129);
  background-color: rgb(159,216,199);
  color: rgb(62,85,103);
	text-shadow: 0px 1px 0px rgb(52,95,129);
  font-size: 16px;
  font-family: 'Crimson Text', 'Montserrat', sans-serif;
	display: inline-block;
	cursor: pointer;
  padding: 16px 24px;
  margin: 10px;
  border: 0;
	border-radius: 28px;
}

button:hover {
	background-color: rgb(103,191,164);
}

button:active {
	position: relative;
	top: 1px;
}

.cape-may-title {
  font-size: 30px;
  font-style: italic;
}

.cape-may-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 6px 10%;
  text-align: center;
}
</style>