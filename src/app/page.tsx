const Page=()=>{ 
  
const fullTime = new Intl.DateTimeFormat('pt-BR',{
timeStyle: 'short',
hour12:false
}).format(); 

     const hour = new Date().getHours();
    

  return(
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      background: 'linear-gradient(to right, #0ea5e9, #6366f1,purple)'
    }}>

          <div  style= {{fontSize: '8rem' }}>{fullTime}</div>
          <div style= {{fontSize: '3rem' ,font:"bold" }}>
            {hour > 0 && hour <12 && "Bom Dia 😃"}
            {hour > 12 && hour <18 && "Boa Tarde 😁"}
            {hour >= 18 && hour <=23  && "Boa Noite 😴"}
          </div>
    </div>
  );
}

export default Page;