package com.video.holic;

import com.video.holic.model.type.VideoType;
import com.video.holic.model.user.AppUser;
import com.video.holic.model.video.Video;
import com.video.holic.repository.AppUserRepository;
import com.video.holic.repository.VideoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
@EnableJpaAuditing
@EnableWebSecurity
@Slf4j
public class HolicApplication  implements CommandLineRunner {

	@Autowired
	private VideoRepository videoRepository;

	@Autowired
	private AppUserRepository userRepository;

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private AppUserRepository appUserRepository;
	public static void main(String[] args) {
		SpringApplication.run(HolicApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		final String property = System.getProperty("user.home");

		log.info(property);
		AppUser user = new AppUser();
		user.setAge((short) 1);
		user.setCountry("FRANCE");
		user.setEmail("holic@gmail.com");
		user.setFirstName("login");
		user.setLogin("holic");
		user.setName("holic");
		user.setPassword(encoder.encode("holic"));

		AppUser user1 = new AppUser();
		user1.setAge((short) 1);
		user1.setCountry("FRANCE");
		user1.setEmail("peguy@gmail.com");
		user1.setFirstName("peguy");
		user1.setLogin("peguy");
		user1.setName("peguy");
		user1.setPassword(encoder.encode("peguypeguy"));

		AppUser user2 = new AppUser();
		user2.setAge((short) 1);
		user2.setCountry("FRANCE");
		user2.setEmail("papi@gmail.com");
		user2.setFirstName("papi");
		user2.setLogin("papi");
		user2.setName("papi");
		user2.setPassword(encoder.encode("papipapi"));

		final AppUser appUser = this.appUserRepository.save(user);
		final AppUser peguy = this.appUserRepository.save(user1);
		final AppUser papi = this.appUserRepository.save(user2);

		Video mainvideo = new Video();
		mainvideo.setUser(appUser);
		mainvideo.setDuree((short)3);
		mainvideo.setFormat("video/mp4");
		mainvideo.setHref("video/holic/holic_holictv.mp4");
		mainvideo.setTitre("MAINVIDEO");
		mainvideo.setDescription("MAINVIDEO");
		mainvideo.setType(VideoType.MAINVIDEO);
		mainvideo.setFirst((short)0);
		mainvideo.setSecond((short)10);
		mainvideo.setThird((short)20);


		Video video = new Video();
		video.setUser(appUser);
		video.setDuree((short)3);
		video.setFormat("video/mp4");
		video.setHref("video/holic/holic_VIDEO1.mp4");
		video.setTitre("INTERVIEW");
		video.setDescription("INTERVIEW");
		video.setType(VideoType.INTERVIEW);
		video.setFirst((short)0);
		video.setSecond((short)10);
		video.setThird((short)20);

		Video video1 = new Video();
		video1.setUser(appUser);
		video1.setDuree((short)3);
		video1.setFormat("video/mp4");
		video1.setHref("video/holic/holic_VIDEO2.mp4");
		video1.setTitre("REPORT");
		video1.setDescription("REPORT");
		video1.setType(VideoType.REPORT);
		video1.setFirst((short)0);
		video1.setSecond((short)10);
		video1.setThird((short)20);

		Video video2 = new Video();
		video2.setUser(appUser);
		video2.setDuree((short)3);
		video2.setFormat("video/mp4");
		video2.setHref("video/holic/holic_VIDEO3.mp4");
		video2.setTitre("LIFESTYLE");
		video2.setDescription("LIFESTYLE");
		video2.setType(VideoType.LIFESTYLE);
		video2.setFirst((short)0);
		video2.setSecond((short)10);
		video2.setThird((short)20);

		Video video3 = new Video();
		video3.setUser(appUser);
		video3.setDuree((short)3);
		video3.setFormat("video/mp4");
		video3.setHref("video/holic/holic_VIDEO4.mp4");
		video3.setTitre("MUSIC_VIDEO");
		video3.setDescription("MUSIC_VIDEO");
		video3.setType(VideoType.MUSIC_VIDEO);
		video3.setFirst((short)0);
		video3.setSecond((short)10);
		video3.setThird((short)20);

		Video video4 = new Video();
		video4.setUser(appUser);
		video4.setDuree((short)3);
		video4.setFormat("video/mp4");
		video4.setHref("video/holic/holic_VIDEO5.mp4");
		video4.setTitre("SPORT");
		video4.setDescription("SPORT");
		video4.setType(VideoType.SPORT);
		video4.setFirst((short)0);
		video4.setSecond((short)10);
		video4.setThird((short)20);

		Video video5 = new Video();
		video5.setUser(appUser);
		video5.setDuree((short)3);
		video5.setFormat("video/mp4");
		video5.setHref("video/holic/holic_VIDEO6.mp4");
		video5.setTitre("INTERVIEW2");
		video5.setDescription("INTERVIEW2");
		video5.setType(VideoType.INTERVIEW2);
		video5.setFirst((short)0);
		video5.setSecond((short)10);
		video5.setThird((short)20);

		this.videoRepository.saveAll(List.of(mainvideo, video, video1, video2, video3, video4, video5));


		Video videopeguy = new Video();
		videopeguy.setUser(peguy);
		videopeguy.setDuree((short)3);
		videopeguy.setFormat("video/mp4");
		videopeguy.setHref("video/peguy/peguy_VIDEO1.mp4");
		videopeguy.setTitre("INTERVIEW");
		videopeguy.setDescription("INTERVIEW");
		videopeguy.setType(VideoType.INTERVIEW);
		videopeguy.setFirst((short)0);
		videopeguy.setSecond((short)10);
		videopeguy.setThird((short)20);

		Video video1peguy = new Video();
		video1peguy.setUser(peguy);
		video1peguy.setDuree((short)3);
		video1peguy.setFormat("video/mp4");
		video1peguy.setHref("video/peguy/peguy_VIDEO2.mp4");
		video1peguy.setTitre("REPORT");
		video1peguy.setDescription("REPORT");
		video1peguy.setType(VideoType.REPORT);
		video1peguy.setFirst((short)0);
		video1peguy.setSecond((short)10);
		video1peguy.setThird((short)20);

		Video video2peguy = new Video();
		video2peguy.setUser(peguy);
		video2peguy.setDuree((short)3);
		video2peguy.setFormat("video/mp4");
		video2peguy.setHref("video/peguy/peguy_VIDEO3.mp4");
		video2peguy.setTitre("LIFESTYLE");
		video2peguy.setDescription("LIFESTYLE");
		video2peguy.setType(VideoType.LIFESTYLE);
		video2peguy.setFirst((short)0);
		video2peguy.setSecond((short)10);
		video2peguy.setThird((short)20);
		this.videoRepository.saveAll(List.of(videopeguy, video1peguy, video2peguy));


		Video videopapy = new Video();
		videopapy.setUser(peguy);
		videopapy.setDuree((short)3);
		videopapy.setFormat("video/mp4");
		videopapy.setHref("video/papi/papi_VIDEO1.mp4");
		videopapy.setTitre("INTERVIEW");
		videopapy.setDescription("INTERVIEW");
		videopapy.setType(VideoType.INTERVIEW);
		videopapy.setFirst((short)0);
		videopapy.setSecond((short)10);
		videopapy.setThird((short)20);

		Video video1papy = new Video();
		video1papy.setUser(papi);
		video1papy.setDuree((short)3);
		video1papy.setFormat("video/mp4");
		video1papy.setHref("video/papi/papi_VIDEO2.mp4");
		video1papy.setTitre("REPORT");
		video1papy.setDescription("REPORT");
		video1papy.setType(VideoType.REPORT);
		video1papy.setFirst((short)0);
		video1papy.setSecond((short)10);
		video1papy.setThird((short)20);

		this.videoRepository.saveAll(List.of(videopapy, video1papy));


	}
}
