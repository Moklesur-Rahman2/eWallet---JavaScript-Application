document.querySelector('#ewallet-form').addEventListener('submit', function(e){
    // time
    const time = getFormatedTime()

    // stop from reload 
    e.preventDefault()

    // get data from inbut box 
    const type = document.querySelector('.add__type').value
    const desc = document.querySelector('.add__description').value
    const value = document.querySelector('.add__value').value

    // create an dynamic item 
    const newItem = `<div class="item">
                        <div class="item-description-time">
                        <div class="item-description">
                            <p>${desc}</p>
                        </div>
                        <div class="item-time">
                            <p>${time}</p>
                        </div>
                        </div>
                        <div class="item-amount ${type === '+' ? 'income-amount' : 'expense-amount'}">
                        <p>${type}$${value}</p>
                        </div>
                    </div>`

    // select collection div 
    const collection = document.querySelector('.collection')

    // inset newItem to collection div
    collection.insertAdjacentHTML('afterbegin', newItem)

    // reset form 
    resetForm()











})

// reset form function 
function resetForm(){
    const type = document.querySelector('.add__type').value = '+'
    const desc = document.querySelector('.add__description').value = ''
    const value = document.querySelector('.add__value').value = ''
}

// formated time function
function getFormatedTime(){
    const now = new Date().toLocaleTimeString('en-us', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
    
    const date = now.split(',')[0].split(' ')
    const time = now.split(',')[1]
    
    const formatedTime = `${date[1]} ${date[0]},${time}`
    return formatedTime
}

