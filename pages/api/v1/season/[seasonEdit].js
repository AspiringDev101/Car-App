
import connection from "../../config/db";

const   SeasonAdd  = async (req, res)  => {
    try {
            console.log(req.query)        
           const query = `Select * From Season Where SeasonID = ${req.query.seasonEdit}`;
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
