package com.example.controller;

import com.example.entity.Content;
import com.example.entity.Member;
import com.example.service.MemberService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MemberController {
    @Autowired
    private MemberService memberService ;
    @GetMapping("/create")
    public String createPage(Model model){
        model.addAttribute("member",new Member());
        return "register";
    }
    @GetMapping("/editProfile")
    private String createMember(Model model, HttpSession session){
        model.addAttribute("member", session.getAttribute("memberLogged")) ;
        return "/editProfile";
    }
    @PostMapping("/editProfile")
    private String updateMember(@ModelAttribute Member member, Model model, HttpSession session){
        Member member1 = (Member) session.getAttribute("memberLogged");
        model.addAttribute("message","successfully" ) ;
        return "/editProfile";
    }
    @PostMapping("/create")
    public String createMember(Model model,@ModelAttribute Member member){
        if(!member.getPassword().equals(member.getRePassword())){
            model.addAttribute("message", "Re-password not match password");
            return "register";
        }
        if(memberService.findByEmailOrUserName(member.getEmail(), member.getUserName()) != null){
            model.addAttribute("message", "User name of email is exits");
            return "register";
        }
        Member member1 = memberService.createMember(member);
        if(member1 != null) {
            model.addAttribute("message", "Register successfully, Please sign in");
            return "login";
        }
        model.addAttribute("message", "Register failed");
        return "register";

    }
    @PostMapping("/login")
    public String checkLogin(@ModelAttribute Member member , Model model, HttpSession session){
        Member member1 = memberService.findByEmailAndPassword(member.getEmail(),member.getPassword());
        if(member1 != null){
            session.setAttribute("memberLogged",member1);
            return "redirect:/";
        }
        model.addAttribute("message","Email or password not correct");
        model.addAttribute("member", new Member());
        return "login";
    }

}
