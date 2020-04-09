import React from 'react';
import './Chapter1.css';
import '../../Routing/Routing.css';
import content from '../img/nature4.jpg';

class Chapter1 extends React.Component {
    render() {
        let title = this.props.title;
        return (
            <div className="wrap chapterOne__wrap">

                <h1>{title}</h1>

                <p>
                Создавайте инкапсулированные компоненты с собственным состоянием,
                а затем объединяйте их в сложные пользовательские интерфейсы.
                Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах,
                можно с лёгкостью передавать самые разные данные по всему приложению
                и держать состояние вне DOM.
                </p>

                <div className="default__img">
                    <img src={content}></img>
                </div>

            </div>
        )
    }
}

export default Chapter1;
