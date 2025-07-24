const z = require("zod"); 
 
const signUpSchema = z.object({ 
  username: z.string().trim().min(3).toLowerCase(),
  email: z.email().toLowerCase(),
  password: z.string().min(8),
});

const loginSchema = z.object({ 
  username: z.string().trim().min(3).toLowerCase(),
  password: z.string().min(8),
});

module.exports = {
  signUpSchema,
  loginSchema,
}