import React, { Component } from 'react'
import { Numbers, Rasim2, Text12 } from './style'


export default class index extends Component {
    render() {
        return (
            <div>

<Rasim2  src={this.props.icon}></Rasim2>
<Numbers>{this.props.numbers}</Numbers>
           <Text12>{this.props.text}</Text12>
           
           </div>
        )
    }
}
