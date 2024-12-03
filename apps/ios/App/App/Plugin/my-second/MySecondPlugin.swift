import Capacitor

@objc(MySecondPlugin)
public class MySecondPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "MySecondPlugin"
    public let jsName = "MySecond"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "logMessageee", returnType: CAPPluginReturnPromise)
    ]

    @objc func logMessageee(_ call: CAPPluginCall) {
        // 從前端獲取訊息
        let message = call.getString("message") ?? "No message provided"

        // 回應前端呼叫
        call.resolve(["message": message])
    }
}
