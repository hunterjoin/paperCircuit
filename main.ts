basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showNumber(randint(0, 9))
        basic.pause(2000)
    }
})
