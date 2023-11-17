scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Triangle, 300, 200, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3.follow(mySprite, 45)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim1`,
    50,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3.follow(mySprite, 45)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim2`,
    20,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`myTile0`)
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
info.onCountdownEnd(function () {
    controller.moveSprite(mySprite)
})
info.onScore(100, function () {
    tiles.setTileAt(tiles.getTileLocation(16, 12), assets.tile`myTile3`)
    mySprite2.follow(mySprite, 30)
    music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3.follow(mySprite, 45)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    20,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3.follow(mySprite, 45)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim3`,
    20,
    true
    )
})
info.onScore(242, function () {
    effects.confetti.startScreenEffect()
    tiles.setCurrentTilemap(tilemap`level0`)
    game.gameOver(true)
})
let mySprite: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
mySprite3,
[img`
    f f f f f f f f f f f f f f f f 
    f f f 2 2 2 2 2 2 2 2 2 2 f f f 
    f f f 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 1 1 2 2 2 1 1 2 2 2 f f 
    f f 2 2 f 1 2 2 2 f 1 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 f 2 2 2 f f 
    f f 2 2 f 2 2 2 f 2 f 2 f 2 f f 
    f f f 2 f f 2 2 f f f f f 2 f f 
    f f f f f f f f f f f f f f f f 
    `,img`
    f f f f f f f f f f f f f f f f 
    f f f 2 2 2 2 2 2 2 2 2 2 f f f 
    f f f 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 1 1 2 2 2 1 1 2 2 2 f f 
    f f 2 2 f 1 2 2 2 f 1 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f f 2 2 2 f 2 2 2 2 2 2 2 2 f f 
    f f 2 f 2 f 2 f 2 2 2 f 2 2 f f 
    f f f f f f f f 2 2 f f 2 f f f 
    f f f f f f f f f f f f f f f f 
    `],
500,
true
)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
mySprite2,
[img`
    f f f f f f f f f f f f f f f f 
    f f f 4 4 4 4 4 4 4 4 4 4 f f f 
    f f f 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 1 1 4 4 4 1 1 4 4 4 f f 
    f f 4 4 f 1 4 4 4 f 1 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 f 4 4 4 f f 
    f f 4 4 f 4 4 4 f 4 f 4 f 4 f f 
    f f f 4 f f 4 4 f f f f f 4 f f 
    f f f f f f f f f f f f f f f f 
    `,img`
    f f f f f f f f f f f f f f f f 
    f f f 4 4 4 4 4 4 4 4 4 4 f f f 
    f f f 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 1 1 4 4 4 1 1 4 4 4 f f 
    f f 4 4 f 1 4 4 4 f 1 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 f 4 4 4 4 4 4 4 4 f f 
    f f 4 f 4 f 4 f 4 4 4 f 4 4 f f 
    f f f f f f f f 4 4 f f 4 f f f 
    f f f f f f f f f f f f f f f f 
    `],
500,
true
)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(12, 17))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(15, 17))
tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 14))
scene.cameraFollowSprite(mySprite)
info.startCountdown(3)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim0`,
50,
false
)
