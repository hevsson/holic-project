package com.video.holic.config;

import com.video.holic.model.utils.UserUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Configuration
public class BeanConfiguration {

    @Bean
    public PasswordEncoder bcryptPasswordEncoder() {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder;
    }

    @Bean
    public AuditorAware<String> getAuditor() {
        return () -> Optional.of(UserUtils.getCurrentUserName());
    }

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

}
