// import './App.css'
import Detailtour from './Homepage/detailTour/detailtour'
import Home from './Homepage/Home'
import Payment from './Homepage/payment/payment'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/payment" component={Payment}></Route>
                    <Route path="/detailtour" component={Detailtour}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;