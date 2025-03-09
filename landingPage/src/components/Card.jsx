const Card = () => {
    return (

        <div className="card" style={{ width: "22rem" }}>
            <img src="https://i.pinimg.com/736x/90/25/ac/9025acba1778ad7ac481b5582546d082.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eligendi reprehenderit dolorem dicta odit ex autem sit neque, voluptatem doloribus magnam iusto ad? Eius sequi neque tempora unde vitae atque.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card