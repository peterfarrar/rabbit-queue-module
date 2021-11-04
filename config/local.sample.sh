# Persistant "work queue" with ack
# npm run worker/new_task
lesson2() {
  export RABBIT_QUEUE="task-queue"
  export RABBIT_QUEUE_DURABLE="true"
  export RABBIT_URL="amqp://localhost"
  export RABBIT_NO_ACK="false"
  export RABBIT_QUEUE_PERSIST="true"
  export RABBIT_CHANNEL_PREFETCH="1"
}

# Very basic "named queue"
# No ack.
# npm run receive/send
lesson1() {
  export RABBIT_QUEUE="basic-queue"
  export RABBIT_QUEUE_DURABLE="true"
  export RABBIT_URL="amqp://localhost"
  export RABBIT_NO_ACK="true"
  export RABBIT_QUEUE_PERSIST="false"
  # export RABBIT_CHANNEL_PREFETCH=
}

lesson2