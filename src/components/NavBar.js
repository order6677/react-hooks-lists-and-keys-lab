import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navigLinks =links.map((links)=> {
    return <a key={links} href={"#"+ links}>{links}</a>

  })
  

  return <nav>{navigLinks}</nav>;
}

export default NavBar;
