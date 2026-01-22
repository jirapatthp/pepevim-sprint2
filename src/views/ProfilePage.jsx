import ProfileOverview from "@/components/profile/ProfileOverview";
import { useNavigate } from "react-router";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
   const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    return navigate("/");
  }

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <ProfileOverview />
    </div>
  );
}
