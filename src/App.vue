<template>
  <div id="app">
    <div class="content-area">      
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;    
}

.content-area {
  padding: calc(#{$spacer} * 2);
}
</style>
