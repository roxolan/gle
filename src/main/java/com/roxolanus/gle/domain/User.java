package com.roxolanus.gle.domain;

import java.util.Objects;
import javax.json.JsonObjectBuilder;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


@Entity
@Table(name = "gle_user")
@NamedQueries({
    @NamedQuery(name = "User.findAll", query = "SELECT u FROM User u"),
    @NamedQuery(name = "User.findByUsername", query = "SELECT u FROM User u WHERE u.username = :username"),
    @NamedQuery(name = "User.findByUsernamePassword", query = "SELECT u FROM User u WHERE u.password = :password AND (u.email = :username OR u.username = :username)"),    
    @NamedQuery(name = "User.findByFirstName", query = "SELECT u FROM User u WHERE u.firstName = :firstName"),
    @NamedQuery(name = "User.findByLastName", query = "SELECT u FROM User u WHERE u.lastName = :lastName"),
    @NamedQuery(name = "User.findByEmail", query = "SELECT u FROM User u WHERE u.email = :email"),
    @NamedQuery(name = "User.findByPassword", query = "SELECT u FROM User u WHERE u.password = :password"),
    @NamedQuery(name = "User.findByAdminRole", query = "SELECT u FROM User u WHERE u.adminRole = :adminRole")})
public class User extends AbstractEntity implements EntityItem<String> {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 10)
    @Column(name = "username")
    private String username;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "first_name")
    private String firstName;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "last_name")
    private String lastName;
    @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "email")
    private String email;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "password")
    private String password;
    @Basic(optional = false)
    @NotNull
    @Column(name = "professor_role")
    private Character professorRole;    
    @Basic(optional = false)
    @NotNull
    @Column(name = "manager_role")
    private Character managerRole;
    @Basic(optional = false)
    @NotNull
    @Column(name = "admin_role")
    private Character adminRole;



    public User() {
    }

    public User(String username) {
        this.username = username;
    }

    public User(String username, String firstName, String lastName, String email, String password, Character professorRole, Character managerRole, Character adminRole) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.professorRole = professorRole;
        this.managerRole = managerRole;
        this.adminRole = adminRole;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public Character getProfessorRole() {
        return professorRole;
    }

    public void setProfessorRole(Character professorRole) {
        this.professorRole = professorRole;
    }
    
    public Character getManagerRole() {
        return managerRole;
    }

    public void setManagerRole(Character managerRole) {
        this.managerRole = managerRole;
    }

    public Character getAdminRole() {
        return adminRole;
    }

    public void setAdminRole(Character adminRole) {
        this.adminRole = adminRole;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (username != null ? username.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final User other = (User) obj;
        return Objects.equals(this.username, other.username);
    }

    @Override
    public String toString() {
        return "com.roxolanus.gle.domain.User[ username=" + username + " ]";
    }
    
    @Override
    public String getId(){
        return username;
    }
    
    public boolean isProfessor() {
        return professorRole == null ? false : professorRole.equals('Y');
    }
    
    public boolean isManager() {
        return managerRole == null ? false : managerRole.equals('Y');
    }
    
    public boolean isAdmin() {
        return adminRole == null ? false : adminRole.equals('Y');
    }
    
    @Override
    public void addJson(JsonObjectBuilder builder) {
                
        builder.add("username", username)
                .add("firstName", firstName)
                .add("lastName", lastName)
                .add("email", email)
                .add("professorRole", professorRole + "")
                .add("managerRole", managerRole + "")
                .add("adminRole", adminRole + "")
                .add("fullName", firstName + " " + lastName);
    }
}
