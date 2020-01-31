package com.video.holic.model.type;

public enum VideoType {
    MAINVIDEO("MAINVIDEO"),
    INTERVIEW("INTERVIEW"),
    REPORT("REPORT"),
    SPORT("SPORT"),
    MUSIC_VIDEO("MUSIC_VIDEO"),
    LIFESTYLE("LIFESTYLE"),
    INTERVIEW2("INTERVIEW2");

    private String label;

    private VideoType(String label) {
        this.label = label;
    }
}
