const UserProfile = (function () {
  let userId = "";
  let email = "";

  let getUserId = function () {
    return userId;
  };

  let setUserId = function (userId: string) {
    userId = userId;
  };
  let getEmail = function () {
    return email;
  };

  let setEmail = function (email: string) {
    email = email;
  };

  return {
    getUserId: getUserId,
    setUserId: setUserId,
    getEmail: getEmail,
    setEmail: setEmail,
  };
})();

export default UserProfile;
