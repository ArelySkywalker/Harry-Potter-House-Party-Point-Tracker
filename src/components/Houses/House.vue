<template>
	<b-col xl="3" lg="6" class="mb-5 house" >
		<b-card 
			bg-variant="dark"
			header="Dark"
			class="text-center h-100"
			no-body
			:style="{color: house.colors.primary }"
			lg="6"
		>
			<h4 slot="header"></h4>

			<b-card-img :src="house.gif" :alt="house.name" top></b-card-img>
			<b-card-body>
				<b-card-title>{{housePoints}} Points</b-card-title>
				<b-card-text :style="{color: house.colors.secondary }">{{this.house.players.length}} Members</b-card-text>

				<ul class="list-unstyled text-left mt-5">
					<Player tag="li" v-for="(player, index) in house.players" :player="player" :key="index" ></Player>
				</ul>
			</b-card-body>

		</b-card>
	</b-col>
</template>

<script>
import Player from "./Player.vue";

export default {
	props: ['house'],
	data () {
		return {
			
		}
	},
	methods:{

	},
	computed: {
		//This computed method will watch its dependencies (ie: this.house.players) and only recalculate when this changes
		//This is a micro opimization in this case, but used for practice
		housePoints: function () {
			let points = 0;
			this.house.players.forEach(function (player, index) {
				points += player.score;
			});

			return points;
		}
	},
	components: {
		Player
	}
}
</script>

<style>



</style>
