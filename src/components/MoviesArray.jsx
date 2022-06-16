import { Component } from "react";
import { Container,Row} from "react-bootstrap";



class MoviesArray extends Component{
    state={
   gallery:[],
   
    }
    componentDidMount=async()=>{
        try {
            let response =await fetch("https://www.omdbapi.com/?apikey=24ad60e9" + "&s=harry%20potter")
            console.log(response)
            if(response.ok){
                let data =response.json()
                console.log(data)
            }else{
                console.log("now error")
            }
            
        } catch (error) {
            
        }
    }

    render(){
        return(
            <>
            <Container>
      
                   <Row>
                       
                       
                       
                       
                       
                       
                 </Row>

  
 

</Container>   
            </>
        )
    }

}

export default MoviesArray