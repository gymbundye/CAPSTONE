package com.batcomputer.react.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.batcomputer.react.model.BatStuff;





@Repository
public interface BatcomputerRepository extends JpaRepository<BatStuff, Integer> {
		List<BatStuff>findByName(String name);
		
		BatStuff findOneByType(String type);
		long deleteByName(String name);
		//Optional<BatStuff> findByType(String type);

		void deleteByType(String type);
}
