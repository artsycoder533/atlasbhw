import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const secret = req.headers['x-secret-key'];
      if (secret !== process.env.MY_SECRET) {
        return res.status(403).json({ message: 'Invalid token' });
      }

      const path = req.body.path;

      // Trigger revalidation for the specified path
      await res.revalidate(path);

      return res.json({ revalidated: true });
    } catch (err) {
      return res.status(500).json({ message: 'Error revalidating' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
