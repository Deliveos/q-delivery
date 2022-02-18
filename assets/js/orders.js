window.addEventListener('DOMContentLoaded',  () => {
    function init()  {
     

         getResourse('https://q-delivery.herokuapp.com/events?page=1&type=7')
            .then(data => createCards(data))
            .catch(err => console.error(err));


        this.remove();
    }
    document.querySelector('button').addEventListener('click', init, {"once": true})
});



async function  getResourse(url) {
    
    const res = await fetch(url);
    
    

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    } 

    return await res.json();    
}


function createCards(response) {
    response.forEach(item => {
        let card = document.createElement('div');
        
        card.classList.add('card');
    
        card.innerHTML = `
            <div>Заказ</div>
            <div class="_id">ID заказа: ${item._id}</div>
            <div class="type">Тип ивента: ${item.type}</div>
            <div class="Date">Дата: ${item.Date}</div>
            <div class="FailReason">Неудача: ${item.FailReason}</div>
        `;
        document.querySelector('.row').appendChild(card);
    });
}