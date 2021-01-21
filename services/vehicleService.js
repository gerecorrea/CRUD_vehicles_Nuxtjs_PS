let vehicle

export default {
    setVehicle: (newVehicle) => {
        vehicle = newVehicle;
    },
    list: () => {
        return vehicle.get('vehicles'); 
    },
    listById: (uuid) => {
        return vehicle.get('vehicles/' + uuid);
    },
    create: (vehicle_object) => {
        return vehicle.post('vehicles', vehicle_object); 
    },
    update: (uuid, vehicle_object) => {
        return vehicle.put('vehicles/' + uuid, vehicle_object);
    },
    delete: (uuid) => {
        return vehicle.delete('vehicles/' + uuid);
    }
}