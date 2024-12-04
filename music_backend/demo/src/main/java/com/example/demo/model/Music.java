package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "music") 
public class Music {
    @Id
    private String id; 

    private String title;
    private String artist;
    private String album;
    private String genre;

    private String imageName;
    private String imageType;
    
    private byte[] imageData;

    private String audioName;
    private String audioType;
    private byte[] audioData;
}
