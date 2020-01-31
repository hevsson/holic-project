package com.video.holic.model.view.request;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class PasswordRequest implements Serializable {

    private String password;
    private String newpassword;

}
