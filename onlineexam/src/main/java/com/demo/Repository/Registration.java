package com.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.registration;

@Repository
public interface Registration extends JpaRepository<registration,Integer>{

}
