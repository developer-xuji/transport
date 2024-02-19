import type { NextApiRequest, NextApiResponse } from 'next'
import containerController from '../controller/containerController'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
   return containerController.createContainer(req, res);
}