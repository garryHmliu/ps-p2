import UIKit
import Capacitor

@objc(MyViewController)
class MyViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(MyFirstPlugin())
        bridge?.registerPluginInstance(MySecondPlugin())
    }
}
