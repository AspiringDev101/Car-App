
import connection from "../../config/db";

export default async (req, res) => {
    
    try {
        if(req.method == 'GET'){
        const query = 'SELECT * FROM seasons ORDER BY SeasonID DESC';
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