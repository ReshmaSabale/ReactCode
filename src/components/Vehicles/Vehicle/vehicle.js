import './vehicle.css'

const vehicle=props =>
(
    <div className="vehicle col-lg-3">
        <h1>
            vehicle:{props.vehicleType}
        </h1>

        <p onClick={props.updateClick}> Name: {props.Name}</p>
        <p> Manufacturer: {props.Manufacturer}</p>
        <p> Fuel: {props.FuelType}</p>
        <button className="btn btn-danger btn-sm" onClick={props.onDelete}> Delete </button>
      {/*} <input type="text" onChange={props.nameChanged} value={props.Name}></input> --> */}  {/*dual binding*/}
      
    </div>
);

export default vehicle;