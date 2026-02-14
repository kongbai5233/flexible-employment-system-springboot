package com.example.demo.pojo;

import org.springframework.beans.factory.annotation.Value;

public class Town {
    private String townName;
    private String selectImg;
    private String unselectImg;


    public Town() {
    }

    public Town(String townName, String selectImg, String unselectImg) {
        this.townName = townName;
        this.selectImg = selectImg;
        this.unselectImg = unselectImg;
    }



    public String getTownName() {
        return townName;
    }

    public void setTownName(String townName) {
        this.townName = townName;
    }

    public String getSelectImg() {
        return selectImg;
    }

    public void setSelectImg(String selectImg) {
        this.selectImg = selectImg;
    }

    public String getUnselectImg() {
        return unselectImg;
    }

    public void setUnselectImg(String unselectImg) {
        this.unselectImg = unselectImg;
    }
}
