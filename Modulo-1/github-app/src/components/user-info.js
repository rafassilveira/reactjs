import React,{PropTypes} from 'react'

const UserInfo= ({userinfo})=>(
<div className='user-info'>
		<img src={userinfo.photo} alt='foto do usuario'/>
		<h1>
		 <a href={`https//github.com/${userinfo.login}`}>{userinfo.username}</a>
		</h1>
		<ul className='repos-info'>
			<li> - Repositorios:{userinfo.repos} </li>
			<li> - Seguidores:{userinfo.followers}</li>
			<li> - Seguindo:{userinfo.following}</li>
		</ul>
	
</div>

)


UserInfo.propTypes ={
	userInfo: PropTypes.shape({
		username:PropTypes.string.isRequired,
		login:PropTypes.string.isRequired,
		photo:PropTypes.string.isRequired,
		repos:PropTypes.number.isRequired,
		followers:PropTypes.string.isRequired,
		following:PropTypes.string.isRequired
	})
}

export default UserInfo

