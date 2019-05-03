<template>
	<b-container fluid class="mb-5">
		<b-row>
			<House v-for="house in houses" :house="house" :key="house.name"></House>
		</b-row>
	</b-container>
</template>

<script>
import House from "./Houses/House.vue";

export default {
	data () {
		return {
			houses: [
				{
					"name": "Gryffindor",
					"colors": {
						"primary" : "#7F0909",
						"secondary" : "#FFC500"
					},
					"mascot": "Griffin",
					"gif": "https://github.com/ArelySkywalker/HarryPotterHouseParty/blob/master/images/gryffindor.gif?raw=true"
				},
				{
					"name": "Ravenclaw",
					"colors": {
						"primary" : "#000A90",
						"secondary" : "#946B2D"
					},
					"mascot": "Raven",
					"gif": "https://github.com/ArelySkywalker/HarryPotterHouseParty/blob/master/images/ravenclaw.gif?raw=true"
				},
				{
					"name": "Slytherin",
					"colors": {
						"primary" : "#0D6217",
						"secondary" : "#AAAAAA"
					},
					"mascot": "Serpent",
					"gif": "https://github.com/ArelySkywalker/HarryPotterHouseParty/blob/master/images/slytherin.gif?raw=true"
				},
				{
					"name": "Hufflepuff",
					"colors": {
						"primary" : "#EEE117",
						"secondary" : "#000000"
					},
					"mascot": "Badger",
					"gif": "https://github.com/ArelySkywalker/HarryPotterHouseParty/blob/master/images/hufflepuff.gif?raw=true"
				}
			]
		}
	},
	components: {
		House
	}
}
</script>

<style>



</style>
