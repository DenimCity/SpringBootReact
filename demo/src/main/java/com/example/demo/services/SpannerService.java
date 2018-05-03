package com.example.demo.services;

import com.example.demo.model.Door;
import com.example.demo.util.DbSpannerService;
import com.google.cloud.spanner.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
//
//    public  Door insertDoor(Door door){
//        List<Mutation> mutations = new ArrayList<>();
//        mutations.add(
//            Mutation.newInsertBuilder("Door")
//            .set("door_id")
//            .to(door.getId())
//            .set("door_name")
//            .to(door.getName())
//            .build());
//
//        SpannerOptions options = SpannerOptions.newBuilder().build();
//        Spanner spanner = options.getService();
//        DatabaseClient dbClient = spanner.getDatabaseClient(DatabaseId.of(
//                project, instance, database));
//
//        dbClient.write(mutations);
//        return door;
//    }
//
    public  Door selectDoor(Integer doorId){
        List<Door> doors = new ArrayList<>();

        // Queries the database for one dooor
        Door door = new Door();
        ResultSet resultSet = dbSpannerService.getDBConnection().singleUse().executeQuery(Statement.of("SELECT * from Door where door_id="+doorId));
        while(resultSet.next()){
            door.setId((int)resultSet.getLong("door_id"));
            door.setName(resultSet.getString("door_name"));
        }
        return door;

    }
//
//
//    public static Door deleteDoor(Integer doorId){
//        SpannerOptions options = SpannerOptions.newBuilder().build();
//        Spanner spanner = options.getService();
//        DatabaseClient dbClient = spanner.getDatabaseClient(DatabaseId.of(
//                project, instance, database));
//
//        Door door = new Door();
//        ResultSet resultSet = dbClient.singleUse().executeQuery(Statement.of("SELECT * from Door where door_id="+doorId));
//        while(resultSet.next()){
//            door.setId((int)resultSet.getLong("door_id"));
//            door.setName(resultSet.getString("door_name"));
//        }
//        return door.remove(doorId);
//
//    }


}
