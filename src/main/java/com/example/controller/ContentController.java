package com.example.controller;

import com.example.entity.Content;
import com.example.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContentController {
    @Autowired
    private ContentService contentService;
    @GetMapping("/viewContent")
    private String getContent(Model model){
        model.addAttribute("contents", contentService.getAll()) ;
        return "/viewContent";
    }
    @GetMapping("/addContent")
    private String createContent(Model model){
        model.addAttribute("contentt", new Content()) ;
        return "/addContent";
    }
    @PostMapping("/addContent")
    private String saveContent(@ModelAttribute Content contentt, Model model){
        contentService.saveContent(contentt);
        model.addAttribute("message", "successfully") ;
        return "/addContent";
    }
}
