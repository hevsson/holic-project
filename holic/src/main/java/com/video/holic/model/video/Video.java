package com.video.holic.model.video;

import com.video.holic.model.type.VideoType;
import com.video.holic.model.user.AppUser;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "Video")
@Entity
@Data
@NoArgsConstructor
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private String titre;

    @Column
    private short duree;

    @Column
    private String description;

    @Column
    private String format;

    @ManyToOne(fetch = FetchType.LAZY)
    private AppUser user;

    @Enumerated(value = EnumType.STRING)
    @Column
    private VideoType type;

    @Column
    private String href;

    @Column
    private short first;

    @Column
    private short second;

    @Column
    private short third;
}
