package com.example.demo.controller;


import com.example.demo.model.Door;
import com.example.demo.services.DoorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.logging.Logger;

@RestController
@CrossOrigin
public class DoorController {

    Logger LOGGER = Logger.getLogger(DoorController.class.getName());


    @Autowired
    DoorService doorService;

    @GetMapping("/")
    public List<Door> index(){
        LOGGER.severe("Error" + (new java.util.Random()).nextFloat());
        List<Door> doorList = doorService.doorInfo();
        return doorList;
    }


    @GetMapping("/doors/{doorId}")
    public Door findDoor(@PathVariable Integer doorId){
        LOGGER.info("Grab door by ID route " + doorId.toString());
        return doorService.findDoor(doorId);

    }


    @PostMapping("/doors/new")
    public Door createDoor(@RequestBody Door door){
        LOGGER.info("Hit the create door route " + door.toString());
        doorService.insertDoor(door);
        return door;
    }


    @DeleteMapping("/doors/{doorId}")
    public String deleteDoor(@PathVariable Integer doorId){
        LOGGER.info("Hit the delete  door route: ==> " + doorId.toString());
        doorService.deleteDoor(doorId);
        return "null";
    }
//working on update
//        @PutMapping("/doors/{doorId}")
//    public Door updateDoor (@RequestBody Door door, @PathVariable doorId){
//
// }




}

