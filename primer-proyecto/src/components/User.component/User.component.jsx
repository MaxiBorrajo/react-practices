import "./User.component.css";
import { Button } from "../Button.component/Button.component";

export function User({ userInfo }) {
  const user = {
    name: userInfo.name,
    email: userInfo.email,
    urlProfilePhoto: userInfo.urlProfilePhoto,
  };

  return (
    <div className="card">
      <img
        className="profilePhoto"
        src={
          user.urlProfilePhoto
            ? user.urlProfilePhoto
            : "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        }
      />
      <ul>
        <li>{user.email} </li>
        <li>{user.password} </li>
      </ul>
      <p>{JSON.stringify(user)}</p>
      <Button
        action={() => {
          alert(`Hola soy ${user.name}`);
        }}
        label="Saludar"
      />
    </div>
  );
}
