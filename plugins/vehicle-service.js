import VehicleService from '@/services/VehicleService'

export default ({app}) => {
    // Usa-se por padrão "cliente"
    VehicleService.setVehicle(app.$axios)
}