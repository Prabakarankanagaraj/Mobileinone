import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HashRouter,Routes,Route } from 'react-router-dom';
import {List} from './List'
import {Create} from './Create'
import {Read} from './Read'
import { Update } from './Update';
import { Menu } from './Menu';
import { Filter } from './Filter';
import { Alter } from './Alter';
import { Remove } from './Remove';
import { Login } from './Login';

const App=()=>{
    return(
        <>
        {
            (sessionStorage.getItem("user"))?
            <>
               <HashRouter>
         <Menu/>
          <Routes>
             <Route exact path="/view" element={<List/>}/>
             <Route exact path="/open/:key" element={<Read/>}/>
             <Route exact path="/fresh" element={<Create/>}/>
             <Route exact path="/modify/:edit" element={<Update/>}/>
             <Route exact path="/filter" element={<Filter/>} />
             <Route exact path="/alter" element={<Alter/>} />
             <Route exact path="/remove" element={<Remove/>} />
          </Routes>
         </HashRouter>

            </>
            :
            <>
            <Login/>
            </>
        }
        
        </>
    )
}

export default App;