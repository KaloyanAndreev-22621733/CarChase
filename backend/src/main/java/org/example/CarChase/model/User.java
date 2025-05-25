package org.example.CarChase.model;


import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "customer")
public class User implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long id;
    @Column(nullable = false)
    private String username;
    private String email;
    @Column(nullable = false)
    private String password;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "customer_roles",
            joinColumns = {
                    @JoinColumn(
                            name = "customer_id",
                            referencedColumnName = "customer_id"
                    )
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "role_id",
                            referencedColumnName = "role_id"
                    )
            }
    )
    private List<Role> roles = new ArrayList<>();
}
