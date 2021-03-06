package android.fcmdemo.con.fcm_demo

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import com.google.firebase.iid.FirebaseInstanceId

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val refreshedToken = FirebaseInstanceId.getInstance().token
        Log.d("Main", "Refreshed token: " + refreshedToken!!)
    }
}
