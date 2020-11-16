import './App.css';
import Vehicle from './Vehicle/vehicle'
import { useState } from 'react';


const App=props=>{
  const [vehicleState,setVehicleState] = useState(
    {
    
        vehicles:[
          {vehicleType:"Car", Name:"Altraz", Manufacturer:"Tata", FuelType:"Petrol"},
          {vehicleType:"Car", Name:"Seltos", Manufacturer:"Kia", FuelType:"Diesel"},
          {vehicleType:"Car", Name:"XUV", Manufacturer:"Mahindra", FuelType:"Diesel"},
          {vehicleType:"Car", Name:"Baleno", Manufacturer:"Maruti Suzuki", FuelType:"Petrol"}
  
        ],
        count:4
      }
  );

    const updateHandler=(vehicleType)=>{
        setVehicleState({
              vehicles:[
                {vehicleType:vehicleType, Name:"Jaguar XF", Manufacturer:"Jaugar", FuelType:"Petrol"},
                {vehicleType:vehicleType, Name:"Continental GT Mulliner", Manufacturer:"Bentley", FuelType:"Electric"},
                {vehicleType:vehicleType, Name:"911 Carrera S", Manufacturer:"Porche", FuelType:"Diesel"},
                {vehicleType:vehicleType, Name:"DBS Superleggera", Manufacturer:"Aston Martin", FuelType:"Petrol"},
        
              ],
              count:4
            });
          }

          const nameChangeHandler=(event)=>{
            setVehicleState({
              vehicles:[
                {vehicleType:"Car", Name:event.target.value, Manufacturer:"Tata", FuelType:"Petrol"},
                {vehicleType:"Car", Name:"Seltos", Manufacturer:"Kia", FuelType:"Diesel"},
                {vehicleType:"Car", Name:"XUV", Manufacturer:"Mahindra", FuelType:"Diesel"},
                {vehicleType:"Car", Name:"Baleno", Manufacturer:"Maruti Suzuki", FuelType:"Petrol"},
        
              ],
              count:4
            });
          } 
      
    return(
      <div className="App container-fluid">
        <div className="row"> 
        <div className="col-lg-6">
          <h1> Vehicles List | Total Vehicles:{vehicleState.count} </h1>
        </div>
          
          <div className="col-lg-6 divButton">
          <button className="btn btn-primary btn-lg buttonUpdate" onClick={updateHandler.bind(this,"Sports Car")}> Update List </button>

        </div>
        </div>
        
        <div className="row">
          <Vehicle 
            vehicleType={vehicleState.vehicles[0].vehicleType} 
            Name={vehicleState.vehicles[0].Name} 
            Manufacturer={vehicleState.vehicles[0].Manufacturer} 
            FuelType={vehicleState.vehicles[0].FuelType}
            updateClick={updateHandler.bind(this,"Sports Car")} 
            nameChanged={nameChangeHandler} 
          /> {/*dual binding : namechnaged*/}
      
          <Vehicle 
            vehicleType={vehicleState.vehicles[1].vehicleType} 
            Name={vehicleState.vehicles[1].Name} 
            Manufacturer={vehicleState.vehicles[1].Manufacturer} 
            FuelType={vehicleState.vehicles[1].FuelType} 
          />

          <Vehicle 
            vehicleType={vehicleState.vehicles[2].vehicleType} 
            Name={vehicleState.vehicles[2].Name} 
            Manufacturer={vehicleState.vehicles[2].Manufacturer} 
            FuelType={vehicleState.vehicles[2].FuelType} 
          />

          <Vehicle 
            vehicleType={vehicleState.vehicles[3].vehicleType} 
            Name={vehicleState.vehicles[3].Name} 
            Manufacturer={vehicleState.vehicles[3].Manufacturer} 
            FuelType={vehicleState.vehicles[3].FuelType} 
          />

        </div>
      </div>
      );
    };

  
export default App;
