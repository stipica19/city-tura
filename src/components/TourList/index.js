import React, { Component } from 'react'
import Tour from '../Tour/Tour';
import './TourList.scss';
import {tourData} from '../tourData';

export default class TourList extends Component {

    state={
        tours:tourData
    };
    removeTour = id=>{
        const {tours}=this.state;
        const sortedTours = tours.filter(tour=>id !== tour.id);
        this.setState({
            tours: sortedTours
        })


    }
    render() {
        
        const {tours}= this.state;
        return (
            <section className="tourList">
                {
                    tours.map(tour=>{
                       return (
                            <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                        );
                    })}
            </section>
        )
    }
}
