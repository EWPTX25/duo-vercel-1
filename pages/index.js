export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Duo Login</h1>
      <form method="POST" action="/api/duo-sign">
        <button type="submit">Start Login</button>
      </form>
    </div>
  );
}
