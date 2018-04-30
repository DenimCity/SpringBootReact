package com.example.demo.model;
import java.util.Objects;

public class Door {

    public String id;
    public String name;

    public Door() {
        super();
    }

    public Door(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        com.example.demo.model.Door door = (com.example.demo.model.Door) o;
        return Objects.equals(id, door.id) &&
                Objects.equals(name, door.name);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name);
    }

    @Override
    public String toString() {
        return "Door{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
//
//    public Door remove(String doorsId) {
//        return doorsId;
//    }


}
