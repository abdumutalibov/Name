import React from 'react'
import { Exit, Header, TextAll } from './Head'

export default function Head() {
    return (
       
<div>

        <Header>
            <Exit>
                {/* <button className='button '>войти</button> */}
            </Exit>
        </Header>
      <TextAll>{this.props.text1}</TextAll>
</div>
    )
}
