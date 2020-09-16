import React, { Component } from 'react'
import "../App.css";

export default class Display extends Component {    
    render() {   
        const movieArray = this.props.movies;
        const mappedList = movieArray.map((item)=><li>{item}</li>)
        
        return (
            <div>
                <h2 className="name">{this.props.firstName} {this.props.lastName}</h2>
                <section className="text-size">
                <p><span className="bold">From:</span> {this.props.city}, {this.props.country}</p>
                    <p><span className="bold">Job Title:</span> {this.props.title}</p>
                    <p><span className="bold">Employer:</span> {this.props.employer}</p>
                </section>
                <br></br>
                <section className="text-size">
                <span className="bold">Favorite Movies:</span> <ol>{mappedList}</ol>
                </section>
            </div>
        )
    }
}
