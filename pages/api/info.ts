import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @docs https://nextjs.org/docs/api-routes/introduction
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = `10 New places available!`
  res.json({ msg: message })
}
