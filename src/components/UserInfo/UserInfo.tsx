interface UserInfoProps {
  user: {
    email: string;
    name: string;
  } | null;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  return user ? (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  ) : (
    <span className="UserInfo">User not found</span>
  );
};
