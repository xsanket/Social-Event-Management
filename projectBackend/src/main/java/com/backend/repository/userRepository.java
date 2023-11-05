package com.backend.repository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.entity.userEntity;

@Repository
public interface userRepository extends JpaRepository<userEntity, Long>  {
	 Optional<userEntity> findByEmail(String email);
}

//as we extending JPARepo interface: achieved inheritance by inheriting existing
//class/interface to get all the predefined methods(findById) provided by jpa repo

//Aslo we have created an interface where we achieved abstraction