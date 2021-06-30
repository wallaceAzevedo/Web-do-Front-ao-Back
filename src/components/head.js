import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
        <nav style={{height:75}} class =" bg-dark mb-3 navbar navbar-expand-lg navbar-dark bg-dark ">
          <h2 style={{fontFamily:'ink free'}} class="text-light p-3">Forum GameDeveloper</h2> 
          <div id="menu" class="ml-auto">
            <ul style={{display:'inline'}}>
                <li class="ml-3"><a href="#">Home</a></li>
                <li class="ml-3"><a href="#">Registro</a></li>
                <li class="ml-3"><a href="#">Login</a></li>
            </ul>
          </div>          
        </nav>
    )
}

export default App;