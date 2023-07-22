import Head from "next/head"
import Image from "next/image"
import type { NextPage } from "next"
import { useEffect, useState } from "react"

import { AuthBtn } from "../src/components/AuthBtn"
import { HomeBot } from "../src/components/HomeBot"
// import styles from "../styles/Home.module.css"

const StarsCount = () => {
  const [stars, setStars] = useState(0)

  useEffect(() => {
    fetch(`https://api.github.com/repos/botui/botui`)
      .then((res) => res.json())
      .then((res) => {
        setStars(res?.stargazers_count?.toLocaleString())
      })
  }, [])

  return (
    <h4>
      <a href='https://github.com/botui/botui' target='_blank' rel='noreferrer'>
        {stars} stars on Github
      </a>
    </h4>
  )
}

const Home: NextPage = () => {
  const [introEnded, setIntroEnded] = useState(false)

  return (
    <div>
      <Head>
        <title>BotUI - Create customizable conversational UIs</title>
        <meta
          name='description'
          content='JavaScript framework for conversational UIs'
        />
        <link rel='icon' href='/botui.svg' />
      </Head>

      <header>
        <div>
          <div>
            <Image src='/botui.svg' alt='BotUI Logo' width={50} height={40} />
          </div>
          {introEnded && <StarsCount />}
        </div>
      </header>

      <main>
        <div className='flex justify-center'>
          <AuthBtn />
          {/* <HomeBot hasEnded={introEnded} onEnd={() => setIntroEnded(true)} /> */}
        </div>

        <div>npm i botui @botui/react</div>

        <div>
          <a href='https:///docs.botui.org'>Documentation</a>
          <a href='https:///examples.botui.org'>Examples</a>
          <a href='https://github.com/botui/botui'>Github</a>
        </div>
      </main>
    </div>
  )
}

export default Home
