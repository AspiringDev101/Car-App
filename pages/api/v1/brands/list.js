import connection from "../../config/db";

export default async (req, res) => {
    
    try {
        if (req.method === 'GET') {
            const query = 'SELECT * FROM brands ORDER BY id DESC';
            await connection.query(
                query,
                (error, result) => {
                    if (error) {
                        console.log('Error:', error);
                        res.status(500).json({ message: 'Internal server error' });
                    } else {
                        console.log('result', result);
                        res.status(200).json(result);
                    }
                }
            );
        }
    } catch (e) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
