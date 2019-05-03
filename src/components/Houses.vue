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
					name: "Gryffindor",
					colors: {
						primary : "#7F0909",
						secondary : "#FFC500"
					},
					gif: "https://github.com/ArelySkywalker/HarryPotterHouseParty/blob/master/images/gryffindor.gif?raw=true",
					players: this.randomPlayers(),
				},
				{
					name: "Ravenclaw",
					colors: {
						primary : "#000A90",
						secondary : "#946B2D"
					},
					gif: "https://github.com/ArelySkywalker/HarryPotterHouseParty/blob/master/images/ravenclaw.gif?raw=true",
					players: this.randomPlayers(),
				},
				{
					name: "Slytherin",
					colors: {
						primary : "#0D6217",
						secondary : "#AAAAAA"
					},
					gif: "https://github.com/ArelySkywalker/HarryPotterHouseParty/blob/master/images/slytherin.gif?raw=true",
					players: this.randomPlayers(),
				},
				{
					name: "Hufflepuff",
					colors: {
						primary : "#EEE117",
						secondary : "#000000"
					},
					gif: "https://github.com/ArelySkywalker/HarryPotterHouseParty/blob/master/images/hufflepuff.gif?raw=true",
					players: this.randomPlayers(),
				}
			]
		}
	},
	methods: {
		randomPoints(){
			return Math.floor(Math.random() * 100);
		},
		randomPlayers(){
			let numPlayers = Math.floor(Math.random() * 10) + 1;
			let players = [];
			
			for(let i = 0; i < numPlayers; i++){
				let playerName = this.randomName();
				let score = this.randomPoints();
				let newPlayer = {
					name: playerName,
					score: score,
					img: 'https://via.placeholder.com/64/?text='+score
				}

				players.push(newPlayer);
			}

			return players;
		},
		randomName(){
			return Math.random().toString(36).substring((Math.floor(Math.random() * 10)))
		}
	},
	components: {
		House
	}
}
</script>

<style>



</style>
