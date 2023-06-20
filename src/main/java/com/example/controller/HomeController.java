package com.example.controller;
import com.example.entity.Content;
import com.example.entity.Member;
import com.example.repository.ContentRepository;
import com.example.service.MemberService;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @Autowired
    private ContentRepository contentRepository;
    @GetMapping("/")
    private String homePage(HttpSession session, Model model){
        if(session.getAttribute("memberLogged") == null){
            model.addAttribute("member", new Member());
            return "login";
        }
        model.addAttribute("contents", contentRepository.findAll());
        return "form_content";
    }
    @GetMapping("/logout")
    public String logout(HttpSession session, Model model) {
        session.removeAttribute("memberLogged");
        model.addAttribute("member", new Member());
        return "redirect:/";
    }


}
