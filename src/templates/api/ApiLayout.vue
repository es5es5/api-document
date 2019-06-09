<template>
  <div id="api_layout">
    <div id="header">
      API Document Like the <span class="txt_bold">Swagger</span>.
      <span style="font-size: 14px;">made by. lhw</span>
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
@import '@/assets/scss/import/variable.scss';

#api_layout {
  #header {
    height: 60px;
    text-align: center;
    vertical-align: middle;
    color: $gray-dark;
    font-size: 35px;
    background-color: yellowgreen;
  }
  #content {
    padding: 10px 60px;
  }
}
</style>

