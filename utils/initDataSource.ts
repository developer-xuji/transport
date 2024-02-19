import AppDataSource from '../db/dataSource'

const initDataSource = async( req: any, res: any) => {
  try {
        if(!AppDataSource.isInitialized){
           await AppDataSource.initialize()
        }
    } catch (error:any) {
       return res.status(500).json({
            message:error?.message || 'Failed to initialize the AppDataSource'
        })
    }
}

export default initDataSource;