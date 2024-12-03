package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "music") 
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id; 

    private String title;
    private String artist;
    private String album;
    private String genre;

    // private String imageName;
    // private String imageType;
    
    // private byte[] imageData;
}
