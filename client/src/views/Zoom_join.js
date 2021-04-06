import { ZoomMtg } from '@zoomus/websdk';
import React, { useEffect } from 'react';
import axios from 'axios';

const initiateMeeting = (meetConfig) => {
    axios.post("http://localhost:8000/zoom/signature_node", meetConfig)
    // .then(result=>result.text())
    .then(response => {
        console.log(response.data)
        ZoomMtg.init({
            leaveUrl: meetConfig.leaveUrl,
            isSupportAV: true,
            success: function() {
                ZoomMtg.join({
                    signature: response.data.signature,
                    apiKey: meetConfig.apiKey,
                    meetingNumber: meetConfig.meetingNumber,
                    userName: meetConfig.userName,

                    // password optional; set by Host
                    passWord: meetConfig.passWord, 
                    error(res) { 
                        console.log(res) 
                    }
                })		
            }
        })
    })
}

const showZoomdiv = () => {
    document.getElementById('zmmtg-root').style.display = 'block';
}

const Zoom = (props) => {
    

    const meetConfig = {
        apiKey: '2qdP9XZNRwmQ2BXL-vkCkg',
        meetingNumber: '76864147115',
        leaveUrl: 'http://localhost:3000/',
        userName: 'Mocode 2',
        userEmail: 'firstname.lastname@yoursite.com',
        passWord: '0ScnXC', // if required
        role: 0 // 1 for host; 0 for attendee
    };

    useEffect(()=>{
        showZoomdiv();
        ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        initiateMeeting(meetConfig);
    },[]);

    

    return (
    <div className="App">
      <h1>helloo</h1>
    </div>
  );
}

export default Zoom;
