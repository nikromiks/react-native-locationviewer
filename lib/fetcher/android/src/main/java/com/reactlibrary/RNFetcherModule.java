package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.reactlibrary.pojo.Pojo;

import java.io.IOException;

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
            // Retrive data
            OkHttpClient client = new OkHttpClient();
            Request request = new Request.Builder()
                    .url(url)
                    .build();

            Response response = client.newCall(request).execute();
            String result = response.body().string();

            // Check data
            new Gson().fromJson(result, Pojo.class);

            successCallback.invoke(result);
        } catch (IOException e) {
            e.printStackTrace();
            errorCallback.invoke("Error with IO", e.toString());
        } catch (JsonSyntaxException e) {
            e.printStackTrace();
            errorCallback.invoke("Error with JSON", e.toString());
        }
    }


    @Override
    public String getName() {
        return "RNFetcher";
    }
}