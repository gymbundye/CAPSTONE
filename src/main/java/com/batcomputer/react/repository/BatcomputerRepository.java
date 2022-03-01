package com.batcomputer.react.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.batcomputer.react.model.BatStuff;





@Repository
public interface BatcomputerRepository extends JpaRepository<BatStuff, String> {
		List<BatStuff>findByName(String name);
		BatStuff findOneByType(String type);

		//Optional<BatStuff> findByType(String type);

		void deleteByType(String type);
}
