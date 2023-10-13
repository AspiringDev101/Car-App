import connection from "../../config/db";

const BrandGetById = async (req, res) => {
    try {
        console.log(req.query);
        const query = `SELECT * FROM brands WHERE id = ${req.query.brandsEdit}`;
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

export default BrandGetById;
