const key='d9G9Ow6izgYySrxflVKSw8AnIJgCMP8o'

const getLocation=async(search)=>{
    let query=`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${search}`
    let cityDetails= await fetch(query)
    let newDetails= await cityDetails.json()
    return newDetails[0]
}


const getWeather=async(search)=>{
   let Details=await getLocation(search)
   let cityKey=Details.Key
   let query2=`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}`
   let request= await fetch(query2)
   let weatherDet=await request.json()
   weatherDet=weatherDet[0]
   return{weatherDet, Details}

}

