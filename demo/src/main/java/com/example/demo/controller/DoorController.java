package com.example.demo.controller;


import com.example.demo.model.Door;
import com.example.demo.services.DoorService;
import com.example.demo.services.SpannerService;
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
        // LOGGER.severe("Error" + (new java.util.Random()).nextFloat());
        LOGGER.info("Grabbing all doors route");
//        List<Door> doorList = doorService.doorInfo();
//        return doorList;

        return SpannerService.getAllDoors();
    }


    @GetMapping("/doors/{doorId}")
    public Door findDoor(@PathVariable Integer doorId){
        LOGGER.info("Select one door route: The ID is " + doorId.toString());
        return doorService.findDoor(doorId);

    }


    @PostMapping("/doors/new")
    public Door createDoor(@RequestBody Door door){
        LOGGER.info("Create door route: Information received:" + door.toString());

//        return door;
        return SpannerService.insertDoor(door);
    }


    @DeleteMapping("/doors/{doorId}")
    public String deleteDoor(@PathVariable Integer doorId){
        LOGGER.info("Delete route: The ID is" + doorId.toString());
        doorService.deleteDoor(doorId);
        return "null";
    }
//working on update
//        @PutMapping("/doors/{doorId}")
//    public Door updateDoor (@RequestBody Door door, @PathVariable doorId){
//
// }




}

