import vehicleService from '@/services/vehicleService'

export default ({app}) => {
    // Usa-se por padrão "cliente"
    vehicleService.setVehicle(app.$axios)
}