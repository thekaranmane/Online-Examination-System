package com.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.addexam;

@Repository
public interface Addexam extends JpaRepository<addexam,Long>
{

   

}
