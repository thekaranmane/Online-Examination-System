package com.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.answersheet;

@Repository
public interface Answersheet extends JpaRepository<answersheet,Integer> {

}
