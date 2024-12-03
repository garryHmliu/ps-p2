import Capacitor

@objc(MyFirstPlugin)
public class MyFirstPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "MyFirstPlugin"
    public let jsName = "MyFirst"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "logMessage", returnType: CAPPluginReturnPromise)
    ]
  
    @objc func logMessage(_ call: CAPPluginCall) {
        // 從前端獲取訊息
        let message = call.getString("message") ?? "No message provided"
        
        // 回應前端呼叫
        call.resolve(["message": message])
    }
}
