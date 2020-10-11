<template>
  <div>
    <div
      id="footer-layout-box"
      ref="footerLayoutBox"
    >
      <div
        style="user-select: none;"
      >
        <img
          style="height: 280px;"
          src="/@/assets/biglogo_min.png"
          @mousedown="e => e.preventDefault()"
        >
      </div>
      <div style="margin-top: 10px;">
        <a
          href="https://osu.ppy.sh/users/5084172"
          style="color: #fce4ec;"
          title="PurePeace's userpage"
        >PurePeace
        </a>
        made with
        <svg-icon
          icon-class="heart-fill"
          style="color: #e91e63; font-size: 18px;"
        />
        2020.
      </div>
      <div style="margin-top: 10px; font-size: 24px;">
        <a
          href="https://github.com/Pure-Peace"
          target="_blank"
          title="osuKafuu! repo"
        ><svg-icon icon-class="github-fill" /></a>
        <a
          href="http://wpa.qq.com/msgrd?v=3&uin=940857703&site=qq&menu=yes"
          target="_blank"
          title="来对线？呵呵"
        >
          <svg-icon
            style="margin-left: 10px;"
            icon-class="QQ"
          /></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
a {
  color: #fafafa;
}

a:hover {
  color: #b2ebf2;
}

#footer-layout-box {
  opacity: 0.95;
  flex-direction: column;
  font-weight: lighter;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #020316;
  border-top: 1px dashed rgba(255, 255, 255, 0.4);
  justify-content: center;
  color: #fafafa;
  padding: 20px;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 40%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.92)),url('../assets/deb.jpg');
}

</style>
