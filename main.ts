basic.showNumber(10)
basic.showString("Aum")
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    basic.showString("hi")
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        # . # . #
        . # # . .
        # . # . #
        . . # # .
        # . # . #
        `)
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.South)
    basic.pause(4000)
    basic.clearScreen()
})
