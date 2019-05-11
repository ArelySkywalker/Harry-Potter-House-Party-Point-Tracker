<template>
  <div id="header" class="row">
    <b-col xl="3" lg="6" class="mb-5 user-info">
      <b-card>
        <p>Username</p>
        <p>User Role</p>
      </b-card>
    </b-col>
    <b-col xl="6" lg="6" class="mb-5 intro">
      <b-card>
        <h1>The Great Hall</h1>
      </b-card>
    </b-col>
    <b-col xl="3" lg="6" class="mb-5 ranks">
      <b-card>
        <p>Rank out of #n students: { # }</p>
        <p>Rank out of #n your house: { # }</p>
      </b-card>
    </b-col>
  </div>
</template>

<script>

export default {
  data () {
    return {
    
    }
  },
  components: {
    
  }
}
</script>

<style>

#header .card {
  background: transparent;
}

#header .card p {
  color: rgba(255,255,255,0.4);
}

#header .user-info .card {
  text-align: left;
}

#header .intro .card {
  text-align: center;
}

#header .ranks .card {
  text-align: right;
}

</style>
