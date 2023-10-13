import connection from "../../config/db";

const CarEdit = async (req, res) => {
    try {
       

        const query = `
            UPDATE cars
            SET
                group_id = ${req.body.GroupId},
                brand_id = ${req.body.BrandId},
                model_id = ${req.body.ModelId},
                transmission = '${req.body.Transmission}',
                engine_size = ${req.body.EngineSize},
                fuel_type = '${req.body.FuelType}',
                car_body_type = '${req.body.CarBodyType}',
                drive_unit = '${req.body.DriveUnit}',
                number = '${req.body.Number}',
                color = '${req.body.Color}',
                year = ${req.body.Year},
                odometer = ${req.body.Odometer},
                fuel_level = ${req.body.FuelLevel},
                tank_volume = ${req.body.TankVolume},
                consumption = ${req.body.Consumption},
                number_of_seats = ${req.body.NumberOfSeats},
                number_of_doors = ${req.body.NumberOfDoors},
                large_airbags = ${req.body.LargeAirbags},
                small_airbags = ${req.body.SmallAirbags},
                vin = '${req.body.VIN}',
                imei_tracker = '${req.body.IMEITracker}'
            WHERE
                id = ${req.body.id}`;

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

export default CarEdit;
