import type { GetStaticProps, NextPage } from 'next'

type Props = {
  about_text: string
}

const LOREM =
  'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. '

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      about_text: Array.from({ length: 50000 }, (_, i) => LOREM).join('\n'),
    },
  }
}

const Page: NextPage<Props> = ({ about_text }: Props) => {
  return <div>{about_text}</div>
}

export default Page
