import { useState } from "react";
import axios from 'axios';
import { BACKEND_URL } from "./config/constants";

const UploadForm = () => {
    const [name, setName] = useState("")
    const [videos, setVideos] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        for(let key in videos) {
            formData.append('videos', videos[key])
        }

        formData.append('name', name);

        axios.post(`${BACKEND_URL}/api/v1/media/new`, formData).then(success => {
            console.log(success)
            alert('submitted successfully')
        }).catch(error =>  {
            console.log(error)
            alert('error')
        
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input type="text" name="name" id="name" className="form-control" onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="videos">Upload videos</label>
                    <input
                        type="file"
                        name="videos"
                        id="videos"
                        multiple
                        className="form-control"
                        accept=".mp4,.mkv"
                        onChange={e => setVideos(e.target.files)}
                        />

                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-2">Upload</button>
                </div>
            </form>
        </>
    )
}

export default UploadForm;