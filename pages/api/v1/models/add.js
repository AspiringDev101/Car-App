import connection from "../../config/db";

const ModelCreate = async (req, res) => {
    try {
        const query = `
            INSERT INTO models (brand_id, Name)
            VALUES (${req.body.BrandID}, '${req.body.Name}')`;

        console.log(query);

        await connection.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                console.log('result', result);
                res.status(200).json(result);
            }
        });
    } catch (e) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default ModelCreate;
