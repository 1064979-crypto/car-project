input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
})
input.onButtonPressed(Button.AB, function () {
    if (turnRight) {
        // Turn Right 90 degrees
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(350)
        turnRight = false
    } else {
        // Turn Left 90 degrees
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(350)
        turnRight = true
    }
    // Stop both servos after turning
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
})
// Move Backward 10 cm
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
})
let turnRight = false
turnRight = true
