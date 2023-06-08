export default function Card(props) {
    const { bookId, bookPrice, bookTitle, imageUrl } = props;

    return (
        <>
            <div>
                <div className="card" >
                    <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{bookTitle}</h5>
                        <p className="card-text">{bookPrice}</p>
                        <hr />
                        <div className="d-flex">
                            <button type="button" className="btn btn-primary">Update</button>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" typ="button" className="btn btn-warning ms-auto">Delete</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{bookTitle}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">No</button>
                            <button type="button" className="btn btn-danger">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}