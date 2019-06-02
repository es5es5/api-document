<template>
  <div id="api_layout">
    <div id="header">
      API Document Like Swagger.
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#api_layout {
  #header {
    height: 60px;
    background-color: yellowgreen;
  }
  #content {
    padding: 10px 60px;
  }
}
</style>

