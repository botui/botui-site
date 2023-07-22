/** @type {import('nextra-theme-docs').DocsThemeConfig} */

// import { ChatWidget } from "@/common/ChatWidget"
import Link from "next/link"
import { useRouter } from "next/router"
import { useConfig } from "nextra-theme-docs"

export default {
  logo: () => (
    <svg
      height='30'
      viewBox='0 0 334 214'
      fill='none'
      preserveAspectRatio="true"
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M200.964 22.107L238.376 0L226.472 37.978H257.93L239.342 62.153C239.342 62.153 217.118 49.031 200.964 22.107Z'
        fill='black'
      />
      <path
        d='M89.401 213.415H208.818C239.39 193.755 259.64 159.436 259.64 120.385C259.64 59.334 210.153 9.851 149.109 9.851C88.066 9.851 38.577 59.334 38.577 120.385C38.578 159.436 58.83 193.755 89.401 213.415Z'
        fill='#0F86DC'
      />
      <path
        d='M174.434 91.024L147.545 66.403L145.645 100.818L113.573 93.995L130.306 119.095C130.306 119.096 163.244 101.14 174.434 91.024Z'
        fill='black'
      />
      <path
        d='M331.393 213.415C332.571 206.807 333.187 200 333.187 193.052C333.187 129.425 281.607 77.84 217.98 77.84C154.352 77.84 102.77 129.424 102.77 193.052C102.77 200 103.387 206.807 104.564 213.415H331.393Z'
        fill='#00B1BC'
      />
      <path
        d='M173.32 155.548L204.308 141.073L185.933 169.846L212.356 170.949L192.451 186.729C192.452 186.729 173.461 176.28 173.32 155.548Z'
        fill='black'
      />
      <path
        d='M205.542 213.415C198.662 162.8 155.275 123.786 102.77 123.786C50.267 123.786 6.879 162.8 0 213.415H205.542Z'
        fill='#0FDCAB'
      />
      <path
        d='M138.906 169.202C138.906 174.838 134.339 179.405 128.703 179.405C123.071 179.405 118.502 174.838 118.502 169.202C118.502 163.57 123.071 159.001 128.703 159.001C134.339 159.001 138.906 163.57 138.906 169.202Z'
        fill='black'
      />
      <path
        d='M165.543 58.288C171.178 58.288 175.746 53.72 175.746 48.085C175.746 42.45 171.178 37.882 165.543 37.882C159.908 37.882 155.34 42.45 155.34 48.085C155.34 53.72 159.908 58.288 165.543 58.288Z'
        fill='black'
      />
      <path
        d='M197.938 133.991C203.572 133.991 208.14 129.423 208.14 123.789C208.14 118.155 203.572 113.587 197.938 113.587C192.304 113.587 187.736 118.155 187.736 123.789C187.736 129.423 192.304 133.991 197.938 133.991Z'
        fill='black'
      />
    </svg>
  ),
  docsRepositoryBase: "https://github.com",
  project: {
    link: "https://github.com/botui/botui",
  },
  footer: {
    text: (
      <>
        {new Date().getFullYear()} © BotUI{" "}
        <span style={{ margin: "0 5px" }}>-</span>
        <Link href='/docs'>Docs</Link>
      </>
    ),
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - BotUI",
    }
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    const url = `https://botui.org${asPath}`

    return (
      <>
        {
          asPath?.trim() !== "/" && <link rel='canonical' href={url} />
          // '/' is the home page. adding cononical link, ending in slash to home page will cause duplicate content issue
        }
        <link rel='icon' href='/botui.svg' />
        <meta property='og:url' content={url} />
        {/*
          it seems the description is already taken care of by Nextra. even the og:..
        */}
        {frontMatter.keywords && (
          <meta name='keywords' content={frontMatter.keywords} />
        )}
      </>
    )
  },
  search: false,
}
