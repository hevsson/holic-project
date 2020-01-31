package com.video.holic.model.token;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "persistent_logins")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PersistentLoginToken {
    @Column(name = "username")
    private String username;
    @Id
    @Column(name = "series")
    private String series;
    @Column(name = "token")
    private String tokenValue;
    @Column(name = "last_used ")
    private Date date;
}
