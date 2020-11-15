import './vehicle.css'

const vehicle=props =>
(
    <div className='car'>
        <h1>
            vehicle:{props.vehicleType}
        </h1>

        <p> Name: {props.Name}</p>
        <p> Manufacturer: {props.Manufacturer}</p>
        <p> Fuel: {props.FuelType}</p>
        <p> Comments: {props.children}</p>
    </div>
);

export default vehicle;