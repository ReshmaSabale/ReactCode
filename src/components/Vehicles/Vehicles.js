import Vehicle from './Vehicle/vehicle'

const vehicles = (props) => {
    console.log("Component : Vehicles | Method : Vehicles component is loading..");
return(

    props.vehicles.map((vehicleItem,index) => {
        return  <Vehicle 
            key={vehicleItem.Id}
            vehicleType={vehicleItem.vehicleType} 
            Name={vehicleItem.Name} 
            Manufacturer={vehicleItem.Manufacturer} 
            FuelType={vehicleItem.FuelType}
            onDelete={props.onDelete}
            />
        })
    );
};

export default vehicles;