package org.example.CarChase.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
    @Column
    private String email;
    @Column
    private String password;

}
