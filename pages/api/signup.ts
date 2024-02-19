import type { NextApiRequest, NextApiResponse } from 'next'
import accountController from './controller/accountController'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
   return accountController.createAccount(req, res);
}