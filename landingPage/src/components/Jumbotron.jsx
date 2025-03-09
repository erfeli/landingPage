import Card from "./Card";

const Jumbotron = () => {
    return (

        <div className="card">

            <div className="card-body">
                <h1 className="card-title">A WARM WELCOME!</h1>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
};


export default Jumbotron