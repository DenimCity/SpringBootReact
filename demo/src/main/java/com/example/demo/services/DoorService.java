package com.example.demo.services;

import com.example.demo.model.Door;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class DoorService {

    List<Door> doors = new ArrayList<>();

//    Door door1 = new Door("1","Blue Door");
//    Door door2 = new Door("2","Red Door");
//    Door door3 = new Door("3","Green Door");
//    Door door4 = new Door("4","Yellow Door");

    public List<Door> doorInfo(){
//        doors.add(door1);
//        doors.add(door2);
//        doors.add(door3);
//        doors.add(door4);
        return doors;
    }

    public void insertDoor(Door door){
        doors.add(door);
    }

    public Door retrieveDoors(String doorId) {
        for (Door door : doors) {
            if (door.getId().equals(doorId)) {
                return door;
            }
        }
        return null;
    }


//    public Door deleteDoor(String doorsId) {
//        for (Door door : doors){
//            if(door.getId().equals(doorsId)) {
//                return door.remove(doorsId);
//            }
//
//
//        }
//        return null;
//    }
}



