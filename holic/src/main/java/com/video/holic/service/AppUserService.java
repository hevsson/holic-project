package com.video.holic.service;

import com.video.holic.model.type.VideoType;
import com.video.holic.model.user.AppRole;
import com.video.holic.model.user.AppUser;
import com.video.holic.model.user.Principal;
import com.video.holic.model.utils.UserUtils;
import com.video.holic.model.video.Video;
import com.video.holic.model.video.VideoView;
import com.video.holic.model.view.request.PasswordRequest;
import com.video.holic.model.view.request.RegisterView;
import com.video.holic.repository.AppRoleRepository;
import com.video.holic.repository.AppUserRepository;
import com.video.holic.repository.VideoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@Slf4j
public class AppUserService {

    private static final String USER_NOT_FOUND = "user not found";
    private final PasswordEncoder passwordEncoder;

    private final AppUserRepository repository;

    private final VideoRepository videoRepository;

    private final AppRoleRepository roleRepository;


    @Autowired
    public AppUserService(PasswordEncoder passwordEncoder,
                          AppUserRepository repository, VideoRepository videoRepository, AppRoleRepository roleRepository) {

        this.passwordEncoder = passwordEncoder;
        this.repository = repository;
        this.videoRepository = videoRepository;
        this.roleRepository = roleRepository;
    }


    public Principal findByUserName() {
        String currentPrincipalName = UserUtils.getCurrentUserName();

        AppUser appUser = repository.findByUserName(currentPrincipalName)
                .orElseThrow(() -> new IllegalArgumentException(USER_NOT_FOUND));

        return Principal.builder()
                .id(appUser.getId())
                .name(appUser.getName())
                .firstName(appUser.getFirstName())
                .email(appUser.getEmail())
                .country(appUser.getCountry())
                .age(appUser.getAge())
                .login(appUser.getLogin())
                .admin(appUser.getRoles().stream().anyMatch(p -> "ROLE_ADMIN".equals(p.getRoleName())))
                .build();

    }

    public Principal previousUser(String currentPrincipalName) {

        if ("DASHBOARD_HOLIC".equals(currentPrincipalName)) {
            currentPrincipalName = UserUtils.getCurrentUserName();
        }

        AppUser appUser = repository.findByUserName(currentPrincipalName)
                .orElseThrow(() -> new IllegalArgumentException(USER_NOT_FOUND));

        AppUser previousUser = repository.previousUser(appUser.getId())
                .orElseThrow(() -> new IllegalArgumentException(USER_NOT_FOUND));

        return Principal.builder()
                .id(previousUser.getId())
                .name(previousUser.getName())
                .firstName(previousUser.getFirstName())
                .email(previousUser.getEmail())
                .country(previousUser.getCountry())
                .age(previousUser.getAge())
                .login(previousUser.getLogin())
                .admin(previousUser.getRoles().stream().anyMatch(p -> "ROLE_ADMIN".equals(p.getRoleName())))
                .build();
    }

    public Principal nextUser(String currentPrincipalName) {
        if ("DASHBOARD_HOLIC".equals(currentPrincipalName)) {
            currentPrincipalName = UserUtils.getCurrentUserName();
        }
        AppUser appUser = repository.findByUserName(currentPrincipalName)
                .orElseThrow(() -> new IllegalArgumentException(USER_NOT_FOUND));

        AppUser nextUser = repository.nextUser(appUser.getId())
                .orElseThrow(() -> new IllegalArgumentException(USER_NOT_FOUND));

        return Principal.builder()
                .id(nextUser.getId())
                .name(nextUser.getName())
                .firstName(nextUser.getFirstName())
                .email(nextUser.getEmail())
                .country(nextUser.getCountry())
                .age(nextUser.getAge())
                .login(nextUser.getLogin())
                .admin(nextUser.getRoles().stream().anyMatch(p -> "ROLE_ADMIN".equals(p.getRoleName())))
                .build();

    }

    @Transactional
    public boolean updatePassword(PasswordRequest passwordRequest) {
        String userName = UserUtils.getCurrentUserName();
        AppUser appUser = this.repository.findByUserName(userName)
                .orElseThrow(() -> new IllegalArgumentException(USER_NOT_FOUND));

        if (!passwordEncoder.matches(passwordRequest.getPassword(), appUser.getPassword())) {
            throw new IllegalArgumentException("password are not the same");
        }

        appUser.setPassword(passwordEncoder.encode(passwordRequest.getNewpassword()));
        return true;
    }

    @Transactional
    public boolean updateProfile(Principal principal) {
        String userName = UserUtils.getCurrentUserName();
        AppUser appUser = this.repository.findByUserName(userName)
                .orElseThrow(() -> new IllegalArgumentException(USER_NOT_FOUND));
        appUser.setName(principal.getName());
        appUser.setFirstName(principal.getFirstName());
        appUser.setCountry(principal.getCountry());
        appUser.setEmail(principal.getEmail());
        appUser.setAge(principal.getAge());
        return true;
    }


    @Transactional
    public Principal addUser(RegisterView user) {

        if (this.repository.countByLogin(user.getLogin()) > 0) {

            throw new IllegalArgumentException("user already exist with this login" + user.getLogin());
        }

        AppUser appUser = new AppUser(user);
        String password = passwordEncoder.encode(appUser.getPassword());
        appUser.setPassword(password);


        AppUser save = this.repository.save(appUser);
        AppRole role = new AppRole();
        role.setRoleName("ROLE_USER");
        role.setUser(save);

        this.roleRepository.save(role);

        return Principal.builder()
                .id(save.getId())
                .name(save.getName())
                .firstName(save.getFirstName())
                .country(save.getCountry())
                .age(save.getAge())
                .email(save.getEmail())
                .admin(false)
                .build();

    }

    public List<VideoView> listVideos() {

        List<Video> videos = new ArrayList<>();
        final String name = UserUtils.getCurrentUserName();
        return getVideo(name, videos);
    }

    public List<VideoView> listVideosByUsername(String name) {
        List<Video> videos = new ArrayList<>();
        return getVideo(name, videos);
    }

    private List<VideoView> getVideo(String name, List<Video> videos) {
        AppUser user = repository.findByUserName(name)
                .orElseThrow(() -> new IllegalArgumentException("user not found"));

        AppUser holic = repository.findByUserName("holic")
                .orElseThrow(() -> new IllegalArgumentException("user not found"));

        final Map<VideoType, List<Video>> userVideo = videoRepository.findByUser(user).stream().collect(Collectors.groupingBy(Video::getType));


        final Map<VideoType, List<Video>> holicVideo = videoRepository.findByUser(holic).stream().collect(Collectors.groupingBy(Video::getType));
        holicVideo.forEach((key, value) -> userVideo.computeIfAbsent(key, k -> value));

        holicVideo.forEach((key, value) -> videos.addAll(value));

        return videos
                .stream()
                .map(p -> new VideoView(p, name))
                .collect(Collectors.toList());
    }

    public VideoView findVideoByIdByUser(Integer id) {


        return videoRepository.findVideoByIdByUser(id)
                .map(VideoView::new)
                .orElseThrow(() -> new IllegalArgumentException("Video not found"));
    }

    public boolean userexist(String name) {
        return this.repository.countByLogin(name) > 0;
    }
}


