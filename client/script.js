new Vue ({
    el: '#app',
    data: {
        quantums: [],
    },

    async mounted(){
       this.quantums = await request('/api/quantums')
    //    console.log(this.quantums)
    }
    
})

async function request(url, method = 'GET', data = null)
{
    try{
        const headers = {}
        let body

        if(data){
            headers['Content-Type'] = 'application/json'// header необходим чтобы показать серверку что мы передаём json //[Content-Type] ключ  
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        })

        return await response.json()

    } catch(e){
        console.error('Произошла ошибка!!!', e)
    }
}