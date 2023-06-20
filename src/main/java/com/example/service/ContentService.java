package com.example.service;

import com.example.entity.Content;

import java.util.List;

public interface ContentService {
    Content saveContent(Content content);
    List<Content> getAll();
}
