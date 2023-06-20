package com.example.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String brief;
    private String content;
    private Timestamp createDate;
    private Timestamp updateTime;
    private Integer sort;
    private Integer authorId;
    @PrePersist
    public void prePersist() {
        if (createDate == null) {
            createDate = new Timestamp(System.currentTimeMillis());
        }
    }
    @PreUpdate
    public void preUpdate() {
        updateTime = new Timestamp(System.currentTimeMillis());
    }
}
