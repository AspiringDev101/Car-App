
import connection from "../../config/db";

const   SeasonAdd  = async (req, res)  => {
    try {
           const query = `
           UPDATE Season
           SET 
               SeasonName = '${req.body.SeasonName}',
               StartingDate = '${req.body.StartingDate}',
               EndingDate = '${req.body.EndingDate}',
               Margin = ${req.body.Margin},
               Status = ${req.body.Status}
           WHERE
               SeasonID = ${req.body.SeasonID}`;
                       console.log(query)
                       await connection.query(
                        query,
                       (error,result)=>{
                        console.log('error',error)
                        
                        res.status(200).json(result);
                    })
      } catch (e) {
          res.status(500).json({ message: 'Internal server error' });
      }
};
export default SeasonAdd
