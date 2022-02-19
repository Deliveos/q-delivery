window.addEventListener('DOMContentLoaded', async () => {
    async function init()  {
     

        const resourse = await getResourse('https://q-delivery.herokuapp.com/events?page=1&type=7')
         console.log(resourse);

         createCards(resourse);

        this.remove();
    }
    document.querySelector('button').addEventListener('click', init, {"once": true})
});



async function  getResourse(url) {
    console.log(3354);
    const res = await fetch(url, {headers: {
        Origin: '*',
        'Access-Control-Allow-Origin': '*'
    }});
    
    

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    } 

    return await res.json();    
}


function createCards(response) {
    response.elements.forEach(item => {
        let card = document.createElement('div');
        
        card.classList.add('card');
    
        card.innerHTML = `
            <div>Заказ</div>
            <div class="_id">ID заказа: ${item._id.id}</div>
            <div class="type">Тип события: ${item.type}</div>
            <div class="Date">Дата: ${item.Date}</div>
            <div class="ClientName">Имя пользователя: ${item.ClientName}</div>
          <div class="CompanyName">Название компании: ${item.CompanyName}</div>
           <div class="FromLocationName">Откуда: ${item.FromLocationName}</div>
           <div class="ToLocationName">Куда: ${item.ToLocationName}</div>
        `;
        document.querySelector('.row').appendChild(card);
    });
}