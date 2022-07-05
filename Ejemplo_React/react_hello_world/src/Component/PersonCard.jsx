import React from "react";


class PersonCard extends React.Component{
    aceptarHandler(e){
        //console.log(e)
        e.stopPropagation();
        console.log('Ejecutando componente hijo');
    }

    containerHandler(){
        console.log('Ejecutando componente padre');
    }

    constructor (props){
        super(props);
        this.state={
            edad:props.age
        }
     this.handlerAge=this.handlerAge.bind(this);   
    }

    handlerAge(){
        console.log(this.state.edad);
        this.setState({edad:this.state.edad+1});
    }

    render(){
        console.log("Props de PersonCard", this.props);
        const {name,city,country,address,img,edad} = this.props; //Desestructuración
        
        return(
            <div style={{backgroundColor:'blue'}} onClick={this.containerHandler} className="container">
                {/*<h1>{this.props.name}</h1>
                <h3>{this.props.city}</h3>
                <h3>{this.props.country}</h3>
                <h5>{this.props.address}</h5>
                <hr/>*/}
                <img src={img} alt={name} />
                <h1>{name}</h1>
                <h2>{this.state.edad}</h2>
                <h3>{city}</h3>
                <h3>{country}</h3>
                <h5>{address}</h5>
                <button onClick={this.handlerAge}>Aceptar</button>
                {this.props.children}
                <hr/>
            </div>
        );
    }
}

export default PersonCard;