import VehicleService from '@/services/vehicleService'

export default ({app}) => {
    // Usa-se por padrão "cliente"
    VehicleService.setVehicle(app.$axios)
}