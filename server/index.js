const express = require('express')
const app = express()
const compression = require('compression')
const nunjucks = require('nunjucks')
const path = require('path')
const cors = require('cors')
const schedule = require('node-schedule')

const configs = require('./src/utils/configs')
const mongodb = require('./src/utils/mongodb')
const indexRouter = require('./src/routes/index')
const exampleRouter = require('./src/routes/Example_Route')
const pointRouter = require('./src/routes/Point_Route')

const loginRouter = require('./src/routes/Login_Route')
const adItemInfoRouter = require('./src/routes/AdItemInfo_Route')

const pointRepo = require('./src/repositories/Point_Repo')

app.use(cors())
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

nunjucks.configure('./src/views', {
  express: app,
  watch: true,
})

app.use(compression())
app.use(express.json({ limit: '200mb' }))
app.use(
  express.urlencoded({
    limit: '200mb',
    extended: false,
    parameterLimit: 50000,
  }),
)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/example', exampleRouter)
app.use('/point', pointRouter)
app.use('/adItem', adItemInfoRouter)

mongodb.runAfterAllConnected(() => {
  app.listen(configs.port, () => {
    console.log(`Server is running on port ${configs.port}`)
  })
})

schedule.scheduleJob('*/30 * * * *', async function () {
  try {
    const result = await pointRepo.reset()
    console.log(result)
  } catch (error) {
    console.error('DB리셋 오류:', error)
  }
})
