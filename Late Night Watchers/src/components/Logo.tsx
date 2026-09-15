import LogoImage from "../assets/retro-sun.svg";

function Logo() {
  return (
      <div className="logo">
        <img src={LogoImage} alt="" />
        <p>Late Night Watchers</p>
      </div>
    )
}

export default Logo