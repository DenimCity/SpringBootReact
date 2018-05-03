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
    SpannerService spannerService;

    public DoorController(SpannerService spannerService) {
        this.spannerService = spannerService;
    }

    @GetMapping("/")
    public List<Door> index(){
        LOGGER.info("Grabbing all doors route");
        //this is referring to static data base in doorSeervice
//        List<Door> doorList = doorService.doorInfo();
//        return doorList;
        return spannerService.getAllDoors();
    }


//    @GetMapping("/doors/{doorId}")
//    public Door findDoor(@PathVariable Integer doorId){
//        LOGGER.info("Select one door route: The ID is " + doorId.toString());
//         //this is referring to static data base in doorSeervice
////        return doorService.findDoor(doorId);
//            return  SpannerService.selectDoor(doorId);
//    }
//
//
//    @PostMapping("/doors/new")
//    public Door createDoor(@RequestBody Door door){
//        LOGGER.info("Create door route: Information received:" + door.toString());
//        return SpannerService.insertDoor(door);
//    }
//
//
//    @DeleteMapping("/doors/{doorId}")
//    public String deleteDoor(@PathVariable Integer doorId){
//        LOGGER.info("Delete route: The ID is" + doorId.toString());
//        doorService.deleteDoor(doorId);
//        return "null";
//    }
//working on update
//        @PutMapping("/doors/{doorId}")
//    public Door updateDoor (@RequestBody Door door, @PathVariable doorId){
//
// }




}

