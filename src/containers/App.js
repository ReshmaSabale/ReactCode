import './App.css';
import { Component } from 'react';
import Vehicles from '../components/Vehicles/Vehicles';


class App extends Component {

constructor (props){
  super(props);

  this.state=
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
      
      };

      console.log("Component : App | Method : constructor");
}
  
      static getDerivedStateFromProps(props,state)
      {
        console.log("Component : App | Method : getDerivedStateFromProps");
        return state;
      }

      componentDidMount()
      {
        console.log("Component : App | Method : componentDidMount");
      }




      addVehicleHandler = () => {
   
      const vehicleList=[...this.state.vehicles];
      const newVehicle={vehicleType:"Car", Name:"Kwid", Manufacturer:"Renault", FuelType:"Petrol"}
      vehicleList.push(newVehicle);

        this.setState({
              vehicles: vehicleList,
                       
              count:this.state.count +1,
              showVehicles : this.state.showVehicles,
              showVehiclesLabel : this.state.showVehiclesLabel
            });
          }
      deleteVehicleHandler = (vehicleIndex) => {
            const vehicleList = [...this.state.vehicles];
            vehicleList.splice(vehicleIndex,1);
            this.setState({
              vehicles: vehicleList,
                       
              count:this.state.count -1,
              showVehicles : this.state.showVehicles,
              showVehiclesLabel : this.state.showVehiclesLabel
            });
          }

          
        
      toggleVehicleListHandler=()=>{
          let toggleVehicle= ! this.state.showVehicles;
          let label="";
          if(toggleVehicle){
            label="Hide Vehicles";
          }
          else{
            label="Show Vehicles";
          }
         
          this.setState({
             vehicles:this.state.vehicles,
              count:this.state.count,
              showVehicles : toggleVehicle,
              showVehiclesLabel : label
            });
          }
         
          render(){
            console.log("Component : App| Method : App component is loading..");
            let vehicleList=null;
            if(this.state.showVehicles) {
              vehicleList = ( <div className="row">
              {
                <Vehicles 
                  vehicles = {this.state.vehicles}
                  onDelete = {this.deleteVehicleHandler}
                />
                    
              }
            </div>
          );
        }
              
       return (
        
          <div className="App container-fluid">
            <div className="row"> 
            <div className="col-lg-6">
              <h1> Vehicles List | Total Vehicles:{this.state.count} </h1>
            </div>
              
              <div className="col-lg-6 divButton">
              <button className="btn btn-primary btn-lg buttonUpdate" onClick={this.addVehicleHandler}> Add Vehicle </button>
              <button className="btn btn-secondary btn-lg buttonUpdate" onClick={this.toggleVehicleListHandler}> {this.state.showVehiclesLabel} </button>
            </div>
            </div>
            
          { vehicleList }
          
          </div>
         );
        
       };
    }
        
  
  
export default App;
