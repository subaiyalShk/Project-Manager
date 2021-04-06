const crypto = require('crypto')

module.exports = app => {
    app.post('/zoom/signature_node', (req, res) => {

        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(process.env.API_KEY + req.body.meetingNumber + timestamp + req.body.role).toString('base64')
        const hash = crypto.createHmac('sha256', process.env.API_SECRET).update(msg).digest('base64')
        const signature = Buffer.from(`${process.env.API_KEY}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`).toString('base64')
    
        res.json({
        signature: signature
        })
    })
}