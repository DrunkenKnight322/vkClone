import React, { Component } from 'react'
import axios from 'axios'

export default class UploadPhoto extends Component {

    state = {
        imageURL: '',
    };

    handleUploadImage = (e) => {
        e.preventDefault();
    
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
    
        axios.post('/upload', data)
        .then((response) => {
          response.json()
          .then((body) => {
            this.setState({ imageURL: `/${body.file}` });
          });
        });
      }
    
      render() {
        return (
          <form onSubmit={this.handleUploadImage}>
            <div>
              <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            </div>
            <div>
              <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
            </div>
            <br />
            <div>
              <button>Upload</button>
            </div>
            <img src={this.state.imageURL} alt="img" />
          </form>
        );
      }
    
}
