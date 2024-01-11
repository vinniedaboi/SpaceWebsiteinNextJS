"use client"
import Page from '@/components/page'
import Section from '@/components/section'
import Image from 'next/image'
import { useState } from "react";
import Link from 'next/link';
import useSWR, { mutate } from "swr";

// https://api.spaceflightnewsapi.net/v4/articles/?format=json

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
export default function Index(){
	const handleChange = (e) => {
		setN(e.target.value);
	};
	  const doRefresh = () => {
		mutate("https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=3");
	};
	const [n, setN] = useState();
	const {data: data1, error: error1} = useSWR("https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=3", fetcher);
	if (error1)
    return <div className="p-2 m-2">Failed to load : {error1.message}</div>;
  	if (!data1) return <div className="p-2 m-2">Loading...</div>;

	const results = data1.results

	// first article below
	const first_article = results?.[0]
	const first_title = first_article?.title
	const first_article_link = first_article?.url
	const first_image_url = first_article?.image_url
	const first_body_text = first_article?.summary

	// todo: Make the news more detailed

	// second article below

	const second_article = results?.[1]
	const second_title = second_article?.title
	const second_article_link = second_article?.url
	const second_image_url = second_article?.image_url
	const second_body_text = second_article?.summary
	return(
	<Page>
		<Section>
			<div className='align-content: center; my-8'>
				<h1 className='text-5xl font-black text-zinc-300'>Space News Today</h1>
			</div>
			<br></br>
			<div className='outline-double outline-offset-8'>
				<div>
				<Link href={first_article_link}>
						<a className="text-3xl hover:bg-sky-700 font-bold" target="_blank" rel="noopener noreferrer">{first_title}</a>
						</Link>
				</div>
				<br></br>
				<div>
				<Image src={first_image_url} alt='Article Image' width={1000} height={600} layout='responsive'/>
				</div>
				<br></br>
				<div className=''>
					<p className='font-light text-xl'>{first_body_text}</p>
				</div>
			</div>
			<br></br>
			<div className='outline-double outline-offset-8'>
				<div className='my-8'>
				<Link href={second_article_link}>
						<a className="text-3xl hover:bg-sky-700 font-bold" target="_blank" rel="noopener noreferrer">{second_title}</a>
						</Link>
				</div>
				<div>
				<Image src={second_image_url} alt='Article Image' width={1000} height={600} layout='responsive'/>
				</div>
				<br></br>
				<div className=''>
					<p className='font-light text-xl'>{second_body_text}</p>
				</div>
			</div>
		</Section>
	</Page>
	)
}
