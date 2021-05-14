const list = document.querySelectorAll('.card__info_list')
const timeItems = document.querySelectorAll('.card__info_list_item__subtitle__time-items')
const superfluousItems = Array(timeItems.length).fill(0)
window.addEventListener(`resize`, event => {
    location.reload()
}, false);

let oldTime = ''
if (window.screen.width > 1200) {
    for (let i = 0; i < timeItems.length; i++) {
        if (i % 2 === 0) {
            timeItems[i].innerHTML = timeItems[i + 1].innerHTML
            timeItems[i + 1].innerHTML = ''

        }
    }
}
for (let j = 0; j < timeItems.length; j++) {

    let array = timeItems[j].children
    const superfluous = []
    if (array.length !== 0) {
        if (array.length > 4) {
            let i = array.length - 1
            while (i >= 4) {
                superfluous.push(array[i])
                array[i].remove()
                i--
            }
            oldTime = array[3].innerHTML
            array[3].innerHTML = "еще..."
            superfluousItems[j] = superfluous
        }
    }
}

for (let itr = 0; itr < timeItems.length; itr++) {
    console.log(timeItems[itr].children[3]);
    timeItems[itr].addEventListener('click', () => {
        if (timeItems[itr].children[3].innerHTML = "еще...") {
            let length = timeItems.length
            let index = itr - length / 2
            if (window.screen.width > 1200) {
                index++
            }
            let dopBody = document.querySelectorAll('.more_items')
            let div = document.createElement('div')
            div.innerHTML = oldTime
            dopBody[index].appendChild(div)
            for (let i = 0; i < superfluousItems[itr].length; i++)
                dopBody[index].appendChild(superfluousItems[itr][i])


        }

    })
}