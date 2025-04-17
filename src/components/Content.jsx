import Posts from "./Posts"

const Content = () => {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-12">
          <div className="text-center">
            <button className="btn btn-outline-danger">24 Guests online</button>
            <Posts/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Content