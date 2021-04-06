import React, {useState, useEffect, Component} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, responsiveFontSizes} from '@material-ui/core';

import { ZoomMtg } from '@zoomus/websdk';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor : 'black',
        'min-height':'100vh',
        padding:'40px'
        },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        },
    heading: {
        color: 'white'
    }
}));

const initiateMeeting = (meetConfig) => {
    axios.post("http://localhost:4000", meetConfig)
        .then(result => console.log(result))
        .then(response => {
            // setting the signature based on signature node
            // initializing zoom call
            ZoomMtg.init({
                leaveUrl: meetConfig.leaveUrl,
                isSupportAV: true,
                success: (success) => {
                  console.log(success)
              
                  ZoomMtg.join({
                    signature: response,
                    meetingNumber: meetConfig.meetingNumber,
                    userName: meetConfig.userName,
                    apiKey: meetConfig.apiKey,
                    passWord: meetConfig.passWord,
                    success: (success) => {
                      console.log(success)
                    },
                    error: (error) => {
                      console.log(error)
                    }
                  })
              
                },
                error: (error) => {
                  console.log(error)
                }
              })
        }).catch(error => console.log(error))
}

const showZoomDiv = () => {
    document.getElementById('zmmth-root')
}

const TestView = props => {
    const [signature, setSignature]=useState("");
    const [meetingNumber, setMeetingNum] = useState("123456789")
    
    const meetConfig = {
        apiKey: '2qdP9XZNRwmQ2BXL-vkCkg',
        meetingNumber: '76864147115',
        leaveUrl: 'https://localhost:3000/',
        userName: 'MoCode2',
        passWord: '0ScnXC',
        role: 0 // 1 for host
    };
    // var signatureEndpoint = 'http://localhost:4000'
    // var leaveUrl = 'http://localhost:9999'
    // var userName = 'WebSDK'
    // var apiKey = "2qdP9XZNRwmQ2BXL-vkCkg"
    // var userEmail = ''
    // var passWord = ''
    useEffect(()=>{
        ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        // initiateMeeting(meetConfig);
        
    },[])
    

    return(
        <>
        <h1>zoom</h1>
        </>
    )
}

export default TestView;