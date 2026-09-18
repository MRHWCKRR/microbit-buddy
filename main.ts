function QuoteIt () {
    basic.showString("" + (Quote[randint(1, 5)]))
}
function Squashed () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
}
function Happy () {
    basic.showIcon(IconNames.Happy)
}
function pass2 () {
    basic.pause(1000)
    if (input.acceleration(Dimension.Strength) > 1100) {
        alarm()
        serial.writeLine("SOMEONES TOUCHING YOUR STUFF")
    }
}
input.onButtonPressed(Button.A, function () {
    superhappy()
    Text_funct()
    basic.pause(1000)
})
function alarm () {
    for (let index = 0; index < 10; index++) {
        music.play(music.createSoundExpression(WaveShape.Square, 1, 1175, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
}
function Text_funct () {
    basic.showString("" + (RandomString[randint(1, 7)]))
    idle()
}
function superhappy () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
input.onButtonPressed(Button.B, function () {
    Eat()
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    idle()
})
function Eat () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # # .
        . # # . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . # # #
        . # # # #
        . . . # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . . . #
        . # # # .
        . . # # #
        . . . # #
        `)
    basic.pause(100)
}
function idle () {
    basic.showLeds(`
        # # # # #
        . # . # .
        . . . . .
        # . # . #
        # # # # #
        `)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (SecurityOnOff == 0) {
        SecurityOnOff = 1
        Compass = input.compassHeading()
        basic.showIcon(IconNames.TShirt)
        basic.pause(1000)
        idle()
    } else {
        SecurityOnOff = 0
        music.stopAllSounds()
        basic.showIcon(IconNames.No)
        basic.pause(100)
        idle()
    }
})
let Compass = 0
let Quote: string[] = []
let RandomString: string[] = []
let SecurityOnOff = 0
idle()
SecurityOnOff = 0
RandomString = [
" Hi",
" Hello",
" Ciao",
" Hola",
" Hallo",
" Hej",
" Ni Hao"
]
Quote = [
"Be yourself",
"Be the change that you wish to see in the world",
"A happy life consists in the tranquility of mind",
"Go confidently in the direction of your dreams",
"If you judge people, you have no time to love them"
]
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 1400) {
        Squashed()
        basic.pause(200)
        idle()
        basic.pause(1000)
    }
})
basic.forever(function () {
    while (SecurityOnOff == 1) {
        if (input.compassHeading() != Compass) {
            pass2()
        }
    }
})
