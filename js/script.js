      const search_bar =document.querySelector('.search_bar');
      const searchBtn=document.getElementById('Submit');
      const temperature=document.querySelector('.temp_data');
      const max_temperature=document.querySelector('.max_temp');
      const min_temperature=document.querySelector('.min_temp');
      const cityName=document.querySelector('.city');
      const cityNameBack=document.querySelector('.city1');
      const humidity=document.querySelector('.humidity_data');
      const wind=document.querySelector('.wind_data');
      const weather_image=document.querySelector('w_image');
      
      console.log("hgckkah");


       const checkWeather=(city)=>{
        const apiKey="a3127fd255230345a67efe0fc2017c1e";
      const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric";
       
      
       fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`)
      .then(response=>response.json())
      .then(response=>{
        
        
        console.log(response);
      
      
      cityName.innerHTML=response.name;
      temperature.innerHTML=response.main.temp+"°C";
      max_temperature.innerHTML=response.main.temp_max+"°C";
      min_temperature.innerHTML=response.main.temp_min+"°C";
      humidity.innerHTML=response.main.humidity+"%";
      wind.innerHTML=response.wind.speed+"km/h";
      cityNameBack.innerHTML=response.name;
      })
      .catch(err=>console.log(err));
       }
       
      searchBtn.addEventListener('click',()=>{
        checkWeather(search_bar.value);
        
      })
      
      
     
    
     
         
        
        

   














/*const apiKey="a3127fd255230345a67efe0fc2017c1e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric";
const cityName="London";


async function checkWeather(){
    const response =await fetch(apiUrl+`&q=${cityName}`+`&appid=${apiKey}`);
    
     var data=await response.json();

    console.log(data);
      

     document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp;
document.querySelector(".humidity").innerHTML=data.main.humidity;
document.querySelector(".wind").innerHTML=data.wind.speed;
}
/*fetch(apiUrl+`&q=${cityName}`+`&appid=${apiKey}`)


var data=  response.json();

console.log(data);*/








