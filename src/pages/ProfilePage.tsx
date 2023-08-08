import { useAuth0 } from "@auth0/auth0-react";

function ProfilePage() {
    const { user } = useAuth0();

    if (!user) {
        return null;
    }

    return (
        <>
            <img src={user.picture} alt="Profile" />
            <h1>{user.name}</h1>
            <p>test</p>
        </>
    );
}

export default ProfilePage;