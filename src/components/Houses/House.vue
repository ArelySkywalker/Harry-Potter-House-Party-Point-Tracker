<template>
	<b-col xl="3" lg="6" class="mb-5" >
		<b-card 
			bg-variant="dark"
			header="Dark"
			class="text-center h-100"
			no-body
			:style="{color: house.colors.primary }"
			lg="6"
		>
			<h4 slot="header">{{house.name}}</h4>

			<b-card-img :src="house.gif" :alt="house.name" top></b-card-img>
			<b-card-body>
				<b-card-title>{{Math.floor(Math.random() * 100)}} Points</b-card-title>
				<b-card-text :style="{color: house.colors.secondary }">{{numPlayers}} Members</b-card-text>

				<ul class="list-unstyled text-left mt-5">
					<b-media tag="li" v-for="index in numPlayers" :key="index" class="mb-1">
						<b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>

						<h5 class="mt-0 mb-1">{{index}}. {{randomName()}}</h5>
						<p :style="{color: house.colors.secondary }">{{Math.floor(Math.random() * 10)}} points</p>
					</b-media>
				</ul>
			</b-card-body>

		</b-card>
	</b-col>
</template>

<script>


export default {
	props: ['house'],
	data () {
		return {
			numPlayers: Math.floor(Math.random() * 10) + 1
		}
	},
	methods:{
		randomName(){
			return Math.random().toString(36).substring((Math.floor(Math.random() * 10)))
		}
	},
	components: {
		
	}
}
</script>

<style>



</style>
