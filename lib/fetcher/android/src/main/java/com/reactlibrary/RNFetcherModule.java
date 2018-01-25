package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class RNFetcherModule extends ReactContextBaseJavaModule {

    public RNFetcherModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void loadLocationListFromUrl(String url,
                                        Callback successCallback,
                                        Callback errorCallback) {

        try {
            OkHttpClient client = new OkHttpClient();
            Request request = new Request.Builder()
                    .url(url)
                    .build();

            Response response = client.newCall(request).execute();
            successCallback.invoke(response.body().string());
        } catch (Exception e) {
            e.printStackTrace();
            errorCallback.invoke("Error", e.toString());
        }
    }


    @Override
    public String getName() {
        return "RNFetcher";
    }
}