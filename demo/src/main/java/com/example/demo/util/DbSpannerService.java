package com.example.demo.util;

import com.google.cloud.spanner.DatabaseClient;
import com.google.cloud.spanner.DatabaseId;
import com.google.cloud.spanner.Spanner;
import com.google.cloud.spanner.SpannerOptions;
import org.springframework.stereotype.Service;

@Service
public class DbSpannerService {

    private static String project = "firstapp-202814", instance = "firstapp", database= "firstapp-db";

    public DatabaseClient getDBConnection() {
        SpannerOptions options = SpannerOptions.newBuilder().build();
        Spanner spanner = options.getService();
        DatabaseClient dbClient = spanner.getDatabaseClient(DatabaseId.of(
                project, instance, database));

        return dbClient;
    }
}
