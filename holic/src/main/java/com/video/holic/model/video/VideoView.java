package com.video.holic.model.video;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VideoView implements Serializable {

    private Integer id;
    private String titre;
    private short duree;
    private String description;
    private String format;
    private String href;
    private String type;
    private boolean mute;
    private short first;
    private short second;
    private short third;
    private String username;
    private boolean fullScreen;
    private boolean autoplay;


    public VideoView(Video video, String username) {
        this.id = video.getId();
        this.titre = video.getTitre();
        this.duree = video.getDuree();
        this.description = video.getDescription();
        this.format = video.getFormat();
        this.href = video.getHref();
        this.type = video.getType().toString();
        this.mute = !"MAINVIDEO".equals(this.type);
        this.first = video.getFirst();
        this.second = video.getSecond();
        this.third = video.getThird();
        this.username = username;
        this.autoplay = true;
    }

    public VideoView(Video video) {
        this.id = video.getId();
        this.titre = video.getTitre();
        this.duree = video.getDuree();
        this.description = video.getDescription();
        this.format = video.getFormat();
        this.href = video.getHref();
        this.type = video.getType().toString();
        this.mute = false;
        this.first = video.getFirst();
        this.second = video.getSecond();
        this.third = video.getThird();
        this.autoplay = true;

        if (video.getUser() != null) {
            this.username = video.getUser().getLogin();
        }

    }
}
