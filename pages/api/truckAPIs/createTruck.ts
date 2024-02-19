import type { NextApiRequest, NextApiResponse } from 'next'
import truckController from '../controller/truckController'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
   return truckController.createTruck(req, res);
}