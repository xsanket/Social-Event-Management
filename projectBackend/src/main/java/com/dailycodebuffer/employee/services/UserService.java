package com.dailycodebuffer.employee.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dailycodebuffer.employee.entity.UserEntity;
import com.dailycodebuffer.employee.model.User;
import com.dailycodebuffer.employee.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Register a new user
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Authenticate a user by username and password
    public User authenticateUser(String username, String password) {
        Optional<User> userOptional = userRepository.findByUsername(username);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return user;
            }
        }
        return null;
    }

    // Check if a username is already taken
    public boolean isUsernameTaken(String username) {
        return userRepository.existsByUsername(username);
    }

    // Get a list of all users (if needed)
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    // Add other user-related methods as needed
}
