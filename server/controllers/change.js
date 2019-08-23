import users from '../models/users';
import dotenv from 'dotenv';
import mentors from '../models/mentors';

dotenv.config();


const change = (req, res) => {

    if (req.user.position === 'Admin') {

        try {

            // const token = jwt.verify(req.headers.token, process.env.SECRET_KEY);
            // const isMentor = ;


            const userId = req.params.id;

            const idUser = users.findIndex(u => u.id === parseInt(userId));
            const originPosition = users[idUser];

            if (originPosition) {


                originPosition.position = "mentor";

                mentors.push(originPosition);

                res.status(200).json({
                    status: 200,
                    data: originPosition,
                });



                return;
            }

            res.status(404).json({
                status: 404,
                error: "The user is not found",
            });
        } catch (e) {
            res.status(404).json({
                status: 404,
                message: 'The user is not found',
            })

        }
    }
    else {
        res.status(403).json({
            status: 403,
            message: 'you are not allowed to change the user to the mentor'
        })
    }


}

export default change;