package com.psp2.practice

import android.os.Bundle
import com.getcapacitor.BridgeActivity
import com.psp2.myfirstplugin.MyFirstPlugin
import com.psp2.mysecondplugin.MySecondPlugin

class MainActivity : BridgeActivity() {
    public override fun onCreate(savedInstanceState: Bundle?) {
        // 註冊插件
        registerPlugin(MyFirstPlugin::class.java)
        registerPlugin(MySecondPlugin::class.java)
        super.onCreate(savedInstanceState)
    }
}
