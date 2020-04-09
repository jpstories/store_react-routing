import React from 'react';
import './Chapter3.css';
import '../../Routing/Routing.css';

class Chapter3 extends React.Component {
    render(){
        let title = this.props.title;
        return (
            <div className="wrap chapterThree__wrap">
               <h1>{title}</h1>
               <p>Open you editpad and word next</p>
            </div>
        )
    }
}

export default Chapter3;
