<template>
	<md-list-item tag="li" class="mb-1">
		<md-avatar>
			<md-ripple>
				<img :src="player.img" width="64" alt="placeholder">
			</md-ripple>
		</md-avatar>
		<span class="md-list-item-text">{{(this.$vnode.key + 1)}}. {{player.name}}</span>
		<span class="md-list-item-text">{{player.score}} points</span>
	</md-list-item>
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
