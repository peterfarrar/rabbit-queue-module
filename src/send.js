const { publishToQueue, closeConnection } = require('./util/rabbit-methods')

const doTheThing = async () => {
  const msg = "Hello world!"
  const result = await publishToQueue(msg)
  
  console.log(" [x] Sent %s", msg)
  console.log("RESULT:", result)

  setTimeout(async function () {
    await closeConnection()
    process.exit(0)
  }, 500)
}

doTheThing()
