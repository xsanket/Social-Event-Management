package com.backend.controller;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.userEntity;
import com.backend.model.userModel;
import com.backend.services.userServices;
import com.backend.repository.*;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000/")
public class userController {
	
	@Autowired
	private final userServices usimpl;
    private final userRepository userRepository;
    
	@Autowired
	public userController(userServices usimpl, com.backend.repository.userRepository userRepository) {
		super();
		this.usimpl = usimpl;
		this.userRepository = userRepository;
	}
	
	@GetMapping("/rundocker")
	public String testDocker() {
		return "Docker image is running successfully";
	}

	@PostMapping("/users")
	public userModel createUser(@RequestBody userModel usmodel) {
		return usimpl.createUser(usmodel); 
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> loginUser(@RequestBody userModel usmodel) {
	    Optional<userEntity> userOptional = userRepository.findByEmail(usmodel.getEmail());
	    
	    if (userOptional.isPresent()) {
	        userEntity user = userOptional.get();
	        
	        if (user.getPassword().equals(usmodel.getPassword())) {
	            // Passwords match, user is logged in
	            Map<String, String> response = new HashMap<>();
	            response.put("message", "Logged in successfully");
	            response.put("loggedIn", "true");
	            return ResponseEntity.ok(response);
	        } else {
	            // Passwords don't match
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	        }
	    } else {
	        // User not found
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	    }
	}
	
	
   
}
