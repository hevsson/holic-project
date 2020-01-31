package com.video.holic.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class HolicConfiguration implements WebMvcConfigurer {

    @Controller
    static class Router {
        @RequestMapping({"/dashboard",
                "/dashboard/**",
                "/reset-password",
                "/reset-password/**",
                "/mes-reservations",
                "/mes-reservations/**",
                "/mes-avoirs",
                "/mes-avoirs/**",
                "/user-reservation",
                "/user-reservation/**",
                "/password",
                "/password/**",
                "/profil",
                "/profil/**",
                "/nos-trajets/**",
                "/nos-trajets/**",
                "/accueil",
                "/accueil/**",
                "/login",
                "/login/**",
                "/user/**",
                "/user/holic",
                "/register",
                "/register/**"
        })
        public String index() {
            return "forward:/index.html";
        }
    }
}
