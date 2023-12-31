function Tab({ content, onClick, style }) {
  console.log('Tab render');

  return (
    <>
      <button onClick={onClick} style={style}>
        {content}
      </button>
    </>
  );
}

export default Tab;
