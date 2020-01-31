package com.video.holic.model.user;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class Principal implements Serializable {
    private Integer id;
    private String name;
    private String firstName;
    private String email;
    private String login;
    private String password;
    private String country;
    private short age;
    private boolean admin;
}
