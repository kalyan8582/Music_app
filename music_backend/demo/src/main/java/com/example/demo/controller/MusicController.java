package com.example.demo.controller;

import com.example.demo.model.Music;
import com.example.demo.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class MusicController {

    @Autowired
    private MusicService musicService;

    @PostMapping("/AddMusic")
    public ResponseEntity<?> addMusic(
            @RequestPart Music music,
            @RequestPart MultipartFile image) {
        try {
            Music savedMusic = musicService.addMusic(music, image);
            return new ResponseEntity<>(savedMusic, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}

