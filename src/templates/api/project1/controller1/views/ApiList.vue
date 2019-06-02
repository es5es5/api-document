<template>
  <div class="api_list">
    <div class="controller_wrap" v-for="(controllerList, index) in apiModel.contents" :key="index">
      <div class="controller" v-for="(controller, index) in controllerList" :key="index">
        <div class="controller_inner">
          <span class="controllerName">{{ controller.name }}
            <span class="controllerMemo">{{ controller.memo }}</span>
          </span>
        </div>
        <div class="api_container">
          <div class="api_wrap" v-for="(apiList, index) in controller.api" :key="index">
            <div class="api" :class="`api-${api.method}`" v-for="(api, index) in apiList" :key="index">
              <span class="apiURL">{{ api.url }}
                <span class="apiMemo">{{ api.memo }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiList',
  data() {
    return {
      apiModel: {}
    }
  },
	created () {
    this.getAPIModel()
  },
	methods: {
    getAPIModel() {
      this.apiModel = this.API_MODEL
      console.log(this.apiModel)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/import/variable.scss';

.controller_wrap {
  .controller {
    padding: 8px;
    .controller_inner {
      padding: 12px 0px;
      border-bottom: 3px solid $gray-light-1;
      margin-bottom: 4px;
    
      .controllerName {
        font-size: 34px;
        font-weight: bold;
    
        .controllerMemo {
          font-size: 10px;
          font-weight: normal;
        }
      }
    }

    .api_container {
      .api_wrap {
        .api {
          padding: 10px 14px;
          margin: 8px 0px;
          border: 1px solid;
          border-radius: 4px;
          &.api-GET { color: blue; }
          &.api-POST { color: green; }
          &.api-PUT { color: orange; }
          &.api-DELETE { color: red; }
          .apiURL {
            font-size: 18px;
            font-weight: bold;
            .apiMemo {
              font-size: 10px;
              font-weight: normal;
            }
          }
        }
      }
    }
  }
}
</style>
