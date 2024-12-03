package com.example.demo.service;

import com.example.demo.model.Music;
import com.example.demo.repository.MusicRepo;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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

    public Music addMusic(Music music) throws IOException {
        // music.setImageType(imageFile.getContentType());
        // // Convert Binary to byte[] by accessing the byte array inside the Binary object
        // music.setImageData(imageFile.getBytes());
        // music.setImageName(imageFile.getOriginalFilename());
    
        return repo.save(music);
    }
    
}

