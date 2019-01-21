import React from 'react';
import Avenger from './Avenger'
import '../Avengers.css';
import avengers from '../AvengerData';
import { Link } from 'react-router-dom';

class AvengersList extends React.Component {
    constructor() {
        super();
        this.state = {
            avengers: [],
        }
    }

    componentDidMount() {
        this.setState({
            avengers: avengers,
        })
    }

    render() {
        return (
            <div className='characters-list-wrapper'>
                {this.state.avengers.map( avenger =>  {
                    return (<div className="character-card" key={avenger.id}>
                        <img src={avenger.thumbnail} alt={avenger.name}/>
                        <h2><Link to={`./avengers/${avenger.id}`}>{avenger.name}</Link></h2>
                        <p>{avenger.nickname}</p>
                    </div>)
                })}
            </div>
        )
    }
}

export default AvengersList;
