import { render } from '@testing-library/react';
import React, {Component} from 'react'; //implement a simple React class based component
import axios from 'axios';

export default class Create_New_Entry extends Component {

    constructor(props){
        super(props);

        //make sure all these are bound to this object
        this.onChangeDanceMove = this.onChangeDanceMove.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            dance_move: ''
        }
    }

    onChangeDanceMove(e) {
        // event, to update the state
        this.setState({
            dance_move: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault(); //prevent devault submit behaviour of the browser

        console.log(`Form submitted:`);
        console.log(`Dance Move: ${this.state.dance_move}`);

        const new_Dance_Move = {
            dance_move: this.state.dance_move
        }

        axios.post('http://localhost:4000/dancemoves/add', new_Dance_Move) //endpoint
            .then(res => console.log(res.data));
        

        this.setState({
            dance_move: ''
        })

    }

    render() {
        return (
            <div style={{marginTop:20}}>
                <h3>Create New Entry</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Dance Move: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.dance_move}
                                onChange={this.onChangeDanceMove} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary" />

                    </div>
                </form>
            </div>
        )
    }

}