<template>
  <div>
    <div
      class="primary-button"
      @click="()=>$store.commit('layouts/setSiderFixed')"
    >
      侧边栏固定：{{ formatBool(siderFixed) }}
    </div>
    <div
      class="primary-button"
      @click="()=>$store.commit('layouts/setOpenSider')"
    >
      开启侧边栏：{{ formatBool(openSider) }}
    </div>
    <div
      class="primary-button"
      @click="()=>$store.commit('layouts/setTopNavbarFixed')"
    >
      顶部导航栏固定：{{ formatBool(topNavbarFixed) }}
    </div>
    <div
      class="primary-button"
      @click="()=>$store.commit('layouts/setShowSider')"
    >
      显示侧边栏：{{ formatBool(showSider) }}
    </div>
    <div
      class="primary-button"
      @click="()=>$store.commit('layouts/setShowBreadcrum')"
    >
      显示面包屑导航：{{ formatBool(showBreadcrum) }}
    </div>
    <div
      class="primary-button"
      @click="()=>$store.commit('setIsMobile', !isMobile)"
    >
      移动端显示：{{ formatBool(isMobile) }}
    </div>
    <div>haha: {{ $t('hello') }}</div>
    <div
      class="primary-button"
      @click="setLang('zh-CN')"
    >
      设置中文
    </div>
    <div
      class="primary-button"
      @click="setLang('en-US')"
    >
      设置英语
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('layouts', ['siderFixed', 'openSider', 'topNavbarFixed', 'showSider', 'showBreadcrum']),
    ...mapGetters(['isMobile'])
  },
  mounted () {

  },
  methods: {
    formatBool (val) {
      return val ? '开' : '关'
    },
    setLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
.primary-button {
  margin-bottom: 30px;
  height: 50px;
  background-color: #303f9f;
  font-size: 13px;
}
</style>
