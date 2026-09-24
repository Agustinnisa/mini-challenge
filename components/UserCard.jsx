export default function UserCard({ user }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ margin: "0 0 2px" }}>{user.name}</p>
      <p style={{ margin: "0" }}>Email: {user.email}</p>
      <p style={{ margin: "0" }}>Company: {user.company.name}</p>
    </div>
  );
}