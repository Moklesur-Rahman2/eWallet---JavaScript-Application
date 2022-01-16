document.querySelector('#ewallet-form').addEventListener('submit', function(e){

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
                            <p>25 Feb, 06:45 PM</p>
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