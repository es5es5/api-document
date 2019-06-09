<template>
  <div class="api_list">
    <div class="controller_container">
      <div class="controller_wrap">
        <div class="controller" v-for="(controller, index) in API_MODEL.contents" :key="index" @click="controller.controller.show = !controller.controller.show">
          <div class="controller_inner">
            <span class="controllerName">{{ controller.controller.controllerName }}
              <span class="controllerMemo">{{ controller.controller.controllerMemo }}</span>
            </span>
          </div>
          <div class="api_container" v-if="controller.controller.show">
            <div class="api_wrap">
              <div class="api" :class="`api-${api.api.apiMethod}`" v-for="(api, index) in controller.controller.api" :key="index">
                <div class="apiMethodIcon" :class="`api-${api.api.apiMethod}`">{{ api.api.apiMethod }}</div>
                <span class="apiURL">{{ api.api.url }}
                  <span class="apiMemo">{{ api.api.apiMemo }}</span>
                </span>
              </div>
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
      apiModel: {},
    }
  },
	created () {
    this.getAPIModel()
  },
	methods: {
    getAPIModel() {
      console.log(this.API_MODEL)
      let TEMP = Object.assign({}, this.API_MODEL)
      TEMP.contents.forEach((controller, index) => {
        console.log(index)
        controller.show = false
      })
      Object.assign(this.apiModel, this.API_MODEL)
      console.log(this.apiModel)
    },
    toggleShow(show) {
      
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
          margin-left: 10px;
          color: $gray-dark;
          font-size: 14px;
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
          &.api-GET {
            color: $api-GET;
          }
          &.api-POST {
            color: $api-POST;
          }
          &.api-PUT {
            color: $api-PUT;
          }
          &.api-DELETE {
            color: $api-DELETE;
          }
          .apiURL {
            font-size: 18px;
            font-weight: bold;
            .apiMemo {
              color: $gray-dark;
              margin-left: 10px;
              font-size: 12px;
              font-weight: normal;
            }
          }
        }
        .apiMethodIcon {
          display: inline-block;
          width: 80px;
          padding: 4px 0;
          margin-right: 10px;
          border: 1px solid;
          border-radius: 4px;
          text-align: center;
          font-weight: bold;
          color: white;
          &.api-GET {
            background-color: $api-GET;
          }
          &.api-POST {
            background-color: $api-POST;
          }
          &.api-PUT {
            background-color: $api-PUT;
          }
          &.api-DELETE {
            background-color: $api-DELETE;
          }
        }
      }
    }
  }
}
</style>
