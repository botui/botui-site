import { BotuiInterface, createBot } from "botui"
import {
  BotUI,
  BotUIAction,
  BotUIMessageList,
  BotUIActionTextReturns,
} from "@botui/react"
import { useEffect, useRef } from "react"

const runBot = (mybot: BotuiInterface, callback: () => void) => {
  mybot.message
    .add({ text: "hello" })
    .then(() => mybot.wait({ waitTime: 500 }))
    .then(() => mybot.message.add({ text: "this is BotUI" }))
    .then(() => mybot.wait({ waitTime: 1000 }))
    .then(() => mybot.message.add({ text: "a library for conversational UIs" }))
    .then(() => mybot.wait({ waitTime: 1000 }))
    .then(() =>
      mybot.message.add({ text: "just like the one you are interacting with" })
    )
    .then(() => mybot.wait({ waitTime: 1000 }))
    .then(() =>
      mybot.message.add({
        text: "you can show messages and ask users for actions",
      })
    )
    .then(() => mybot.wait({ waitTime: 1000 }))
    .then(() => mybot.message.add({ text: "e.g:" }))
    .then(() => mybot.wait({ waitTime: 1500 }))
    .then(() => mybot.message.add({ text: "what is your name?" }))
    .then(() => mybot.wait({ waitTime: 1000 }))
    .then(() =>
      mybot.action.set(
        {
          type: "text",
          defaultValue: "John doe",
          placeholder: "Your name",
        },
        { actionType: "input" }
      )
    )
    .then(
      (data) =>
        mybot.wait(
          { waitTime: 1000 },
          data
        ) as unknown as BotUIActionTextReturns
    )
    .then((data) =>
      mybot.message.add({ text: `nice to meet you ${data?.text}!` })
    )
    .then(() => mybot.wait({ waitTime: 1000 }))
    .then(() =>
      mybot.message.add({
        text: "you can also show images and embed content from other sites",
      })
    )
    .then(() => mybot.wait({ waitTime: 1000 }))
    .then(() =>
      mybot.message.add(
        { src: "https://giphy.com/embed/PxSFAnuubLkSA", frameBorder: "0" },
        { messageType: "embed" }
      )
    )
    .then(() => mybot.wait({ waitTime: 3000 }))
    .then(() => mybot.message.add({ text: "cool, right?" }))
    .then(() => mybot.wait({ waitTime: 1000 }))
    .then(() =>
      mybot.message.add({
        text: "go on, explore the docs and build yourself a bot",
      })
    )
    .then(callback)
}

let timer: NodeJS.Timeout

export const HomeBot = ({ onEnd }: { onEnd: () => void }) => {
  const botRef = useRef(createBot())
  const mybot = botRef.current

  useEffect(() => {
    clearTimeout(timer)
    timer = setTimeout(() => runBot(mybot, onEnd), 50)
  })

  return (
    <BotUI bot={mybot}>
      <BotUIMessageList />
      <BotUIAction />
    </BotUI>
  )
}
