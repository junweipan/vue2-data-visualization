<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <div class="title">
              <span class="title-text">舟山大数据可视化平台</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="['#568aea', '#000000']"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <router-link to="/home"
                ><span class="text">数据分析1</span></router-link
              >
            </div>

            <div class="react-left ml-3">
              <router-link to="/module-2"
                ><span class="text">数据分析2</span></router-link
              >
            </div>
          </div>

          <div class="d-flex aside-width">
            <div class="react-right bg-color-blue mr-3">
              <router-link to="/module-3"
                ><span class="text fw-b">数据分析3</span></router-link
              >
            </div>

            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from '../utils/drawMixin'
import { formatTime } from '../utils/index.js'

export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    }
  },
  components: {},
  mounted() {
    this.timeFn()
    this.cancelLoading()
  },
  beforeDestroy() {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
