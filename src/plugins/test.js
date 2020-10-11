const install = (app, options) => {
  app.mixin({
    beforeCreate () {
      console.log('server beforeCreated')
    }
  })
}

export default install
