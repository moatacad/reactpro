
const Footer = ({xyz, author, currentYear}) => {
    //prop is an object {}
    // currentYear = 2027; this is not allowed
  return (
    <div>
        <p> Copyright &copy;  {xyz} By {author},  <strong>{currentYear}</strong> </p>
        {
            currentYear < 2025 && <p>Your Post is Outdated</p>
        }

        {
            currentYear >= 2025 && <p>Your Post is Current</p>
        }
        {/* if the year is less than 2025: <p>Your post is admitted </P> */}
    </div>

  )
}

export default Footer