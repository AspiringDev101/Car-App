
import connection from "../config/db";

export default async (req, res) => {
    
    try {
        if(req.method == 'GET'){
        const query = 'Select * from Season';
        await connection.query(
            query,
           (error,result)=>{
            console.log('result',result)
            
            res.status(200).json(result);
        })
        }else if(req.method == 'POST'){
            const query = `
            INSERT INTO [dbo].[Season]
                       ([SeasonName]
                       ,[StartingDate]
                       ,[EndingDate]
                       ,[Margin]
                       ,[Status])
                 VALUES
                       ('${req.body.SeasonName}'
                       ,'${req.body.StartingDate}'
                       ,'${req.body.EndingDate}'
                       ,'${req.body.Margin}'
                       ,'${req.body.Status}')`;
                       console.log(query)
                       await connection.query(
                        query,
                       (error,result)=>{
                        console.log('result',result)
                        
                        res.status(200).json(result);
                    })
         

    
        }
      } catch (e) {
          res.status(500).json({ message: 'Internal server error' });
        
      }
};
// export default function handler(req, res) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }