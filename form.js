class Form{
    constructor(){
        this.title = createElement("H2")
        this.input = createInput("type name here")
        this.button = createButton("Press")
        this.greeting = createElement("H3")
        this.reset = createButton("reset")
    }
    hide(){
        this.button.hide()
        this.input.hide()
        this.title.hide()
        this.greeting.hide()
    }

    display(){
        this.title.html("Circles")
        this.title.position(500,100)
        this.input.position(500,200)
        this.button.position(500,250)
        this.reset.position(30,30)
        this.button.mousePressed(()=>{
            this.button.hide()
            this.input.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            if(player.index == 1){
                player.x = 0
                player.y = 0
            }
            if(player.index == 2){
                player.x = windowWidth
                player.y = 0
            }
            if(player.index == 3){
                player.x = 0
                player.y = windowHeight
            }
            if(player.index == 4){
                player.x = windowWidth
                player.y = windowHeight
            }
            player.updateCount(playerCount)
            player.updateData()
            this.greeting.html("Hello "+player.name)
            this.greeting.position(500,500)
        })
        this.reset.mousePressed(()=>{
            db.ref("/").set({
                gameState:0,
                playerCount:0,
            })
            location.reload()
        })
    }
}