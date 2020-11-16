import './vehicle.css'

const vehicle=props =>
(
    <div className="vehicle col-lg-3">
        <h1>
            vehicle:{props.vehicleType}
        </h1>

        <p> Name: {props.Name}</p>
        <p> Manufacturer: {props.Manufacturer}</p>
        <p> Fuel: {props.FuelType}</p>
      
    </div>
);

export default vehicle;