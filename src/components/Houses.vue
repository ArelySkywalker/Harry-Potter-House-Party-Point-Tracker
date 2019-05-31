<template>
	<div fluid class="md-layout md-gutter houses">
			<House v-for="house in houses" :house="house" :key="house.name"></House>
	</div>
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
					img: 'https://placeimg.com/40/40/people/'+score
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

.houses { padding: 0 30px; }

</style>
