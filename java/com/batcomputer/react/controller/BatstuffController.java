package com.batcomputer.react.controller;




import java.util.List;

import javax.transaction.Transactional;

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

@PutMapping("/batStuff/{id}")
public ResponseEntity<BatStuff> updateBatStuff(@PathVariable int id, @RequestBody BatStuff batstuff)
{
	BatStuff b= batcomputerRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("No Batsuff"));
    b.setName(batstuff.getName());
    b.setType(batstuff.getType());
    b.setAbout(batstuff.getAbout());
    b.setFirstapp(batstuff.getFirstapp());
    b.setImage(batstuff.getImage());
     BatStuff updateBatStuff =batcomputerRepo.save(b);
    return ResponseEntity.ok(updateBatStuff);
}

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
	public ResponseEntity<BatStuff> getBatstuffByType(@PathVariable String type)
	{
		BatStuff  b= batcomputerRepo.findById(type).orElseThrow(() ->  new ResourceNotFoundException("Holy missing Data Batman!"));
		return ResponseEntity.ok(b);                 
	}
	@GetMapping("/batstuff/id/{id}")
	public BatStuff getBatStuffById(@PathVariable Integer id)
	 {
	
	 BatStuff batstuff=batcomputerRepo.findById(id).orElseThrow();
	 return batstuff;
	 }
	
	@GetMapping("/batstuff/{name}")
	public List<BatStuff> getBatStuffByName(@PathVariable String name)
	{
		
		
		{
			System.out.println(new ResourceNotFoundException("We havent fought"+ name +" yet Batman!"));
		}
		
		return batcomputerRepo.findByName(name);
	}
	
	
	
	@PutMapping("/updatebatstuff/{name}")
	public ResponseEntity<BatStuff> updateBatStuff(@PathVariable String name, @RequestBody BatStuff newBatStuff)
	{
		BatStuff oldBatStuff= batcomputerRepo.findOneByType(name);
	    oldBatStuff.setName(newBatStuff.getName());
	    oldBatStuff.setType(newBatStuff.getType());
	    oldBatStuff.setAbout(newBatStuff.getAbout());
	    oldBatStuff.setFirstapp(newBatStuff.getFirstapp());
	    oldBatStuff.setImage(newBatStuff.getImage());
	    oldBatStuff.setId(newBatStuff.getId());
	    BatStuff updatedBatstuff=batcomputerRepo.save(oldBatStuff);
	    return ResponseEntity.ok(updatedBatstuff);
	}
	

	
	@DeleteMapping("/delete/{name}")
	@Transactional
	public String deleteBatstuff(@PathVariable String name)
	{
		
		
	    batcomputerRepo.deleteByName(name);
	    
	    return name +"is removed from the Bat-database.";
	    
	}
	
}
