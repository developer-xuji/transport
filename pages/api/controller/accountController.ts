import type { NextApiRequest, NextApiResponse } from 'next';
import AppDataSource from '../../../db/dataSource';
import {Account} from '../../../db/entities/index';
import {encryption} from '../../../utils/md5';
import {createJWT} from "../../../utils/jwt";
import initDataSource from '../../../utils/initDataSource';

type Data = {
  username?: string,
  password?: string,
  message?: string,
  token?: string,
}

const ERROR_MESSAGE = 'No matched account'

const getAccount = async( 
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  initDataSource(req, res);
  const accountRepo = AppDataSource.getRepository(Account);
  const {username, passowrd} = req.body;
  const account = await accountRepo.findOne({
    where:{
      username: username,
      password: encryption(passowrd),
    }
  });

  if(account)
    res.status(200).json(account);
  else
    res.status(401).json({message: ERROR_MESSAGE});
}

const createAccount = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  initDataSource(req, res);
  console.log("init done");
  const {username, password} = req.body;

  //Check for missing data
  if(!(username && password )){
    return res.status(401).json({
      message:'Necessary Data Missed'
    })
  }

  console.log("Check missing done");
   
  const accountRepo = AppDataSource.getRepository(Account);

  //Check if the account is exist
  try{
    const account = await accountRepo.findOneBy({
      username: username,
    });
    if(account)
      return res.status(401).json({
        message:'The user has already existed'     
      })
  }catch(error: any){
    console.log(error);
    return res.status(501).json({
      message:error?.message || 'Failed to find a response from User or Account'
    })
  }

  console.log("Check exist account done");

  //Create account
  let newAccount = new Account()
  newAccount.username = username;
  newAccount.password = encryption(password);

  try{
    await accountRepo.save(newAccount);
    const token = (await createJWT({username, password})).toString();
    return res.status(200).json({token});
  }catch(error: any){
    return res.status(502).json({
      message:error?.message || 'Failed to find a response from User or Account'
    })
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAccount, createAccount}