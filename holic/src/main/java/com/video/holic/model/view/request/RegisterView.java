package com.video.holic.model.view.request;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class RegisterView implements Serializable {
    private String email;
    private String login;
    private String password;

}
