function Avatar({ source, alternative, height, width }) {
  return (
    <>
      <img src={source} alt={alternative} height={height} width={width} />
    </>
  );
}

export default Avatar;
