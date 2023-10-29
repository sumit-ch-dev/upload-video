import UploadForm from "./components/uploadForm"
import UploadList from "./components/uploadList"
function App() {


  return (
    <>
    <div className="row">
      <div className="col-md-6">
        <div className="card" style={{
          height: "auto",
          width: "800px",
          margin: '40px',
          border: '1px solid black'
        }}>
          <div className="card-body">
            <UploadForm/>
          </div>
        </div>
      </div>
      <div className="col-md-6">
      <div className="card" style={{
          height: "auto",
          width: "800px",
          margin: '40px',
          border: '1px solid black'
        }}>
          <div className="card-body">
            <UploadList/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
