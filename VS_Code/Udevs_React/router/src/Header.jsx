import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
constructor(props){
    super(props);
    this.state={
        error: null,
        isLoaded: false,
        items:[]
    }
}
componentDidMount(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res => res.json())
    .then(
        (result) =>{
            this.setState({
                isLoaded:true,
                items: result.drinks
            });
        },
        (error) =>{
            this.setState({

                isLoaded:true,
                error
            }

            )
        }
    )
}
    render() {
        const {error, isLoaded, items} = this.state
        if(error){
            return <h1>Error {error.message}</h1>
        }else if (!isLoaded){
            return <h1>Loading...</h1>
        }else{
            return <ul>
            {items.map(item =>(
                <li key={item.name}>
<div className="top"> <div className='text'> {item.strDrink}</div> 
                    <img width='50px' height='50px' src={item.strDrinkThumb} alt="" /></div>
                 
                    
                </li>
            ))}
                
            </ul>
        
        }
        
    }
}


// import React, { Component } from "react";

// export default class Header extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			error: null,
//             isLoaded: false,
//             items: []
// 		};
// 	}

//     componentDidMount() {
//         fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     isLoaded: true,
//                     items: result.drinks
//                 });
//             },
//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 })
//             }
//         )
//     }
// 	render() {
//         const {error, isLoaded, items} = this.state;
//         if (error) {
//             return <p> Error {error.message}</p>
//         } else if (!isLoaded) {
//             return <p> Loading... </p>
//         } else {
//             return <ul>
//                 {items.map(item => (
//                     <li key={item.name}>
//                         <img width='50px' height='50px' src={item.strDrinkThumb} />
//                         {item.strDrink}
//                         {item.idDrink}
//                     </li>
//                 ))}
//             </ul>

//         }
// 	}
// }
