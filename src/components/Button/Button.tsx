interface IButton {
  children?: React.ReactNode;
  class?: string;
}

function Button(props: IButton) {
  const style =
    props.class === "descktop" ? "button hidden xl:block" : "button";

  return (
    <>
      {style && (
        <button type="button" className={style}>
          {props.children}
        </button>
      )}
    </>
  );
}
export default Button;
