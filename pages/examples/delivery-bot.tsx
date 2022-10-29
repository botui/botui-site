import { NextPage } from "next"
import { useEffect, useRef } from "react"
import { BotUI, BotUIAction, BotUIMessageList } from "@botui/react"
import { createBot } from "botui"
import { deliveryBot } from "../../data/examples/delivery-bot"

let timer: NodeJS.Timeout

const ExamplesDeliveryBot: NextPage = () => {
  const botRef = useRef(createBot())
  const mybot = botRef.current

  useEffect(() => {
    clearTimeout(timer)
    timer = setTimeout(() => deliveryBot(mybot), 50)
  })

  return (
    <BotUI bot={mybot}>
      <BotUIMessageList />
      <BotUIAction />
    </BotUI>
  )
}

export default ExamplesDeliveryBot