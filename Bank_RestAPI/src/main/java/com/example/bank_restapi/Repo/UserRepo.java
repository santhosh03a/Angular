package com.example.bank_restapi.Repo;

import com.example.bank_restapi.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
	
	public User findByEmailAndPass(String Email,String Pass);
}
