package com.example.service;

import com.example.entity.Member;

public interface MemberService {
    Member createMember(Member member);

    Member findByEmailAndPassword(String email, String password);

    Member findByEmailOrUserName(String email, String userName);
}
