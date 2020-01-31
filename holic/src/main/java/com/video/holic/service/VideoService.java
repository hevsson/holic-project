package com.video.holic.service;

import com.video.holic.model.MultipartFileSender;
import com.video.holic.model.video.Video;
import com.video.holic.repository.VideoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;

@Service
@Slf4j
@Transactional(readOnly = true)
public class VideoService {

    private final VideoRepository repository;

    @Autowired
    public VideoService(VideoRepository repository) {
        this.repository = repository;
    }

    public void getVideoFile(Integer id, HttpServletRequest request, HttpServletResponse response) throws Exception {
        Video item = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("nn"));
        final String property = System.getProperty("user.home");
        log.info(property+ "/" + item.getHref());
        MultipartFileSender.fromFile(new File(property + "/" + item.getHref()))
                .with(request)
                .with(response)
                .serveResource();
    }
}
