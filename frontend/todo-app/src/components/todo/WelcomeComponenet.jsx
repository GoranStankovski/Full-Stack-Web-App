import {useParams, Link } from 'react-router-dom'
import { useState } from 'react';
import {  retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

function WelcomeComponent(){

    const {username} = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
        console.log('called')
        
        // axios.get('http://localhost:8080/hello-world')
        // .then((response)=> SuccesfulResponse(response))
        // .catch((error)=> ErrorResponse(error))
        // .finally ( ()=>console.log('cleanup'))

        // retrieveHelloWorldBean()
        // .then( (response)=> SuccesfulResponse(response) )
        // .catch( (error)=> ErrorResponse(error) )
        // .finally ( ()=>console.log('cleanup') )


        retrieveHelloWorldPathVariable('Goran', authContext.token)
        .then( (response)=> SuccesfulResponse(response) )
        .catch( (error)=> ErrorResponse(error) )
        .finally ( ()=>console.log('cleanup') )


        retrieveHelloWorldPathVariable('Goran')

    }

    function SuccesfulResponse(response){
        console.log(response)
        //setMessage(response.data)
        setMessage(response.data.message)
    }

    function ErrorResponse(error){
        console.log(error)
    }


    return(
        <div className="WelcomeComponent">
        <h1>Welcome to our website {username}</h1>
        <div> 
             Manage Your Todos. <Link to="/todos">Click here</Link>
        </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}> 
                Call Hello World REST API </button>
            </div>
            <div className="text-info"> {message} </div>
        </div>

    )
}

export default WelcomeComponent