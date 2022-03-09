package com.batcomputer.react.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="batstuff")
public class BatStuff {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private  String type;
private  String name;
private String about;
private String firstapp;
private String image;

public BatStuff() {
	
}

public BatStuff(int id, String type, String name, String about, String firstapp, String image) {
	
	this.id = id;
	this.type = type;
	this.name = name;
	this.about = about;
	this.firstapp = firstapp;
	this.image = image;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getAbout() {
	return about;
}

public void setAbout(String about) {
	this.about = about;
}

public String getFirstapp() {
	return firstapp;
}

public void setFirstapp(String firstapp) {
	this.firstapp = firstapp;
}

public String getImage() {
	return image;
}

public void setImage(String image) {
	this.image = image;
}






}
