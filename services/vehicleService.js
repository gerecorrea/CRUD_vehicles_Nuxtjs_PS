let vehicle

export default {
    setVehicle: (newVehicle) => {
        // Usa-se por padrão "client"
        vehicle = newVehicle;
    },
    list: () => {
        return vehicle.get('vehicles'); 
    },
    listById: (uuid) => {
        return vehicle.get('vehicles/' + uuid);
    },
    create: (vehicleObject) => {
        return vehicle.post('vehicles', vehicleObject); 
    },
    update: (uuid, vehicleObject) => {
        return vehicle.put('vehicles/' + uuid, vehicleObject);
    },
    delete: (uuid) => {
        return vehicle.delete('vehicles/' + uuid);
    }
}