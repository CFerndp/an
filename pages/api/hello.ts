import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '@/models/Data';

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
