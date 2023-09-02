package com.example.leadadminback.lead;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "lead")
public class Lead {

    public LocalDateTime getInsertionTime() {
        return insertionTime;
    }

    public void setInsertionTime(LocalDateTime insertionTime) {
        this.insertionTime = insertionTime;
    }

    @CreatedDate
    private LocalDateTime insertionTime;

    private LocalDateTime assignedTime;

    public LocalDateTime getAssignedTime() {
        return assignedTime;
    }

    public void setAssignedTime(LocalDateTime assignedTime) {
        this.assignedTime = assignedTime;
    }

    public void setStatus(String status) {
        if ("Pending".equals(status) && !"Pending".equals(this.status)) {
            this.assignedTime = LocalDateTime.now();
        }
        this.status = status;
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStatus() {
        return status;
    }



    public String getAssignedTo() {
        return assignedTo;
    }



    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String status;
    private String assignedTo;



}