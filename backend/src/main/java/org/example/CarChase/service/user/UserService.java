package org.example.CarChase.service.user;

import org.example.CarChase.dto.UserDto;
import org.example.CarChase.dto.response.UserProfileResponse;
import org.example.CarChase.model.User;

import java.util.List;

public interface UserService {
    void save(UserDto userDto);
    User findByEmail(String email);
    List<UserDto> findAllUsers();
    UserProfileResponse getDetailedProfile(long id);
}
