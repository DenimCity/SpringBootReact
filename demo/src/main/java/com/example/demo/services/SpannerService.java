package com.example.demo.services;

import com.example.demo.model.Door;
import com.example.demo.util.DbSpannerService;
import com.google.cloud.spanner.Key;
import com.google.cloud.spanner.Mutation;
import com.google.cloud.spanner.ResultSet;
import com.google.cloud.spanner.Statement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

@Service
public class SpannerService {

    @Autowired
    DbSpannerService dbSpannerService;

    @Autowired
    public SpannerService(DbSpannerService dbSpannerService) {
        this.dbSpannerService = dbSpannerService;
    }

    Logger LOGGER = Logger.getLogger(SpannerService.class.getName());

    public List<Door> getAllDoors(){
        List<Door> doors = new ArrayList<>();

        try {
            ResultSet resultSet = dbSpannerService.getDBConnection().singleUse().executeQuery(Statement.of("SELECT * from door"));
            while(resultSet.next()){
                doors.add(new Door( (int) resultSet.getLong("door_id"), resultSet.getString("door_name")));
            }
            return doors;

        } catch(Exception e){
            LOGGER.info("Grab all doors didn't work," + e);
            return null;
        }
        // Queries the database

    }

    public  Door insertDoor(Door door){

        //creating a new door
        List<Mutation> mutations = new ArrayList<>();
        try {
            mutations.add(
                    Mutation.newInsertBuilder("Door")
                            .set("door_id")
                            .to(door.getId())
                            .set("door_name")
                            .to(door.getName())
                            .build());

            dbSpannerService.getDBConnection().write(mutations);
            return door;

        } catch(Exception e){
            LOGGER.info("Insert door didn't work," + e);
            return null;
        }
    }

    public  Door selectDoor(Integer doorId){
        // Queries the database for one dooor
        Door door = new Door();
        try {
            ResultSet resultSet = dbSpannerService.getDBConnection().singleUse().executeQuery(Statement.of("SELECT * from Door where door_id="+doorId));
            while(resultSet.next()){
                door.setId((int)resultSet.getLong("door_id"));
                door.setName(resultSet.getString("door_name"));
            }
            return door;

        } catch (Exception e) {
            LOGGER.info("Select door didn't work," + e);
            return null;
        }



    }

    public String deleteDoor(Integer doorId){
     //deleting from the database
    try {
    dbSpannerService.getDBConnection().writeAtLeastOnce(Arrays.asList(Mutation.delete("Door", Key.of(doorId))));
    return "Success";
    } catch (Exception e) {
    LOGGER.info("Delete didn't work," + e);
    return "Error with deleting";
        }
    }

}
