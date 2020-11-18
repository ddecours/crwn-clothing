import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>HATS PAGE</div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  )
}

export default App
