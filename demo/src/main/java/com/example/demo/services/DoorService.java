package com.example.demo.services;

import com.example.demo.model.Door;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


@Service
public class DoorService {

    private static List<Door> doors = new ArrayList<Door>();

    static {
        doors.add(new Door(1, "Jordan 1: Shatter Backboards"));
        doors.add(new Door(2,"Jordan 1: Breds"));
        doors.add(new Door(3,"Jordan 1: Royal"));
        doors.add(new Door(4,"Jordan 1: New Loves"));
        doors.add(new Door(5,"Jordan 1: Blue Moon"));
        doors.add(new Door(6,"Jordan 1: Shadows "));

    }

    public List<Door> doorInfo() {
        return doors;
    }

    public void insertDoor(Door door) {
        doors.add(door);
    }

    public Door findDoor(Integer doorId) {
        for (Door door : doors) {
            if (door.getId().equals(doorId)) {
                return door;
            }
        }
        return null;
    }


    public void deleteDoor(int doorId) {
        Iterator<Door> iterator = doors.iterator();
        while (iterator.hasNext()) {
            Door door = iterator.next();
            if (door.getId() == doorId) {
                iterator.remove();
            }
        }

    }

}

