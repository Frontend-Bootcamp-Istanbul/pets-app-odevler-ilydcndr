import React from 'react';

class PetDetay extends React.Component{
    constructor(props){
        super(props)
        this.state={
            petbilgi:[],

        }
    }

    componentDidMount() {
      
        fetch(`http://5dd7af92505c590014d3b4ac.mockapi.io/pets/${this.props.match.params.id}`)
        .then((resp)=>resp.json())
          .then((data) => {      
            this.setState({ 
                petbilgi:data });
          });
      }

    render(){
    return(
        <div>
        {console.log(this.props)}

         <div style={{color:"red",fontWeight:"40px"}}>{this.state.petbilgi.name}</div> 

         <div className="w-25,h-25" ><img src={this.state.petbilgi.image}></img></div>
          
          {this.state.petbilgi.age}
          {this.state.petbilgi.breed}
          {this.state.petbilgi.description}
        </div>
    )
    
    }
    
}


   

export default PetDetay;