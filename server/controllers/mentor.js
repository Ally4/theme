import mentors from '../models/mentors';

const getAMentor = (req, res) => {

  if(req.user.position === 'User'){

 const mentor = mentors.find(i => i.id === parseInt(req.params.id));
  if(!mentor){
     return res.status(404).json({
          status: 404,
          message: 'The mentor is not is our database',
      });
  }
    else{
         res.status(200).json({
          status: 200,
          message: 'Here is the mentor',
          data: mentor,
      });
    }
  }
  else{
    res.status(403).json({
        status: 403,
        message: 'you are not a user to see the mentor'
    });
  }
};

export default getAMentor;