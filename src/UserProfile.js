import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {
  let { id } = useParams();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User Profile</h1>
        <p>Viewing profile of user ID: {id}</p>
      </main>
    </>
  );
}

export default UserProfile;
