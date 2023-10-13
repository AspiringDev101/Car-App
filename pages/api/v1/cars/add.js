import connection from "../../config/db";

const CarCreate = async (req, res) => {
    try {
                const query = `
            INSERT INTO cars (
                group_id,
                brand_id,
                model_id,
                transmission,
                engine_size,
                fuel_type,
                car_body_type,
                drive_unit,
                number,
                color,
                year,
                odometer,
                fuel_level,
                tank_volume,
                consumption,
                number_of_seats,
                number_of_doors,
                large_airbags,
                small_airbags,
                vin,
                imei_tracker
            )
            VALUES (
                ${req.body.GroupId},
                 ${req.body.BrandId},
                 ${req.body.ModelId},
                 '${req.body.Transmission}',
                 ${req.body.EngineSize},
                 '${req.body.FuelType}',
                 '${req.body.CarBodyType}',
                 '${req.body.DriveUnit}',
                 '${req.body.Number}',
                 '${req.body.Color}',
                 ${req.body.Year},
                 ${req.body.Odometer},
                 ${req.body.FuelLevel},
                 ${req.body.TankVolume},
                 ${req.body.Consumption},
                 ${req.body.NumberOfSeats},
                 ${req.body.NumberOfDoors},
                ${req.body.LargeAirbags},
                 ${req.body.SmallAirbags},
                 '${req.body.VIN}',
                 '${req.body.IMEITracker}'
               
            )`;

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

export default CarCreate;
