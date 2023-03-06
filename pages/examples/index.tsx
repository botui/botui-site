import Link from "next/link"
import { NextPage } from "next"
import { examplesData } from "../../data/examples"

const basePath = '/examples/'
const ExamplesHome: NextPage = () => {
  return <div style={{ textAlign: 'center', margin: '40px 0' }}>
    {
      examplesData.map(eg => <Link key={eg.slug} href={`${basePath}${eg.slug}`}>
        <a>{eg.label}</a>
      </Link>)
    }
  </div>
}

export default ExamplesHome