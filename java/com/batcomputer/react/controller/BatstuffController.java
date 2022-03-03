package com.batcomputer.react.controller;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.batcomputer.react.model.BatStuff;
import com.batcomputer.react.repository.BatcomputerRepository;

import com.batcomputer.react.exception.ResourceNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class BatstuffController {

@Autowired
	private BatcomputerRepository batcomputerRepo;
    


	//get all the info
	
	@GetMapping("/allbatstuff")
	public List<BatStuff> getAll()
	{
		
		return batcomputerRepo.findAll();
	}
	

	@PostMapping("/addbatstuff")
    public BatStuff newBatstuff(@RequestBody BatStuff bs)
    {
		
		return batcomputerRepo.save(bs);
    }
	
	
	@GetMapping("/batstuff/{type}")
	public ResponseEntity<BatStuff> getBatstuffByType(@PathVariable String name)
	{
		BatStuff  b= batcomputerRepo.findById(name).orElseThrow(() ->  new ResourceNotFoundException("Holy missing Data Batman!"));
		return ResponseEntity.ok(b);                 
	}
	
	@GetMapping("/updatebatstuff/{name}")
	public List<BatStuff> getBatStuffByName(@PathVariable String name)
	{
	
		
		List <BatStuff> students=batcomputerRepo.findByName(name);
		if(students.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("We havent fought"+ name +" yet Batman!"));
		}
		
		return batcomputerRepo.findByName(name);
	}
	
	
	
	@PutMapping("/batstuff/{type}")
	public ResponseEntity<BatStuff> updateBatStuff(@PathVariable String type, @RequestBody BatStuff newBatStuff)
	{
		BatStuff oldBatStuff= batcomputerRepo.findOneByType(type);
	    oldBatStuff.setName(newBatStuff.getName());
	    oldBatStuff.setType(newBatStuff.getType());
	    oldBatStuff.setAbout(newBatStuff.getAbout());
	    oldBatStuff.setFirstapp(newBatStuff.getFirstapp());
	    oldBatStuff.setImage(newBatStuff.getImage());
	    BatStuff updatedBatstuff=batcomputerRepo.save(oldBatStuff);
	    return ResponseEntity.ok(updatedBatstuff);
	}
	

	
	@DeleteMapping("/delete/{type}")
	public String deleteBatstuff(@PathVariable String type)
	{
		
		BatStuff b=batcomputerRepo.findOneByType(type );
	    batcomputerRepo.delete(b);
	    return type +"is removed from the database.";
	}
	
}
