package com.video.holic.service;

import com.video.holic.model.user.AppUser;
import com.video.holic.repository.AppUserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final String USER_NOT_FOUND = "User not found";
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AppUserRepository appUserRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        AppUser appUser = appUserRepository.findByUserName(userName)
                .orElseThrow(() -> new UsernameNotFoundException(USER_NOT_FOUND));

        Collection<GrantedAuthority> authorities = new ArrayList<>();
        appUser.getRoles().forEach(p -> authorities.add(p::getRoleName));

        return new User(appUser.getLogin(), appUser.getPassword(), authorities);
    }
}