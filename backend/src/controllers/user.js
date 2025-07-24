const BadRequestError = require("../errors/BadRequestError");
const { signUpSchema, loginSchema } = require("../schemas/user");
const { getUserByEmailOrUserName, createUser } = require("../services/user");
const { hashPassword } = require("../utils/hashPassword");
const errorCodes = require("../errors/errorCodes");
const { ZodError } = require("zod");
const UnprocessableEntityError = require("../errors/UnprocessableEntityError");

async function signUp(req, res, next) {
  try {
    // validate user input
    const userData = signUpSchema.parse(req.body);

    // check if user with email/username already exist
    const existingUser = await getUserByEmailOrUserName(userData.username, userData.email);

    // if user exists, error
    if (existingUser) {
      if (existingUser.username === userData.username) {
        throw new BadRequestError("username is already taken.", errorCodes.USERNAME_TAKEN);
      }
      else {
        throw new BadRequestError("email is already taken.", errorCodes.EMAIL_TAKEN);
      }
    }

    // hash password
    userData.password = await hashPassword(userData.password);

    // create new user
    const user = await createUser(userData);

    // return success message
    res.status(201).json({
      error: false,
      message: "User Create Successfully!",
    }); 
  } catch (error) {
    if (error instanceof ZodError) {
      throw new UnprocessableEntityError("Validation Error", errorCodes.UNPROCCESSABLE_ENTITY, error.issues);
    }
    next(error);
  }
}

module.exports = {
  signUp,
}