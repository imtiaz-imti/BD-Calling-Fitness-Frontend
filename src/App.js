import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Signin from './Signin/Signin'
import Signup from './Signup/Signup'
import RequestTrainer from './RequestTrainer/RequestTrainer'
import RequestAdmin from './RequestAdmin/RequestAdmin'
import AllTrainer from './AllTrainer/AllTrainer'
import BookTrainer from './BookTrainer/BookTrainer'
import AvailableTrainer from './AvailableTrainer/AvailableTrainer'
import MarkAvailable from './MarkAvailable/MarkAvailable'
import AdminDashboard from './AdminDashboard/AdminDashboard'
import TrainerDashboard from './TrainerDashboard/TrainerDashboard'
import TraineesDashboard from './TraineesDashboard/TraineesDashboard'

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/sign-in" element={<Signin/>} />
         <Route path="/sign-up" element={<Signup/>} />
         <Route path="/request/trainer" element={<RequestTrainer/>} />
         <Route path="/request/admin" element={<RequestAdmin/>} />
         <Route path="/all/trainer" element={<AllTrainer/>} />
         <Route path="/book/trainer/:s/:e/:t" element={<BookTrainer/>} />
         <Route path="/available/trainer/:s/:e/:t" element={<AvailableTrainer/>} />
         <Route path="/mark/available/:s/:e/:t" element={<MarkAvailable/>}/>
         <Route path="/admin/dashboard" element={<AdminDashboard/>} />
         <Route path="/trainer/dashboard" element={<TrainerDashboard/>} />
         <Route path="/trainees/dashboard" element={<TraineesDashboard/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
