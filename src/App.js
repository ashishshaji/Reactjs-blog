import Navbar from './components/Navbar'
import './App.css';
import Body from './components/Body';
import Newblog from './components/Newblog';
//import Footer from './components/Footer';
import BlogDetails from "./components/BlogDetails"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Body title="world" />
          </Route>

          <Route path="/new">
            <Newblog/>
          </Route>

          <Route path="/blog/:id">
            <BlogDetails/>
          </Route>
          
        </Switch>
       {/*  <Footer end="you" /> */}
      </div>
    </Router>

  )
}
export default App;