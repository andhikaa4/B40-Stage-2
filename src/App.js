
import Home from './Pages/Home';
import NavBefore from './Component/NavBefore';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavAfterUser from './Component/NavAfterUser';

function App() {
  return (
    <div className='bg'>
      
      <NavAfterUser />
      <Home />
    </div>
  );
}

export default App;
