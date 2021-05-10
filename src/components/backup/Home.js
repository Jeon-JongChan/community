import React, {useState, useEffect} from "react";
import {dbService} from "fbase"

const Home = () => {
	const [tweet, setTweet] = useState("");
	const [tweets, setTweets] = useState([]);
	const getNweets = async() => {
		const dbTweets = await dbService.collection("tweets").get();
		dbTweets.forEach((document) => {
			const tweetObject = {
				...document.data(),
				id:document.id,
			};
			setTweets((prev) => [tweetObject, ...prev]);
		})
	}
	useEffect(() => {
		getNweets();
	}, []);
	const onSubmit = async (event) => {
		event.preventDefault();
		await dbService.collection("tweets").add({
			tweet
			,createAt: Date.now()
		});
		setTweet("");
	}
	const onChange = (event) => {
		const {target:{ value }} = event;
		setTweet(value);
	}
	console.log(tweets);
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={tweet} onChange={onChange} type="text" placeholder="WHAT's on your mind?" maxLength={120}/>
				<input type="submit" value="Tweet"/>
			</form>
			<div>
				{tweets.map(tweet => <div>
					<h4>{tweets.tweet}</h4>	
				</div>)}
			</div>
		</div>
	)
}

export default Home;