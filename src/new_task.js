const { publishToQueue, closeConnection } = require('./util/rabbit-methods')

const doTheThing = async () => {
  const message = process.argv.slice(2).join(' ') || 'Hello world!'
  const result = await publishToQueue(message)
  console.log(" [x] Sent '%s'", message)
  console.log('RESULT:', result)

  setTimeout(async function () {
    await closeConnection()
    process.exit(0)
  }, 500)
}

doTheThing()
