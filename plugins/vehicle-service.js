import vehicleService from '@/services/vehicleService'

export default ({app}) => {
    vehicleService.setVehicle(app.$axios)
}