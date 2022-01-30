const { Router } = require('express');
const UserInfo = require('../models/UserInfo');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const markers = await UserInfo.find({});
    res.json(markers);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    const userInfo = new UserInfo(req.body);
    const createdUser = await userInfo.save();
    res.json(createdUser);
  } catch (error) {
    next(error);
  }
});

router.delete('/:userID', async (req, res, next) => {
  try {
    const { userID } = req.params;
    await UserInfo.findOneAndDelete({
      userID: userID,
    });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.put('/:userID', async (req, res, next) => {
  try {
    const { userID } = req.params;
    await UserInfo.findOneAndUpdate(
      {
        userID: userID,
      },
      {
        ...req.body,
      }
    );
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
