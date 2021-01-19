let vehicle

export default{
    setVehicle: (newVehicle) => {
        vehicle = newVehicle;
    },
    list: () => {
        return vehicle.get('vehicles')
    },
    listById: (uuid) => {
        return vehicle.get('vehicles/' + uuid)
    },
    create:(vehicle) => {
        return vehicle.post('vehicles', vehicle)
    },
    update:(uuid, vehicle) => {
        return vehicle.put('vehicles/' + uuid, vehicle)
    },
    delete:(uuid) => {
        return vehicle.delete('vehicles/', uuid)
    }
}