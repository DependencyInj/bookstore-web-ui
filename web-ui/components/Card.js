export default function Card(props) {
    const {bookId, bookPrice, bookTitle, imageUrl} = props;

    return (
        <div>
            <div className="card" >
                <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{bookTitle}</h5>
                        <p className="card-text">{bookPrice}</p>
                        <hr/>
                        <div className="d-flex">
                            <button type="button" className="btn btn-primary">Update</button>
                            <button typ="button" className="btn btn-warning ms-auto">Delete</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}