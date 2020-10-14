/*
* Gives the full list of items in the database
*/

import { render } from '@testing-library/react';

import React, {Component} from 'react'; //implement a simple React class based component
import { Link } from 'react-router-dom';
import axios from 'axios';
import './components.css';



const DanceMove = props => ( //Prints out a single row in the table
    <tr>
        <td>{props.dancemove.dance_move}</td>
    </tr>
)

export default class DanceMoves_list extends Component {

    constructor(props) {
        super(props);
        this.state = {dancemoves: []}; //empty array
    }

    componentDidMount() { //retrieve fr database
        axios.get('http://localhost:4000/dancemoves/')
            .then(response => {
                this.setState({dancemoves: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    

    Dance_Move_List() {
        return this.state.dancemoves.map(function(currentDanceMove, i) {
            return <DanceMove dancemove={currentDanceMove} key={i} />
        })
    }


    render() {
        return (
            <div className="m-3">
                <h3>Dance Move</h3>
                <div className="currentMove container-fluid p-3 mb-2 bg-info text-white">
                    INSERT CURRENT MOVE
                    
                </div>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table table-bordered table-striped mb-0" style={{marginTop: 20}}>
                        <thead>
                            <tr>
                                <th>Previous Moves</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.Dance_Move_List()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}