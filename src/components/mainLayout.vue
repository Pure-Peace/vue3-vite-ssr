<template>
  <div>
    <div id="main-layout-box">
      <top-navbar ref="topNavbar" :fixed="fixed" />
      <div id="main-content-box" :style="routerViewStyle">
        <div v-if="showBreadcrum" class="breadcrum-box">
          当前位置：{{ $route.name }}
        </div>
        <div id="view-box">
          <router-view v-slot="{ Component }">
            <transition name="faded" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
      <footer-layout ref="footerLayout" />
    </div>
  </div>
</template>

<script>
import topNavbar from "/@/components/topNavbar.vue"
import footerLayout from "/@/components/footerLayout.vue"

export default {
  components: {
    topNavbar,
    footerLayout
  },
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    showBreadcrum: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isMounted: false
    }
  },
  computed: {
    routerViewStyle () {
      return `min-height: calc(100vh - ${this.topNavbarHeight}px) !important;`
    },
    footerLayoutHeight () {
      return this.isMounted
        ? this.$refs.footerLayout.$refs.footerLayoutBox.clientHeight + 1
        : "0"
    },
    topNavbarHeight () {
      return this.isMounted
        ? this.$refs.topNavbar.$refs.topNavbarBox.clientHeight
        : "0"
    }
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style scoped>
.breadcrum-box {
  padding: 20px;
  font-size: 14px;
  font-weight: lighter;
  background-color: rgb(18, 18, 24);
  margin-bottom: 10px;
}

#main-layout-box {
  flex: 1;
  min-height: 100vh;
  background-color: #000;
}

#main-content-box {
  padding: 20px;
}

#view-box {
  min-height: 100%;
  padding: 20px;
  margin: 0 auto;
}

.faded-enter {
  opacity: 0;
}

.faded-enter-active {
  transition: 0.5s ease-in-out;
}

.faded-enter-to {
}

.faded-leave {
}

.faded-leave-active {
  transition: 0.5s ease-in-out;
}

.faded-leave-to {
  opacity: 0;
  transform: translate(20px, 0);
}
</style>
