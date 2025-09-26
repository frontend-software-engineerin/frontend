function Card({ title, children }) {
  return (
    <>
      <div>
        <h3>This is a {title}</h3>

        <div>{children}</div>
      </div>
    </>
  );
}

export default Card;
