function ProfilePict({userID}){
  return (
    <img src={'https://avatars.githubusercontent.com/u/' + userID} alt='github profile' >
  );
}

function ProfileLink({username}){
  return <a href={'https://github.com/' + username}> {username} ></a>;
}

function GithubInfo({}){
  return (
    <div class='github-info>
    <ProfilePict userID={userID} />
    <ProfileLink username={username} />
    </div>
  );
}

export default GithubInfo;
