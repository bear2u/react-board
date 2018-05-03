import React, { Component } from 'react';
import TableRow from './TableRow';
const axios = require('axios');

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { serverports: []};
    }
    componentDidMount() {
        axios.get('http://localhost:4200/serverport')
            .then(response => {
                this.setState({ serverports: response.data });
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    tabRow() {
        return this.state.serverports.map(function(object, i){
            return <TableRow obj={ object } key={i} />
        });
    }
    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thread>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Port</td>        
                        </tr>    
                    </thread>    
                </table>
                <tbody>
                    { this.tabRow() }
                </tbody>                    
            </div>    
        )
    }
}