
import connection from "../../config/db";

const   SeasonAdd  = async (req, res)  => {
    try {
           const query = `
            INSERT INTO Season
                       (SeasonName
                       ,StartingDate
                       ,EndingDate
                       ,Margin
                       ,Status)
                 VALUES
                       ('${req.body.SeasonName}'
                       ,'${req.body.StartingDate}'
                       ,'${req.body.EndingDate}'
                       ,${req.body.Margin}
                       ,${req.body.Status})`;
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
