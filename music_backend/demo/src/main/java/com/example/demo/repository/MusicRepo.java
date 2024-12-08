package com.example.demo.repository;
import java.util.*;
import com.example.demo.model.Music;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicRepo extends MongoRepository<Music, String> {
    //List<Music> findById(int id); 
}
