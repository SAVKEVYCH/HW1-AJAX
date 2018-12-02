const URL = 'https://jsonplaceholder.typicode.com';

const request = (endpoint, method = "GET", data = {}) => {
	const body = method === "GET" ? void 0: JSON.stringify(data);
	return fetch(`${URL}/${endpoint}`,{
		method, 
		body,
		headers: {
			"Content-Type": "application/json"
		}
	}).then((res) => res.json())
	.catch((err) => console.error(err));
};

const setContent = (content) => {
	document.body.innerHTML += content;
}

const getUser = async () => {
	try{
		
		const users = await request("users/10");
		setContent(JSON.stringify(users));
}catch(err){
 alert(err);
}
}
getUser();