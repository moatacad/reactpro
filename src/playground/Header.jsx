
const Header = (prop) => {
   //prop is an object
    //prop is immutable: prop must never be changed by the children
  return (
    <div>
        <h1> { prop.xyz } </h1>
        <h2> {prop.currentYear} </h2>
    </div>
  )
}

export default Header