const form = document.querySelector('form')
const card = document.querySelector('.holder')
console.log()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    updatedetails(form.city.value)
    .then(()=> form.city.value='').catch(err=> console.log(err))

})

const updatedetails = async (search) => {
    getWeather(search)
        .then(response => {
            let { Details, weatherDet } = response
            console.log(Details,weatherDet)
            let sky=`${weatherDet.IsDayTime? 'day.svg': 'night.svg'}`
            let html = `<img name='card'src="../City-Weather/img/${sky}" alt="" class="time card-img-top">
        <div class="icon bg-light mx-auto text-center">
            <img src='../City-Weather/img/icons/${weatherDet.WeatherIcon}.svg'>
        </div>
        <div class="text-muted text-uppercase text-center details">
            <h5 class="my-3">${Details.EnglishName}</h5>
            <div class="my-3">${weatherDet.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weatherDet.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        </div>`

        if(card.classList.contains('d-none')){
            card.classList.remove('d-none')
        }

        return card.innerHTML= html
        }).catch(err=>console.log(err))
}
