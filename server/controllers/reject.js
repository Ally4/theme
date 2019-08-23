import sessions from '../models/sessions';
import dotenv from 'dotenv';

dotenv.config();


const reject = (req, res) => {

    if(req.user.position === 'Mentor' ){

    try {

        // const token = jwt.verify(req.headers.token, process.env.SECRET_KEY);
        // const isMentor = ;


        const sessionsId = req.params.id;

        const idSession = sessions.findIndex(u => u.id === parseInt(sessionsId));
        const originSession = sessions[idSession];

        if (originSession) {


            originSession.status = "reject";

            sessions.push(originSession);

            res.status(200).json({
                status: 200,
                data: originSession,
            });

            return;
        }

        res.status(404).json({
            status: 404,
            error: "The session is not found",
        });
    } catch (e) {
        res.status(404).json({
            status: 404,
            message: 'The session is not found',
        })

    }
}
else{
    res.status(403).json({
        status: 403,
        message: 'You are not a mentor to reject a session'
    });
}

}

export default reject;