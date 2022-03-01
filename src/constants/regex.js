/* eslint-disable no-use-before-define */
export const RegEx = {
	PASSWORD: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/),
	USERNAME: new RegExp(/^(?=.{6,14}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/),
};
