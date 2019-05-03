<template>
	<b-media tag="li" class="mb-1">
		<b-img slot="aside" :src="player.img" width="64" alt="placeholder"></b-img>

		<h5 class="mt-0 mb-1">{{(this.$vnode.key + 1)}}. {{player.name}}</h5>
		<p>{{player.score}} points</p>
	</b-media>
</template>

<script>


export default {
	props: ['player'],
	data () {
		return {

		}
	},
	methods:{

	},
	components: {
		
	}
}
</script>

<style>



</style>
