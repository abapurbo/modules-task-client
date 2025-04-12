
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    
    if(error.message){
      return error.message
    }
   

     

};

export default ErrorPage;