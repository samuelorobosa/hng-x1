const express = require('express');
const cors = require('cors');
const Helpers = require('./Helpers');


const app = express();
 const PORT = process.env.PORT || 8000;


app.use(cors());

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
    const utc_time = d.toISOString().split('.')[0] + 'Z';
    const github_file_url = "https://github.com/samuelorobosa/hng-x1/blob/main/server.js";
    const github_repo_url = "https://github.com/samuelorobosa/hng-x1";
    const status_code = 200;

    return res.status(200).json({
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code,
    })
});


app.listen(PORT, ()=>{
    Helpers.consoleLog(`Server is running on ${PORT}`);
});

