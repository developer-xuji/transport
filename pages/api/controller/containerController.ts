import type { NextApiRequest, NextApiResponse } from 'next';
import AppDataSource from '../../../db/dataSource';
import {Container} from '../../../db/entities/index';

type ContainerData = {
  containerId?: string;
  ship?: string;
  type?: string;
  train?: string;
  destination?: string;
  enterTime?: string;
  message?: string;
}
type ContainerList = {
  list?:Container[];
  message?: string;
}

//添加一个箱子
const createContainer = async(req: NextApiRequest, res: NextApiResponse<ContainerData>) => {
  if(!AppDataSource.isInitialized){
    await AppDataSource.initialize()
  }
  const containerRepo = AppDataSource.getRepository(Container);

  const {containerID, ship, train, type, destination, enterTime} = req.body;
  let newContainer = new Container();
  newContainer.containerID = containerID;
  newContainer.ship = ship;
  newContainer.train = train;
  newContainer.type = type;
  newContainer.destination = destination;
  newContainer.enterTime = enterTime;

  try{
    await containerRepo.save(newContainer);
    return res.status(200).json(newContainer);
  } catch (error: any){
    return res.status(500).json({
      message:error?.message || 'Failed to save this container'
    })
  }
}

//删除一个箱子
const deleteContainer = async(req: NextApiRequest, res: NextApiResponse<ContainerData>) => {
  if(!AppDataSource.isInitialized){
    await AppDataSource.initialize()
  }
  const containerRepo = AppDataSource.getRepository(Container);
  const {id} = req.body;

  try{
    const targetContainer = await containerRepo.findOneBy(id);
    targetContainer && containerRepo.remove([targetContainer]);
    return res.status(200).json({message:`Container ${id} is removed.`});
  }catch(error: any){
    return res.status(500).json({
      message:error?.message || 'Failed to delete this container'
    })
  }
}

//获取全部箱子
const getAllContainers = async(req: NextApiRequest, res: NextApiResponse<ContainerList>) => {
  if(!AppDataSource.isInitialized){
    await AppDataSource.initialize()
  }
   const containerRepo = AppDataSource.getRepository(Container);
   try{
    const containers = await containerRepo.find();
    return res.status(200).json({list: containers});
   }catch(error: any){
    return res.status(500).json({
      message:error?.message || 'Failed to delete this container'
    })
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {createContainer, deleteContainer, getAllContainers}