package org.example.CarChase.service.user;

import org.example.CarChase.dto.UserDto;
import org.example.CarChase.dto.response.CarListingResponse;
import org.example.CarChase.dto.response.UserProfileResponse;
import org.example.CarChase.model.Role;
import org.example.CarChase.model.User;
import org.example.CarChase.repository.RoleRepository;
import org.example.CarChase.repository.UserRepository;
import org.example.CarChase.service.car.CarService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final CarService carService;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, CarService carService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.carService = carService;
    }

    @Override
    public void save(UserDto userDto) {
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        Role role = roleRepository.findByRole("USER");
        if( role == null ){
            role = checkRoleExist();
        }
        user.setRoles(List.of(role));
        userRepository.save(user);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public List<UserDto> findAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(this::convertEntityToDto).collect(Collectors.toList());
    }

    @Override
    public UserProfileResponse getDetailedProfile(long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));

        UserProfileResponse response = new UserProfileResponse();
        response.setId(user.getId());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setEmail(user.getEmail());
        response.setRoles(user.getRoles().stream()
            .map(Role::getRole)
            .collect(Collectors.toList()));
        response.setCars(carService.getMyCars(user.getEmail()));

        return response;
    }

    private UserDto convertEntityToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        return userDto;
    }

    private Role checkRoleExist() {
        Role role = new Role();
        role.setRole("USER");
        return roleRepository.save(role);
    }
}
