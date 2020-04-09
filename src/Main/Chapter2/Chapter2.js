import React from 'react';
import './Chapter2.css';
import '../../Routing/Routing.css';
import content from '../img/nature1.png';

class Chapter2 extends React.Component {
    render(){
        let title = this.props.title;
        return (
            <div className="wrap chapterTwo__wrap">
               <h1>{title}</h1>
               <p>
                Beginning, listen to my story
                Imported JSX component Chapter_2 must be in PascalCase
                The href attribute requires a valid value to be accessible
                Provide a valid, navigable address as the href value. 
                If you cannot provide a valid href, 
                but still need the element to resemble a link, 
                use a button and change it with appropriate styles
               </p>

                <div className="default__img">
                    <img src={content}></img>
                </div>
            </div>
        )
    }
}

export default Chapter2;
