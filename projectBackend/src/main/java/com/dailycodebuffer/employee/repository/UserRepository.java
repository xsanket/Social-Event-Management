package com.dailycodebuffer.employee.repository;

import com.dailycodebuffer.employee.entity.UserEntity;
import com.dailycodebuffer.employee.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

	Optional<User> findByUsername(String username);

	boolean existsByUsername(String username);

	User save(User user);

    
}
