
import './App.css';
import UserForm from './UserForm'
import UserDetail from './UserDetail';


function App() {
  return (
    <>
     <div>
      <h2>User Management Application</h2>
     </div>
     <div>
      <div>
      <UserForm/>
      </div>
      <div>
        < UserDetail/>
      </div>
     </div>
   
    </>
  );
}

export default App;
