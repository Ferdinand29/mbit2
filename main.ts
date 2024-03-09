radio.onReceivedStringDeprecated(function (receivedString) {
    item = receivedString
    if (item.compare("A") == 0) {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    } else if (item.compare("B") == 0) {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Back)
    } else if (item.compare("C") == 0) {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Left)
    } else if (item.compare("D") == 0) {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Right)
    } else if (item.compare("0") == 0) {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    } else if (item.compare("E") == 0) {
        mbit_小车类.RGB_Car_Big(255, 0, 0)
        mbit_小车类.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (item.compare("F") == 0) {
        mbit_小车类.RGB_Car_Big(0, 255, 0)
        mbit_小车类.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (item.compare("G") == 0) {
        mbit_小车类.RGB_Car_Big(0, 0, 255)
        mbit_小车类.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (item.compare("H") == 0) {
        mbit_小车类.RGB_Car_Big(255, 255, 0)
        mbit_小车类.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
    	
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
