package com.reactlibrary.pojo;

import java.util.List;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Pojo {

    @SerializedName("locations")
    @Expose
    public List<Location> locations = null;
    @SerializedName("updated")
    @Expose
    public String updated;

}