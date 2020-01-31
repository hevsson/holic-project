package com.video.holic.model.user;

import com.video.holic.model.comments.Comments;
import com.video.holic.model.video.Video;
import com.video.holic.model.view.request.RegisterView;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Table(name = "User")
@Entity
@Data
@NoArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private String name;

    @Column
    private String firstName;

    @Column
    private String email;

    @Column(unique = true)
    private String login;

    @Column
    private String password;

    @Column
    private String country;

    @Column
    private short age;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Comments> comments;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Video> videos;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<AppRole> roles;

    public AppUser(RegisterView view) {
        //this.name = view.getName();
        //this.firstName = view.getFirstName();
        this.email = view.getEmail();
        this.login = view.getLogin();
        this.password = view.getPassword();
        //this.country = view.getCountry();
        //this.age = view.getAge();
    }
}
