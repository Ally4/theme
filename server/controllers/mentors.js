import mentors from '../models/mentors';

const getMentors = (req, res) => {
if(req.user.position === 'User') {

  if (!mentors.length) {
    res.status(404).json({
      status: 404,
      message: 'no user found',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    data: mentors,
  });
}
else{
  res.status(403).json({
      status: 403,
      message: 'You are not a User to see the mentors'
  });
}
};

export default getMentors;