'use strinct';
module.exports.examenindraPost = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    var timestamp = new Date().getTime();
    const body = JSON.parse(event.body);
    var name = body.name;
    var rotation_period = body.rotation_period;
    var orbital_period =  body.orbital_period;
    var diameter = body.diameter;
    var climate = body.climate;
    var gravity = body.gravity;
    var terrain = body.terrain;
    var surface_water = body.surface_water;
    var population = body.population;
    var count = body.count;

    if (count === null || count === undefined || count === 0 || isNaN(count) === true) 
    {
        callback(null,{
            statusCode: 400,
            headers: {'Content-Type': 'Application/json' } ,
            body: JSON.stringify({
                success: false,
                message: 'hay un error al registrar los datos'
            })
        })
    }else {
        callback(null,{
            statusCode: 200,
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    message: 'el post se registro correctamente',
                    data: {
                        name,
                        rotation_period,
                        orbital_period,
                        diameter,
                        climate,
                        gravity,
                        terrain,
                        surface_water,
                        population,
                        count
                    }
                },
            ),
        });
    }
};