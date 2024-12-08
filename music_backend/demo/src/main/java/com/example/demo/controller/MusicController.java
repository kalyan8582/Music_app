package com.example.demo.controller;

import com.example.demo.model.Music;
import com.example.demo.service.MusicService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
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
        @RequestPart MultipartFile image,
        @RequestPart MultipartFile audio) {
    try {
        
        Music savedMusic = musicService.addMusic(music, image, audio);
        return new ResponseEntity<>(savedMusic, HttpStatus.CREATED);
    } catch (Exception e) {
        e.printStackTrace();
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    }

 

@GetMapping("/musics")
public ResponseEntity<List<Music>> getmusics() {
    return new ResponseEntity<>(musicService.getAllMusic(), HttpStatus.OK);
}

@GetMapping("/musics/{musicId}/")
public ResponseEntity<byte[]> getMusicdetailsById(@PathVariable("musicId") int id) {
    Music music = musicService.getMusicById(id);
    if (music == null || music.getImageData() == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    byte[] image = music.getImageData();
    MediaType mediaType;
    try {
        mediaType = MediaType.valueOf(music.getImageType());
    } catch (IllegalArgumentException e) {
        return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).body(null);
    }

    return ResponseEntity.ok()
            .contentType(mediaType)
            .body(image);
}

@GetMapping("/musics/{musicId}/audio")
public ResponseEntity<byte[]> getAudioByMusicId(@PathVariable int musicId) {
    Music music = musicService.getMusicById(musicId);
    if (music == null || music.getAudioData() == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    byte[] audio = music.getAudioData();
    MediaType mediaType;
    try {
        mediaType = MediaType.valueOf(music.getAudioType());
    } catch (IllegalArgumentException e) {
        return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).body(null);
    }

    return ResponseEntity.ok()
            .contentType(mediaType)
            .body(audio);
}

    
}

