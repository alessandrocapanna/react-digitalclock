import { useEffect,useState } from "react";
 
const Orologio = (props)=>{
    const tempo_completo_fermo= new Date();
    const [tempo_completo,setTempo]  = useState(tempo_completo_fermo)

    useEffect(()=>{
        const interval = setInterval(()=>{
            
            const tempo_completo_aggiornato= tempo_completo.getTime()+1000;
            setTempo(new Date(tempo_completo_aggiornato));

        },1000)        
        return () =>{
            clearInterval(interval)
        }

    },[tempo_completo]);
    return(
        
        <span>{tempo_completo.getHours()} : {tempo_completo.getMinutes()} : {tempo_completo.getSeconds()}</span>
    )
}
export default Orologio;