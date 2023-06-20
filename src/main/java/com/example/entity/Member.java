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
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    @Column(columnDefinition = "nvarchar(50)",unique = true)
    private String userName;
    private String password;
    private String rePassword;
    private String phone;
    @Column(unique = true)
    private String email;
    private String description;
    private Timestamp createdDate;
    private Timestamp updateTime;
    @PrePersist
    public void prePersist() {
        if (createdDate == null) {
            createdDate = new Timestamp(System.currentTimeMillis());
        }

    }
    @PreUpdate
    public void preUpdate() {
        updateTime = new Timestamp(System.currentTimeMillis());
    }
}
