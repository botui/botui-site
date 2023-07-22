import { createBot } from "botui"
import { useEffect, useRef, useState } from "react"
import { BotUI, BotUIMessageList, BotUIAction } from "@botui/react"

const runBot = (myBot, callback) => {
  console.log("runBot")

  myBot
    .wait({ waitTime: 1000 })
    .then(() => myBot.message.add({ text: "hello, what is your name?" }))
    .then(() =>
      myBot.action.set(
        {
          options: [
            { label: "John", value: "john" },
            { label: "Jane", value: "jane" },
          ],
        },
        { actionType: "select" }
      )
    )
    .then((data) =>
      myBot.message.add({ text: `nice to meet you ${data.selected.label}` })
    )
    .then(callback)
}

let timer = null

export const DemoBot = ({ onEnd = () => {}, hasEnded = false }) => {
  const botRef = useRef(createBot())
  const myBot = botRef.current

  useEffect(() => {
    console.log("effect")
    if (hasEnded) return

    clearTimeout(timer)
    timer = setTimeout(() => runBot(myBot, onEnd), 50)
  }, [])

  return (
    <div className="demo_container">
      <BotUI bot={myBot}>
        <BotUIMessageList bringIntoView={false} />
        <BotUIAction bringIntoView={false} />
      </BotUI>
    </div>
  )
}

export const Demo = () => {
  const [introEnded, setIntroEnded] = useState(false)

  return <DemoBot hasEnded={introEnded} onEnd={() => setIntroEnded(true)} />
}
