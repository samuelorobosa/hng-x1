const express = require('express');
const cors = require('cors');
const {response} = require("express");


const app = express();

app.get('/api', function (req, res){
   const { slack_name, track } = req.query;
   if (!slack_name){
       return res.status(400).json({message: "Slack Name wasn't passed"});
   }
    if (!track){
        return res.status(400).json({message: "Track wasn't passed"});
    }

    const d = new Date();
    const current_day = d.toLocaleString("en-US", { weekday: "long"});
    const utc_time = d.toISOString();
    return res.status(200).json({
        slack_name,
        current_day,
        utc_time,
        track,
        "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/username/repo",
        "status_code": 200,
    })
});


app.listen(8000);

