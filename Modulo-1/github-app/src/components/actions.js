import React,{ PropTypes } from "react";
import ajax from "@fdaciuk/ajax";

const Actions = ({ handleRepos, handleStarred }) => (
  <div className="actions">
    <button onClick={handleRepos}>Ver repositorios</button>
    <button onClick={handleStarred}>Ver favoritos</button>
  </div>
);

Actions.propTypes = {
	getRepos:PropTypes.func.isRequired,
	getStarred:PropTypes.func.isRequired
}
export default Actions;
