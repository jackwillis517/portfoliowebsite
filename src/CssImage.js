import css from "./css.png";

function CssImage() {
  return (
    <div>
      <img
        src={css}
        alt="css"
        className="lg:h-32 lg:w-32 lg:mx-16 h-20 w-20 mx-12"
      />
    </div>
  );
}

export default CssImage;
