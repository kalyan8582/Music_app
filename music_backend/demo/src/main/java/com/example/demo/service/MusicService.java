package com.example.demo.service;

import com.example.demo.model.Music;
import com.example.demo.repository.MusicRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Service
public class MusicService {

    private final MusicRepo repo;

    @Autowired
    public MusicService(MusicRepo repo) {
        this.repo = repo;
    }

    public Music addMusic(Music music, MultipartFile imageFile, MultipartFile audioFile) throws IOException {
        // Set image details in the Music object
        music.setImageType(imageFile.getContentType());
        music.setImageData(imageFile.getBytes());
        music.setImageName(imageFile.getOriginalFilename());

        music.setAudioType(audioFile.getContentType());
        music.setAudioData(audioFile.getBytes());
        music.setAudioName(audioFile.getOriginalFilename());

        return repo.save(music);
    }
}

