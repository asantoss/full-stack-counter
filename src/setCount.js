

const increment = function (times) {
    axios.post('/api/increment', {
        incrementBy: `${times}`
    })
}
const decrement = function (times) {
    axios.post('/api/decrement', {
        incrementBy: `${times}`
    })
}


const value = function () {
    axios.get('/api/value')
        .then(res => {
            console.log(res)
        })
}

document.getElementById('increment').addEventListener('click', increment)
document.getElementById('decrement').addEventListener('click', decrement)

window.addEventListener('DOMContentLoaded', value)