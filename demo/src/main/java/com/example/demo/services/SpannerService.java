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

@Service
public class SpannerService {

    @Autowired
    DbSpannerService dbSpannerService;

    @Autowired
    public SpannerService(DbSpannerService dbSpannerService) {
        this.dbSpannerService = dbSpannerService;
    }

    public List<Door> getAllDoors(){
        List<Door> doors = new ArrayList<>();
        // Queries the database
        ResultSet resultSet = dbSpannerService.getDBConnection().singleUse().executeQuery(Statement.of("SELECT * from door"));
        while(resultSet.next()){
            doors.add(new Door( (int) resultSet.getLong("door_id"), resultSet.getString("door_name")));
        }
        return doors;
    }

    public  Door insertDoor(Door door){

        //creating a new door
        List<Mutation> mutations = new ArrayList<>();
        mutations.add(
            Mutation.newInsertBuilder("Door")
            .set("door_id")
            .to(door.getId())
            .set("door_name")
            .to(door.getName())
            .build());

        dbSpannerService.getDBConnection().write(mutations);
        return door;
    }

    public  Door selectDoor(Integer doorId){
        // Queries the database for one dooor
        Door door = new Door();
        ResultSet resultSet = dbSpannerService.getDBConnection().singleUse().executeQuery(Statement.of("SELECT * from Door where door_id="+doorId));
        while(resultSet.next()){
            door.setId((int)resultSet.getLong("door_id"));
            door.setName(resultSet.getString("door_name"));
        }
        return door;

    }

    public  void deleteDoor(Integer doorId){


try {
    dbSpannerService.getDBConnection().writeAtLeastOnce(Arrays.asList(Mutation.delete("Door", Key.of(doorId))));

} catch (Exception e) {
    LOGGER.log("Delete didnt wor," , e);
}


//                (Statement.of("DELETE from Door where door_id="+doorId));



    }


}
