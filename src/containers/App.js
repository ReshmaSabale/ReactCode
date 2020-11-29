import './App.css';
import Vehicle from '../components/Vehicles/Vehicle/vehicle'
import { useState } from 'react';
import Vehicles from '../components/Vehicles/Vehicles';
import vehicles from '../components/Vehicles/Vehicles';

const App=props=>{
  const [vehicleState,setVehicleState] = useState(
    {
    
        vehicles:[
          {Id:"1", vehicleType:"Car", Name:"Altraz", Manufacturer:"Tata", FuelType:"Petrol"},
          {Id:"2", vehicleType:"Car", Name:"Seltos", Manufacturer:"Kia", FuelType:"Diesel"},
          {Id:"3", vehicleType:"Car", Name:"XUV", Manufacturer:"Mahindra", FuelType:"Diesel"},
          {Id:"4", vehicleType:"Car", Name:"Baleno", Manufacturer:"Maruti Suzuki", FuelType:"Petrol"},
          {Id:"5", vehicleType:"Car", Name:"Thar", Manufacturer:"Mahindra", FuelType:"Diesel"},
          {Id:"6", vehicleType:"Car", Name:"City", Manufacturer:"Honda", FuelType:"Petrol"}
  
        ],
        count:6,
        showVehicles : true,
        showVehiclesLabel : "Hide Vehicles",
      }
  );

    const addVehicleHandler = () => {
   
      const vehicleList=[...vehicleState.vehicles];
      const newVehicle={vehicleType:"Car", Name:"Kwid", Manufacturer:"Renault", FuelType:"Petrol"}
      vehicleList.push(newVehicle);

        setVehicleState({
              vehicles: vehicleList,
                       
              count:vehicleState.count +1,
              showVehicles : vehicleState.showVehicles,
              showVehiclesLabel : vehicleState.showVehiclesLabel
            });
          }

          const deleteVehicleHandler = (vehicleIndex) => {
            const vehicleList = [...vehicleState.vehicles];
            vehicleList.splice(vehicleIndex,1);
            setVehicleState({
              vehicles: vehicleList,
                       
              count:vehicleState.count -1,
              showVehicles : vehicleState.showVehicles,
              showVehiclesLabel : vehicleState.showVehiclesLabel
            });
          }

          
        
        const toggleVehicleListHandler=()=>{
          let toggleVehicle= ! vehicleState.showVehicles;
          let label="";
          if(toggleVehicle){
            label="Hide Vehicles";
          }
          else{
            label="Show Vehicles";
          }
         
            setVehicleState({
             vehicles:vehicleState.vehicles,
              count:vehicleState.count,
              showVehicles : toggleVehicle,
              showVehiclesLabel : label
            });
          }
         
               
        let vehicleList=null;
        if(vehicleState.showVehicles) {
      
        vehicleList = ( <div className="row">
          {

            <Vehicles 
              vehicles = {vehicleState.vehicles}
              onDelete = {deleteVehicleHandler}
              
              />

            
             
          }
          </div>
          );
        }
        
      
    return(
    
      <div className="App container-fluid">
        <div className="row"> 
        <div className="col-lg-6">
          <h1> Vehicles List | Total Vehicles:{vehicleState.count} </h1>
        </div>
          
          <div className="col-lg-6 divButton">
          <button className="btn btn-primary btn-lg buttonUpdate" onClick={addVehicleHandler}> Add Vehicle </button>
          <button className="btn btn-secondary btn-lg buttonUpdate" onClick={toggleVehicleListHandler}> {vehicleState.showVehiclesLabel} </button>
        </div>
        </div>
        
      { vehicleList}
      </div>
     );
    
    }
  
export default App;
