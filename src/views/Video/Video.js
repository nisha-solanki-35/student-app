import { Button, Input } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'

const Video = () => {

    const [query, setquery] = useState("");
    const [listOfVideos, setlistOfVideos] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
        params: {q: query},
        headers: {
            'x-rapidapi-key': '98d0180c12msh1581cc655115075p16e4a4jsn2ec01e3771e5',
            'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com'
        }
    };

    const handleOnClick = () => {
        axios.request(options)
        .then(function (response) {
            console.log(response.data.items);
            setlistOfVideos(response.data.items.filter(item => item.type === 'video'));
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Video</h1>
            <Input onChange={(e)=> setquery(e.target.value)}></Input>
            <Button onClick={handleOnClick}>Click</Button>
            {listOfVideos &&
                (listOfVideos.length === 0
                  ? <p>No results</p>
                  : (
                    <ul className="items">
                      {listOfVideos.map(item => (
                        <li className="item" key={item.id}>
                          <div>
                            <b><a href={item.link}>{item.title}</a></b>
                            <p>{item.description}</p>
                          </div>
                          <ul className="meta">
                            <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                            <li>Views: {item.views}</li>
                            <li>Duration: {item.duration}</li>
                            <li>Uploaded: {item.uploaded_at}</li>
                          </ul>
                          <img alt="" src={item.thumbnail} />
                        </li>
                      ))}
                    </ul>
                  )
                )
              }
        </div>
    )
}

export default Video
