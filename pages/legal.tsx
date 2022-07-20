import type { GetStaticProps, NextPage } from 'next'

type Props = {
  legal_text: string
}

const LOREM =
  'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. '

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      legal_text: Array.from({ length: 50000 }, (_, i) => LOREM).join('\n'),
    },
  }
}

const Page: NextPage<Props> = ({ legal_text }: Props) => {
  return <div>{legal_text}</div>
}

export default Page
