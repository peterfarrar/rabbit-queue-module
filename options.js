
module.exports = {
  rabbitQueue: process.env.RABBIT_QUEUE || "testqueue",
  rabbitQueueDurable: process.env.RABBIT_QUEUE_DURABLE === "true" ? true : false,
  rabbitUrl: process.env.RABBIT_URL || "amqp://localhost",
  rabbitSubscribeNoAck: process.env.RABBIT_NO_ACK === "true" ? true : false,
  rabbitQueuePersist: process.env.RABBIT_QUEUE_PERSIST === "true" ? true : false,
  rabbitChannelPrefetch: process.env.RABBIT_CHANNEL_PREFETCH || null
}