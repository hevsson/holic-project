package com.video.holic.controller;

import com.video.holic.model.user.Principal;
import com.video.holic.model.video.VideoView;
import com.video.holic.model.view.request.PasswordRequest;
import com.video.holic.model.view.request.RegisterView;
import com.video.holic.service.AppUserService;
import com.video.holic.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping(value = "/api/account")
public class AppController {

    @Autowired
    private VideoService videoService;
    @Autowired
    private AppUserService appUserService;


    @Autowired
    private ServletContext context;

    @GetMapping("videos")
    public ResponseEntity<List<VideoView>> listVideos() {
        return ResponseEntity.ok(appUserService.listVideos());
    }

    @GetMapping("videosuser/{name}")
    public ResponseEntity<List<VideoView>> listVideosByName(@PathVariable String name) {
        return ResponseEntity.ok(appUserService.listVideosByUsername(name));
    }

    @GetMapping("userexist/{name}")
    public ResponseEntity<Boolean> userexist(@PathVariable String name) {
        return ResponseEntity.ok(appUserService.userexist(name));
    }

    @GetMapping(value = "videos/{id}")
    public void getEpisodeFile(@PathVariable Integer id, HttpServletRequest request, HttpServletResponse response) throws Exception {
        this.videoService.getVideoFile(id, request, response);
    }

    @GetMapping(value = "video/{id}")
    public ResponseEntity<VideoView> getVideo(@PathVariable Integer id) throws Exception {
        return ResponseEntity.ok(this.appUserService.findVideoByIdByUser(id));
    }

    @GetMapping("user")
    public ResponseEntity<Principal> getPrincipal() {

        try {
            return ResponseEntity.ok(this.appUserService.findByUserName());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @GetMapping("previousUser/{username}")
    public ResponseEntity<Principal> previousUser(@PathVariable String username) {

        try {
            return ResponseEntity.ok(this.appUserService.previousUser(username));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }


    @GetMapping("nextUser/{username}")
    public ResponseEntity<Principal> nextUser(@PathVariable String username) {

        try {
            return ResponseEntity.ok(this.appUserService.nextUser(username));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PostMapping("register")
    public ResponseEntity<Principal> register(@RequestBody RegisterView registerView) {
        return new ResponseEntity<>(appUserService.addUser(registerView), HttpStatus.CREATED);
    }

    @PostMapping("updatepassword")
    public ResponseEntity<Boolean> updatepassword(@RequestBody PasswordRequest passwordRequest) {
        return ResponseEntity.ok(appUserService.updatePassword(passwordRequest));
    }

    @PostMapping("updateprofile")
    public ResponseEntity<Boolean> updateProfile(@RequestBody Principal principal) {

        return ResponseEntity.ok(appUserService.updateProfile(principal));
    }
}
