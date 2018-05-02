package com.example.demo.services;

import com.example.demo.model.Door;
import com.google.cloud.spanner.*;

import java.util.ArrayList;
import java.util.List;

public class SpannerService {

    static String project = "firstapp-202814", instance = "firstapp", database= "firstapp-db";


    public static List<Door> getAllDoors(){
        List<Door> doors = new ArrayList<>();

        SpannerOptions options = SpannerOptions.newBuilder().build();
        Spanner spanner = options.getService();
        DatabaseClient dbClient = spanner.getDatabaseClient(DatabaseId.of(
                project, instance, database));
        // Queries the database
        ResultSet resultSet = dbClient.singleUse().executeQuery(Statement.of("SELECT * from door"));
        while(resultSet.next()){
            doors.add(new Door( (int) resultSet.getLong("door_id"), resultSet.getString("door_name")));
        }
        return doors;
    }

    public static Door insertDoor(Door door){
        List<Mutation> mutations = new ArrayList<>();
        mutations.add(
            Mutation.newInsertBuilder("Door")
            .set("door_id")
            .to(door.getId())
            .set("door_name")
            .to(door.getName())
            .build());

        SpannerOptions options = SpannerOptions.newBuilder().build();
        Spanner spanner = options.getService();
        DatabaseClient dbClient = spanner.getDatabaseClient(DatabaseId.of(
                project, instance, database));

        dbClient.write(mutations);

        return door;
    }

}
