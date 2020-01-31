package com.video.holic.repository;

import com.video.holic.model.user.AppUser;
import com.video.holic.model.video.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface VideoRepository extends JpaRepository<Video, Integer> {

    @Query("Select v from Video v  join fetch v.user u" +
            " where u = ?1")
    List<Video> findByUser(AppUser user);

    @Query("Select v from Video v  join fetch v.user u" +
            " where v.id = ?1")
    Optional<Video> findVideoByIdByUser( Integer id);
}
