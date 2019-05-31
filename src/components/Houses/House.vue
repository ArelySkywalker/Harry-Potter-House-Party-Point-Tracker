<template>
	<div xl="3" lg="6" class="md-layout-item house">
		<md-card
			bg-variant="dark"
			header="Dark"
			class="text-center h-100"
			no-body
			:style="{color: house.colors.primary }"
			lg="6"
		>
			<md-card-media>
				<img :src="house.gif" :alt="house.name">
			</md-card-media>

			<md-card-header>
				<div class="md-title">{{house.name}}</div>
				<div class="md-subhead">{{housePoints}} Points</div>
				<div class="md-subhead" :style="{color: this.house.colors.secondary }">{{this.house.players.length}} Members</div>
			</md-card-header>

			<md-card-content>
				<ul class="list-unstyled text-left mt-5">
					<Player tag="li" v-for="(player, index) in house.players" :player="player" :key="index" ></Player>
				</ul>
			</md-card-content>
		</md-card>
	</div>
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

.houses .house .card { background: transparent !important; }

</style>
