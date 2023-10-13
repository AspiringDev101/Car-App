import connection from "../../config/db";

const GroupReadById = async (req, res) => {
    try {
        console.log(req.query);
        const query = `SELECT * FROM groups WHERE id = ${req.query.groupId}`;
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

export default GroupReadById;
