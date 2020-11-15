import './App.css';
import Vehicle from './Vehicle/vehicle'

function App() {
  return (
    <div className="App">
      <Vehicle vehicleType='Car' Name='Altraz' Manufacturer='Tata' FuelType='Petrol' />
      <Vehicle vehicleType='Car' Name='Seltos' Manufacturer='Kia' FuelType='Diesel'>
        This is a brand new car by Kia Motors
      </Vehicle>
    </div>
  );
}

export default App;
