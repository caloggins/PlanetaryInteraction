const fse = require('fs-extra')

const copy = (source, target) => {
    console.log(`Copying files from ${source} to ${target}`)

    fse.copy(source, target)
        .then(() => console.log('Files copied'))
        .catch(err => console.error(err))
  }

  copy('./build/static/css', '../Paylocity.WireLog.Web/Content')
  copy('./build/static/js', '../Paylocity.WireLog.Web/Scripts')
  copy('./build/static/media', '../Paylocity.WireLog.Web/Content')
