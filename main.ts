input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # # . . .
        . # # . .
        . . # # #
        . # # . .
        # # . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.pause(200)
    basic.showNumber(2)
    basic.pause(200)
    basic.showNumber(1)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . . # #
        . . # # .
        # # # . .
        . . # # .
        . . . # #
        `)
})
