package com.example.service.impl;

import com.example.entity.Member;
import com.example.repository.MemberRepository;
import com.example.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {
    @Autowired
    MemberRepository memberRepository;
    @Override
    public Member createMember(Member member) {
        return memberRepository.save(member);
    }

    @Override
    public Member findByEmailAndPassword(String email, String password) {
        return memberRepository.findByEmailAndPassword(email,password);
    }

    @Override
    public Member findByEmailOrUserName(String email, String userName) {
        return memberRepository.findByEmailOrUserName(email, userName);
    }
}
