import './App.css';
import Vehicle from './Vehicle/vehicle'
import React, { useState } from 'react';

class App extends React.Component 
{
    constructor(props){
      super(props);

      this.state={
        vehicles:[
          {vehicleType:"Car", Name:"Altraz", Manufacturer:"Tata", FuelType:"Petrol"},
          {vehicleType:"Car", Name:"Seltos", Manufacturer:"Kia", FuelType:"Diesel"},
          {vehicleType:"Car", Name:"XUV", Manufacturer:"Mahindra", FuelType:"Diesel"},
          {vehicleType:"Car", Name:"Baleno", Manufacturer:"Maruti Suzuki", FuelType:"Petrol"},
  
        ]
      };
    }

     updateHandler=() =>{
      const[vehicleState,setVehicleState]=useState({
        vehicles:[
          {vehicleType:"Car", Name:"Altraz", Manufacturer:"Tata", FuelType:"Petrol"},
          {vehicleType:"Car", Name:"Seltos", Manufacturer:"Kia", FuelType:"Diesel"},
          {vehicleType:"Car", Name:"XUV", Manufacturer:"Mahindra", FuelType:"Diesel"},
          {vehicleType:"Car", Name:"Baleno", Manufacturer:"Maruti Suzuki", FuelType:"Petrol"},
  
        ]
      });
    }

    render(){
      return(
      <div className="App container-fluid">
        <div className="row"> 
          <h1>List of Vehicles </h1>
          <div className="buttonDiv">
          <button className="btn btn-primary btn-lg buttonUpdate" onClick={this.updateHandler}> Update List </button>

        </div>
        </div>
        <div>
          <Vehicle vehicleType={this.state.vehicles[0].vehicleType} Name={this.state.vehicles[0].Name} Manufacturer={this.state.vehicles[0].Manufacturer} FuelType={this.state.vehicles[0].FuelType} />
          <Vehicle vehicleType={this.state.vehicles[1].vehicleType} Name={this.state.vehicles[1].Name} Manufacturer={this.state.vehicles[1].Manufacturer} FuelType={this.state.vehicles[1].FuelType} />
          <Vehicle vehicleType={this.state.vehicles[2].vehicleType} Name={this.state.vehicles[2].Name} Manufacturer={this.state.vehicles[2].Manufacturer} FuelType={this.state.vehicles[2].FuelType} />
          <Vehicle vehicleType={this.state.vehicles[3].vehicleType} Name={this.state.vehicles[3].Name} Manufacturer={this.state.vehicles[3].Manufacturer} FuelType={this.state.vehicles[3].FuelType} />

        </div>
      </div>
      )
    }
}

export default App;
