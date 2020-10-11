<template>
  <div>
    <div
      v-if="fixed"
      id="top-navbar-placeholder"
      :style="topNavbarHeight"
    />
    <div
      id="top-navbar-box"
      ref="topNavbarBox"
      :style="topNavbarHeight"
      :class="topNavbarBoxClass"
    >
      <div id="top-navbar-content">
        <div
          v-if="topNavbarFixed"
          class="logo-box"
          :style="openSider ? 'width: 210px;' : 'width: 80px;'"
        >
          <div
            class="logo-box-content"
          >
            <div>
              <img
                style="height: 50px; margin: 0 4px;"
                src="/@/assets/biglogo_min.png"
              >
            </div>
            <div
              style="transition: 0.2s ease; text-align: center;"
              class="logo-text"
              :style="logoTextStyle"
            >
              osu!Kafuu
            </div>
          </div>
        </div>
        <div
          v-if="showSider"
          class="sidebar-open-control-button"
          :style="miniSizePage ? 'margin-left: 0px;' : 'margin-left: 25px;'"
          @click="sidebarOpenSwitch"
        >
          <svg-icon :icon-class="openSider ? 'outdent' : 'indent'" />
        </div>
        <div
          v-if="!miniSizePage"
          id="top-navbar-menu"
        >
          <!--div
            class="search-box"
            :style="openSearchBox ? 'width: 180px;' : 'width: 30px;'"
          >
            <svg-icon
              icon-class="search"
              class="search-button"
              @click="handleSearch"
            />
            <input
              icon-class="text"
              class="search-input"
              placeholder="寻找玩家..."
            >
          </div-->

          <div
            style="margin-left: auto;"
            class="outline-button"
            @click="jumpTo('Switcher')"
          >
            切换器
          </div>
          <div
            class="primary-button"
            @click="jumpTo('Login')"
          >
            sign in~
          </div>
        </div>
        <div
          v-else
          id="top-navbar-menu"
        >
          <div
            class="primary-button"
            style="margin-left: auto; font-size: 18px;"
            @click="openTopNavbarMenu"
          >
            <svg-icon
              style="color: #fff;"
              icon-class="menu"
            />
          </div>
          <div
            v-show="openTopNavbarFixedMenu"
            id="top-navbar-fixed-menu"
            :style="`top: ${height}px;`"
          >
            <div
              class="top-navbar-fixed-menu-item"
              @click="jumpTo('Login')"
            >
              注册 / 登录
            </div>
            <div
              class="top-navbar-fixed-menu-item"
              @click="jumpTo('Switcher')"
            >
              切换器
            </div>
            <div
              class="top-navbar-fixed-menu-item"
              @click="jumpTo('Introduce')"
            >
              介绍
            </div>
          </div>
          <div
            v-show="openTopNavbarFixedMenu"
            class="top-navbar-fixed-menu-mask"
            :style="`top: ${fixed ? height : 0}px; height: calc(100vh - ${fixed ? height : 0}px);`"
            @click="openTopNavbarFixedMenu = false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 75
    }
  },
  data () {
    return {
      openSearchBox: true,
      openTopNavbarFixedMenu: false
    }
  },
  computed: {
    ...mapGetters('layouts', ['openSider', 'topNavbarFixed', 'showSider']),
    ...mapGetters(['isMobile', 'pageWidth']),
    topNavbarBoxClass () {
      return this.fixed ? 'top-navbar-box-fixed' : ''
    },
    topNavbarHeight () {
      return `height: ${this.height}px; `
    },
    miniSizePage () {
      const mini = (this.pageWidth < 700) || this.isMobile
      return mini
    },
    logoTextStyle () {
      return this.openSider ? 'opacity: 1; width: 90px;' : 'opacity: 0; width: 0;'
    }
  },
  watch: {
    miniSizePage: {
      handler (val) {
        this.openSearchBox = !val
        this.openTopNavbarFixedMenu = false
      }
    }
  },
  methods: {
    jumpTo (name) {
      this.$router.push({ name })
      if (this.openTopNavbarFixedMenu) { this.openTopNavbarFixedMenu = false }
    },
    sidebarOpenSwitch () {
      this.$store.commit('layouts/setOpenSider')
    },
    sidebarFixedSwitch () {
      this.$store.commit('layouts/setSiderFixed')
    },
    topNavbarFixedSwitch () {
      this.$store.commit('layouts/setTopNavbarFixed')
    },
    sidebarShowSwitch () {
      this.$store.commit('layouts/setShowSider')
    },
    handleSearch () {

    },
    openTopNavbarMenu () {
      this.openTopNavbarFixedMenu = !this.openTopNavbarFixedMenu
    }
  }
}
</script>

<style soped>
  .logo-box {
    height: 75px;
    font-size: 16px;
    font-weight: bold;
    user-select: none;
    overflow: hidden;
    display: flex;
    cursor: pointer;
    justify-content: center;
    transition: 0.4s ease;

    /* border-right: 1px dashed rgba(0, 0, 0, .1); */
  }

  .logo-box:hover {
    opacity: 0.8;
  }

  .logo-box-content {
    display: flex;
    align-items: center;
  }

  .search-button {
    cursor: pointer;
    user-select: none;
    transition: 0.4s ease;
  }

  .search-button:hover {
    filter: brightness(2) opacity(0.9);
  }

  .search-button:active {
    filter: brightness(0.9);
  }

  .search-input {
    font-size: 12px;
    padding: 0 10px;
    width: 70%;
  }

  .search-box {
    background-color: #141414;
    padding: 6px 8px;
    border-radius: 4px;
    margin: 0 6px;
    overflow: hidden;
    white-space: nowrap;
    width: 180px;
    transition: 0.4s ease;
    border: 1px solid #fafafa;
  }

  #top-navbar-box {
    display: flex;
    align-items: center;
    background-color: #3949ab;
    width: 100%;
  }

  .top-navbar-box-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
  }

  .top-navbar-fixed-menu-item {
    padding: 14px;
    transition: 0.2s ease;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.015);
    margin: 10px 0;
  }

  .top-navbar-fixed-menu-item:hover {
    filter: brightness(1.1);
  }

  .top-navbar-fixed-menu-item:active {
    filter: brightness(0.9);
  }

  #top-navbar-fixed-menu {
    position: absolute;
    width: 100%;
    left: 0;
    background-color: #141414;
    transition: 0.4s ease;
    padding: 10px;
    z-index: 15;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .top-navbar-fixed-menu-mask {
    width: 100%;
    position: fixed;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    user-select: none;
    cursor: pointer;
    z-index: 10;
  }

  #top-navbar-placeholder {
    flex: 1;
  }

  #top-navbar-content {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  #top-navbar-menu {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .sidebar-open-control-button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    transition: 0.4s ease;
    color: #fafafa;
    user-select: none;
    text-align: center;
    line-height: 47px;
  }

  .sidebar-open-control-button:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .sidebar-open-control-button:active {
    background-color: rgba(0, 0, 0, 0.4);
  }

  input::-webkit-input-placeholder {
    color: #d3d3d3;
  }

  input:-moz-placeholder {
    color: #d3d3d3;
  }

  input:-ms-input-placeholder {
    color: #d3d3d3;
  }

</style>
