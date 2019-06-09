<template>
  <div class="api_list">
    <div class="project">
      <div class="info">
        <span class="projectName">
          Make_it_API_Document_Web_UI_!!
          <div class="ver">ver 1.0</div>
        </span>
        <span class="baseURL">base URL : <span class="txt_bold">http://lhw.api-document.com:4993</span></span>
      </div>
    </div>
    <div class="controller_container">
      <div class="controller_wrap">
        <div class="controller" v-for="(controller, index) in apiModel.contents" :key="index">
          <div class="controller_inner">
            <span class="controllerName">{{ controller.controller.controllerName }}
              <span class="controllerMemo">{{ controller.controller.controllerMemo }}</span>
            </span>
          </div>
          <div class="api_container">
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
    toggleShow (show) {
      console.log(this)
      return !show
    },
    getAPIModel() {
      console.log(this.API_MODEL)
      let TEMP = Object.assign({}, this.API_MODEL)
      // TEMP.contents.forEach((controller, index) => {
      //   console.log(index)
      //   controller.show = false
      // })
      Object.assign(this.apiModel, this.API_MODEL)
      console.log(this.apiModel)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/import/variable.scss';

.project {
  .info {
    border-radius: 15px;
    padding: 35px;
    background-color: $gray-light;
    .projectName {
      display: block;
      font-weight: bold;
      font-size: 40px;
      color: $gray-dark;
      position: relative;
      .ver {
        position: absolute;
        bottom: 24px;
        padding: 1px 10px 3px;
        font-size: 18px;
        margin-left: 8px;
        color: $gray-light-1;
        background-color: rgb(237, 154, 183);
        border-radius: 9px;
        display: inline-block;
      }
    }
    .baseURL {
      line-height: 2em;
      font-size: 18px;
    }
  }
}
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
          &.api-PATCH {
            color: $api-PATCH;
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
          &.api-PATCH {
            background-color: $api-PATCH;
          }
        }
      }
    }
  }
}
</style>
