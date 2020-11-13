controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "Up"
    mySprite.setImage(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(is_menu_open)) {
        if (statusbar.value == 5) {
            if (direction == "Left") {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -150, 0)
            } else if (direction == "Right") {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 150, 0)
            } else if (direction == "Up") {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -150)
            } else if (direction == "Down") {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -150)
            }
            for (let index = 0; index < 5; index++) {
                damaging = true
                statusbar.value += -1
                pause(200)
            }
            pause(2000)
            damaging = false
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "Left"
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 6 6 . . 
        . . . . . 6 c 6 6 6 6 6 6 9 6 . 
        . . . . 6 c c 6 6 6 6 6 6 9 c 6 
        . . d 6 9 c c 6 9 9 9 9 9 9 c c 
        . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
        . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
        . 6 6 6 6 6 8 b b b b 8 b b b 8 
        . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
        . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
        . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
        . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
        . 8 8 8 8 f f f 8 8 8 8 f f f f 
        . . . 8 f f f f f 8 8 f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "Right"
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
        . 6 8 b b b 8 b b b b 8 6 6 6 6 
        . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
        . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
        . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
        . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "Down"
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 9 9 6 6 6 6 . . . 
        . . . . . c 9 6 6 6 6 6 c . . . 
        . . . . 6 c 9 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 c 9 6 6 6 6 6 c 6 f . 
        . . . f 8 c 6 6 6 6 6 6 c 8 f . 
        . . . f 6 c 6 b b b b 6 c 6 f . 
        . . . 8 6 6 b c c c c b 6 6 8 . 
        . . . 8 8 b c c c c c c b 8 8 . 
        . . . f 8 9 9 9 9 9 9 9 9 8 f . 
        . . . f 8 d 6 6 6 6 6 6 d 8 f . 
        . . . . 6 d d 6 6 6 6 d d 6 f . 
        . . . . f 6 d 6 6 6 6 d 6 f . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        `)
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Play") {
        level = 1
        statusbar = statusbars.create(50, 5, StatusBarKind.Energy)
        statusbar.setColor(8, 9)
        statusbar.value = 5
        statusbar.max = 5
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        mySprite = sprites.create(img`
            . . . . . . 8 8 c c 8 8 . . . . 
            . . . . . 8 6 6 6 6 6 6 8 . . . 
            . . . . 6 c 6 6 6 6 6 6 c 6 . . 
            . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
            . . . f 6 6 9 6 6 6 6 6 c 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 c 6 9 9 6 6 6 c 6 f . 
            . . . 8 6 c 8 c c c c 8 c 6 8 . 
            . . . 8 6 8 c b b b b c 8 6 8 . 
            . . . 8 6 8 b b b b b b 8 6 8 . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . . . f 8 d 8 8 8 8 8 8 d 8 f . 
            . . . f 8 6 d 8 8 8 8 d 6 8 f . 
            . . . f f 8 8 8 8 8 8 8 8 f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Player)
        info.setLife(3)
        controller.moveSprite(mySprite, 100, 150)
        tiles.setTilemap(tiles.createTilemap(hex`1000100007070707070707080707070707070707070707070707070207070707070707070707070707070702070707070707070707070707070707020707070707070707070707070707070207070707070707070707010404040405070707070707070707070207070707070707070707070707070702070104040404040607070707070707020702070707070702070707070707070207020707070707020707070707070703040507070707070207070707070707070707070707070702070707070707070707070707010404050707070707070707070707070207070707070707070707070707070702070707070707070707070707070707020707070707070707`, img`
            2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
            2 2 . . . . . . 2 2 2 2 2 2 2 2 
            2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 . 2 . . . . . . . 2 2 2 2 2 
            2 2 . 2 . 2 2 2 2 2 . 2 2 2 2 2 
            2 2 . 2 . 2 2 2 2 2 . 2 2 2 2 2 
            2 2 . . . 2 2 2 2 2 . 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
            2 2 2 2 2 2 2 . . . . 2 2 2 2 2 
            2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.vehicle.roadTurn1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,myTiles.tile1,myTiles.tile4], TileScale.Sixteen))
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.positionDirection(CollisionDirection.Top)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 15))
        scene.cameraFollowSprite(mySprite)
        pause(500)
        is_menu_open = false
    } else if (option == "Instructions") {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
    }
})
let level = 0
let damaging = false
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let direction = ""
let is_menu_open = false
blockMenu.showMenu(["Play", "Instructions"], MenuStyle.List, MenuLocation.FullScreen)
blockMenu.setColors(1, 15)
is_menu_open = true
game.onUpdateInterval(500, function () {
    if (!(damaging)) {
        if (!(is_menu_open)) {
            if (statusbar.value < 5) {
                statusbar.value += 1
            }
        }
    }
})
