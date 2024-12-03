package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.Userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private final Userrepo userRepo;

    public UserService(Userrepo userRepo) {
        this.userRepo = userRepo;
    }

    // Login method now returns a ResponseEntity
    public String Login(User user) {
        Optional<User> existingUser = userRepo.findByUsername(user.getUsername());

        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            // Login successful
            return "Login successful";
        } else {
            // Invalid credentials
            return "Invalid username or password";
        }
    }

    public void registerUser(User user) {
        userRepo.findByUsername(user.getUsername()).ifPresent(existingUser -> {
            throw new RuntimeException("Username already exists");
        });

        userRepo.save(user);  // Save the new user
    }
}
