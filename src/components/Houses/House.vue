<template>
	<div xl="3" lg="6" class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100 house">
		<md-card
			bg-variant="dark"
			header="Dark"
			class="md-elevation-12 house-logo"
			no-body
		>
			<md-card-media>
				<md-ripple>
					<img :src="house.png" :alt="house.name">
				</md-ripple>
			</md-card-media>
		</md-card>
		<md-card class="house-meta">
			<md-card-header>
				<div class="md-title md-display-1">{{house.name}}</div>
				<div class="md-subhead">{{housePoints}} Points</div>
				<div class="md-subhead" :style="{color: this.house.colors.secondary }">{{this.house.players.length}} Members</div>
			</md-card-header>
		</md-card>
		<md-card class="house-players">
			<md-card-content>
				<md-list>
					<Player tag="li" v-for="(player, index) in house.players" :player="player" :key="index" ></Player>
				</md-list>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
import Player from "./Player.vue";

export default {
	name: 'LayoutHorizontalResponsive',
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
	.houses .house-logo 	{ background: rgba(0,0,0,0.1); margin-bottom: 40px; }
	.houses .house .card 	{ background: transparent !important; }

</style>
