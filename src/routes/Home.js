import React, {useState} from "react";
import {dbService} from "fbase"

const Home = () => {
	const [tweet, setTweet] = useState("");
	const onSubmit = (event) => {
		event.preventDefault();
	}
	const onChange = () => {
		const {target:{ value }} = event;
		setTweet(value);
	}
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={tweet} onChange={onChange} type="text" placeholder="WHAT's on your mind?" maxLength={120}/>
				<input type="submit" value="Tweet"/>
			</form>
		</div>
	)
}

export default Home;