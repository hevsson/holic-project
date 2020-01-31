package com.video.holic.repository;

import com.video.holic.model.user.AppUser;
import com.video.holic.model.user.Principal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Integer> {

    @Query("Select u from AppUser u left join fetch u.roles" +
            " where u.login = ?1")
    Optional<AppUser> findByUserName(String login);

    @Query(value = "Select u.* from User u " +
            " where u.id < ?1 order by id desc LIMIT 1", nativeQuery = true)
    Optional<AppUser> previousUser(Integer userId);

    @Query(value = "Select u.* from User u " +
            " where u.id > ?1 order by id asc LIMIT 1", nativeQuery = true)
    Optional<AppUser> nextUser(Integer userId);

    @Query("select count(u) from AppUser u " +
            " where u.login = ?1")
    int countByLogin(String login);
}
