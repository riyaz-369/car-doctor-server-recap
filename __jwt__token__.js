/**
 * ----------------------------
 *      MAKE API SECURE
 * ----------------------------
 * The person who should have
 *
 * concept:
 * 1. assign two tokens for each person (access token, refresh token)
 * 2. access token contains: user identification (email, role, etc). valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh token is invalid then logout the user
 */

/**
 * JWT --> json web token
 * 1. generate a token by using jwt.sign
 * 2. crate api set to cookie. http only, secure, sameSite
 * 3. from client side: axios withCredentials:true
 * 4. cors setup origin and credential: true
 */

/**
 * for secure api call
 * 1. server side: install cookie parser and use it as a middleware
 * 2. and you get on: req.cookies
 * 3. on the client side: make api call using axios withCredential: true
 * 4.
 */
