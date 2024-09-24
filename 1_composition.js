function getProfPict(userID){
  return `https://avatars.githubusercontent.com/u/${userID}`;
}

function getProfileLink(username){
  return `https://github.com/${username}`;
}

// contoh komposisi : beberapa fungsi dipanggil utk buat data yang kompleks

function getGithubInfo(username, userID){
  return {
    profile_link : getProfileLink(username),
    profile_pict : getProfPict(userID)
  };
}

console.log(getGithubInfo('mulyono',25523432));
