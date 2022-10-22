import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import { HomeBot } from '../components/HomeBot'
import styles from '../styles/Home.module.css'

// const botcode = `mybot.message.add({ text: "hello" })
//   .then(() => mybot.wait({ waitTime: 500 }))
//   .then(() => mybot.message.add({ text: "this is BotUI" }))
//   .then(() => mybot.wait({ waitTime: 1000 }))
//   .then(() => mybot.message.add({ text: "a library for conversational UIs" }))
//   .then(() => mybot.wait({ waitTime: 1000 }))
//   .then(() =>
//     mybot.message.add({ text: "just like the one you are interacting with" })
//   )
//   .then(() => mybot.wait({ waitTime: 1000 }))
//   .then(() =>
//     mybot.message.add({
//       text: "you can show messages and ask users for actions",
//     })
//   )
//   .then(() => mybot.wait({ waitTime: 1000 }))
//   .then(() => mybot.message.add({ text: "e.g:" }))
//   .then(() => mybot.wait({ waitTime: 1500 }))
//   .then(() => mybot.message.add({ text: "what is your name?" }))
//   .then(() => mybot.wait({ waitTime: 1000 }))
//   .then(() =>
//     mybot.action.set(
//       {
//         type: "text",
//         defaultValue: "John doe",
//         placeholder: "Your name",
//       },
//       { actionType: "input" }
//     )
//   )
//   .then((data) => mybot.wait({ waitTime: 1000 }, data))
//   .then((data) =>
//     mybot.message.add({ text: \`nice to meet you \${data?.text}!\` })
//   )
//   .then(() => mybot.wait({ waitTime: 1000 }))
//   .then(() =>
//     mybot.message.add({
//       text: "you can also show images and embed content from other sites",
//     })
//   )
//   .then(() => mybot.wait({ waitTime: 1000 }))
//   .then(() =>
//     mybot.message.add(
//       { src: "https://giphy.com/embed/PxSFAnuubLkSA", frameBorder: "0" },
//       { messageType: "embed" }
//     )
//   )
//   .then(() => mybot.wait({ waitTime: 3000 }))
//   .then(() => mybot.message.add({ text: "cool, right?" }))
//   .then(() => mybot.wait({ waitTime: 1000 }))
//   .then(() =>
//     mybot.message.add({
//       text: "go on, explore the docs and build yourself a bot",
//     })
//   )
// `

const StarsCount = () => {
  const [stars, setStars] = useState(0)

  useEffect(() => {
    fetch(`https://api.github.com/repos/botui/botui`)
      .then((res) => res.json())
      .then((res) => {
        setStars(res?.stargazers_count?.toLocaleString())
      })
  }, [])

  return <h4>
    <a href='https://github.com/botui/botui' target='_blank' rel="noreferrer">
      {stars} stars on Github
    </a>
  </h4>
}

const Home: NextPage = () => {
  const [introEnded, setIntroEnded] = useState(false)

  return (
    <div className={`main-container ${styles.container} ${introEnded ? 'intro-complete' : ''}`}>
      <Head>
        <title>BotUI - Create customizable conversational UIs</title>
        <meta name="description" content="JavaScript framework for conversational UIs" />
        <link rel="icon" href="/botui.svg" />
      </Head>

      <header>
        <div className={styles.header}>
          <div>
            <Image src="/botui.svg" alt="BotUI Logo" width={50} height={40} />
          </div>
          {
            introEnded && <StarsCount />
          }
        </div>
      </header>

      <main className={styles.main}>
        <div className='visible'>
          <HomeBot onEnd={() => setIntroEnded(true)} />
        </div>

        <div className={styles.code}>
          npm i botui@next @botui/react
        </div>

        <div className={styles.links}>
          <a href='https:///docs.botui.org'>
            Documentation
          </a>
          <a href='https:///examples.botui.org'>
            Examples
          </a>
          <a href='https://github.com/botui/botui'>
            Github
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
