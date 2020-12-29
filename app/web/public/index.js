$(document).ready(()=>{
    let ringfire = {}

    ringfire.loadPage = function(page){
        $('#page').remove()
        $('#root').append(page)
    }

    ringfire.links = [
        'home',
        'page1',
        'page2',
        'page3'
    ]
    ringfire.nav = function(links){
        $('#nav').append('<ul id="navlist"></ul>')
        links.forEach(link => $('#navlist').append(`
            <li>
                <a 
                    id=${link}
                    class='nav' 
                    href='#'>${link}</a>
            </li>`
        ))
    }
    ringfire.getPage = function(name){

        $.get(`apiv1/${name}`, function(page){
            console.log(page)
            ringfire.loadPage(page)
        })
    }
    ringfire.navListen = function(){
        $('.nav').on('click', e=> {
            ringfire.getPage(e.target.id)
        })
    }
    ringfire.nav(ringfire.links)
    ringfire.loadPage(ringfire.links[0])
    ringfire.navListen()
})