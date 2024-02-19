import type { NextApiRequest, NextApiResponse } from 'next';
import AppDataSource from '../../../db/dataSource';
import {Truck} from '../../../db/entities/index';

type TruckData = {
  id?: number;
  licensePlate?: string;
  driverName?: string;
  phone?: string;
  message?: string;
}
type TruckList = {
  list?:Truck[];
  message?: string;
}

//添加一个车辆
const createTruck = async(req: NextApiRequest, res: NextApiResponse<TruckData>) => {
  if(!AppDataSource.isInitialized){
    await AppDataSource.initialize()
  }
  const truckRepo = AppDataSource.getRepository(Truck);

  const {licensePlate, driverName, phone} = req.body;
  let newTruck = new Truck();
  newTruck.driverName = driverName;
  newTruck.licensePlate = licensePlate;
  newTruck.phone = phone;
  console.log(newTruck)
  try{   
    return res.status(200).json(await truckRepo.save(newTruck));
  } catch (error: any){
    return res.status(500).json({
      message:error?.message || 'Failed to save this container'
    })
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {createTruck}