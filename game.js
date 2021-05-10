class Game {
    constructor() {
    }
    getGameState() {
        db.ref("gameState").on("value", function (data) {
            gameState = data.val();
        });
    }
    updateGameState(state) {
        db.ref("/").update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await db.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        player1 = createSprite(100, 100)
        player2 = createSprite(300, 100)
        player3 = createSprite(100, 400)
        player4 = createSprite(40, 750)
        players = [player1, player2, player3, player4]
    }
    play() {
        form.hide()
        Player.getPlayerInfo()
        if (allPlayers) {
            var index = 0
            for(var i in allPlayers){ 
                index = index+1
                players[index - 1].x = allPlayers[i].x
                players[index - 1].y = allPlayers[i].y
            }
            this.spawnFood();
            if(frameCount%10 == 0){
                food.splice(0,1)
            }
        }
        if (keyIsDown(UP_ARROW)) {
            player.y = player.y - 10
        }
        if (keyIsDown(DOWN_ARROW)) {
            player.y = player.y + 10
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player.x = player.x + 10
        }
        if (keyIsDown(LEFT_ARROW)) {
            player.x = player.x - 10
        }
        drawSprites();
        player.updateData();
    }
    spawnFood() {
        if(frameCount%10 == 0){
        var banana = createSprite(400, 200, 10, 10)
        banana.addImage("banana", bananaImage)
        banana.scale = 0.5
        banana.x = random(0, windowWidth);
        banana.y = random(0, windowHeight);
        banana.lifetime = 100
        food.push(banana)
        console.log(food);
        }
    }
}