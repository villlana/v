export default ({
  app
}) => {
  if (process.client) {
    document.body.classList = localStorage.getItem('__theme') !== null ? localStorage.getItem('__theme') : 'primary'
    app.head.bodyAttrs.class = localStorage.getItem('__theme') !== null ? localStorage.getItem('__theme') : 'primary'

  }
}
