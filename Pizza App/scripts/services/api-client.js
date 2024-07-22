//Network Call code
import URL  from "../utils/constant.js";

    async function makeNetworkCall(){
        try{
            const response= await fetch(URL);
            const object= await response.json();
            return object; // await wrapped in promise bec of use of async
        }
        catch(err){
            console.log('Some problem in API Call',err);
            throw err;
        }
         
            /* const promise= fetch(URL);
            promise.then(response=>{
                console.log(response);
                const promise2= response.json(); //Deserialization
                promise2.then(data=>console.log('Data is',data))
                .catch(e=>console.log('JSON parse Error',e))
            }).catch(err=>{
                console.log('Error',err);
            }); */
}
export default makeNetworkCall;