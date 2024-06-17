const Page=()=>{ 
  
const fullTime = new Intl.DateTimeFormat('pt-BR',{
timeStyle: 'short',
hour12:false
}).format(); 

     const hour = new Date().getHours();
     let gretting = '';

     if(hour> 0 && hour< 12){

      gretting = 'Bom Dia 😃';

     }else if (hour>= 12 && hour < 18){
      gretting = 'Boa Tarde 🤓';
     }else if(hour>= 18 && hour <= 23){
      gretting = 'Boa Noite 😴';
     }

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
          <div style= {{fontSize: '3rem' ,font:"bold" }}>{gretting}</div>
    </div>
  );
}

export default Page;