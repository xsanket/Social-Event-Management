package com.backend.services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.userEntity;
import com.backend.model.userModel;
import com.backend.repository.userRepository;

@Service
public class userServicesImpl implements userServices {
	
	private userRepository userepo;
	
	
	public userServicesImpl(userRepository userepo) {	
		this.userepo = userepo;
	}


	@Override
	public userModel createUser(userModel usmodel) {
		userEntity usEntity = new userEntity();
		BeanUtils.copyProperties(usmodel, usEntity);
		userepo.save(usEntity);
	
		return usmodel;
	}

}
