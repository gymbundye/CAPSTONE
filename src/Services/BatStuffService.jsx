import axios from 'axios';

const Batcomputer_API_BASE_URL= "http://localhost:8080/api";
class BatStuffService{

    getBatStuff(){
       return axios.get(Batcomputer_API_BASE_URL+"/allbatstuff");
    }

    createBatStuff(batstuff){
        return axios.post(Batcomputer_API_BASE_URL+"/addbatstuff",batstuff);
    }

    getBatStuffByName(name){
        return axios.get(Batcomputer_API_BASE_URL+"/batstuff/"+name);
    }

    updateBatStuff(batstuff,name){
        return axios.put(Batcomputer_API_BASE_URL+"/batStuff/"+name,batstuff);
    }

    deleteBatStuff(id){
        return axios.delete(Batcomputer_API_BASE_URL+"/delete/"+id);
    }
    getBatStuffById(id){
        return axios.get(Batcomputer_API_BASE_URL+"/batstuff/id/"+id);
    }

}

export default new BatStuffService();