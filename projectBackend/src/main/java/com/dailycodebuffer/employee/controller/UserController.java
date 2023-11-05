package com.dailycodebuffer.employee.controller;

import com.dailycodebuffer.employee.model.User;
import com.dailycodebuffer.employee.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserService userService, BCryptPasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody User user) {
        // Check if the username is already taken
        if (userService.isUsernameTaken(user.getFirstName())) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Username is already taken");
            return ResponseEntity.badRequest().body(response);
        }

        // Encrypt the password before saving it
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Save the user to the database
        User savedUser = userService.registerUser(user);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Registration successful");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody User user) {
        // Implement your login logic here (e.g., check username/password)
        User authenticatedUser = userService.authenticateUser(user.getFirstName(), user.getPassword());

        if (authenticatedUser != null) {
            // Generate a token or set a session to represent the authenticated user
            String token = "your_auth_token_here";

            Map<String, String> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("token", token);

            return ResponseEntity.ok(response);
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login failed");
            return ResponseEntity.status(401).body(response);
        }
    }
}
