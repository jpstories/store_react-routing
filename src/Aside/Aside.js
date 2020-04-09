import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './Aside.css';

import Chapter1 from '../Main/Chapter1/Chapter1';
import Chapter2 from '../Main/Chapter2/Chapter2';
import Chapter3 from '../Main/Chapter3/Chapter3';

// Start
class Aside extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: ''
        }
    }

    showActive = (e) => {
        let links = document.querySelectorAll('.link');
        for(let i = 0; i < links.length; i++){
            console.log(links[i]);
            links[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }

    render(){
        return (
            <Router>
                <div className="main">
                    <section className="main__default">
                        <h1>Default home page</h1>
                    </section>
                    {/* Changing components 'Default, 2, 3' */}
                    <Switch>
                        <Route path="/chapter_1">
                            <Chapter1 title="Chapter 1: Logic"/>
                        </Route>

                        <Route path="/chapter_2">
                            <Chapter2 title="Chapter 2: Japan"/>
                        </Route>

                        <Route path="/chapter_3">
                            <Chapter3 title="Chapter 3: Food"/>
                        </Route>
                    </Switch>

                    {/* Switcher */}
                    <aside className="aside__nav">
                        <ul className="aside__nav-ul">
                            <li className="aside__nav-li">
                                <Link onClick={this.showActive} className='link' to="/chapter_1">Link: Chapter 1</Link>
                            </li>

                            <li className="aside__nav-li">
                                <Link onClick={this.showActive} className='link' to="/chapter_2">Link: Chapter 2</Link>
                            </li>

                            <li className="aside__nav-li">
                                <Link onClick={this.showActive} className='link' to="/chapter_3">Link: Chapter 3</Link>
                            </li>
                        </ul>
                    </aside>
                    {/*  */}
                </div>
            </Router>
        );       
    }
}

export default Aside;