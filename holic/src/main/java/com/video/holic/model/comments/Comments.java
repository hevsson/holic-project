package com.video.holic.model.comments;

import com.video.holic.model.user.AppUser;
import lombok.Data;

import javax.persistence.*;

@Table(name = "Commments")
@Entity
@Data
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private String comment;

    @ManyToOne(fetch = FetchType.LAZY)
    private AppUser user;
}
