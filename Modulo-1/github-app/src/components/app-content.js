import React, { PropTypes } from "react";
import Search from "./search";
import UserInfo from "./user-info.js";
import Actions from "./actions";
import Repos from "./repos";

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  handleRepos,
  handleStarred,
}) => (
  <div className="app">
    <Search handleSearch={handleSearch} />
    {/*!! converte o valor de dentro da variavel para o seu equivalente booleano*/}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && (
      <Actions handleRepos={handleRepos} handleStarred={handleStarred} />
    )}

    {!!repos.length && (
      <Repos className="repos" title="Repositรณrios:" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="starred" title="favoritos:" repos={starred} />
    )}
  </div>
);

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
};
export default AppContent;
