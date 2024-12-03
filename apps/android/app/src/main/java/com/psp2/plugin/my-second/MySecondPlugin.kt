package com.psp2.mysecondplugin

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MySecond")
class MySecondPlugin : Plugin() {
    @PluginMethod
    fun logMessageee(call: PluginCall) {
        // 從前端獲取訊息
        val message = call.getString("message") ?: "No message provided"

        val ret = JSObject()
        ret.put("message", message)

        // 回應前端呼叫
        call.resolve(ret)
    }
}
