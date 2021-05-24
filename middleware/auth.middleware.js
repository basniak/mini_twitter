const { firebase } = require("./firebaseConfig");

exports.decodeFirebaseIdToken = async function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(400).json({
      error: {
        message: "You did not specify any idToken for this request",
      },
    });
  }

  try {
    // Use firebase-admin auth to verify the token passed in from the client header.
    // This is token is generated from the firebase client
    // Decoding this token returns the userpayload and all the other token claims you added while creating the custom token
    const auto = req.headers.authorization.replace("Bearer ", "");

    const userPayload = await firebase.auth().verifyIdToken(auto);

    req.user = userPayload;

    next();
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

exports.isAuthorized = async function (req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({
      error: {
        message:
          "You are not authorised to perform this action. SignUp/Login to continue",
      },
    });
  }
};
