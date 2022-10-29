import Link from "next/link"
import { NextPage } from "next"
import { examplesData } from "../../data/examples"

const basePath = '/examples/'
const ExamplesHome: NextPage = () => {
  return <div>
    {
      examplesData.map(eg => <Link href={`${basePath}${eg.slug}`}>
        <a>{eg.label}</a>
      </Link>)
    }
  </div>
}

export default ExamplesHome